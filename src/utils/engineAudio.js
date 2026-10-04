// Web Audio API engine sound synthesizer for realistic vehicle rev simulation
// Generates engine acoustic profiles for 3-Cylinder, Inline-4 Turbo, V6, V8, V12, and Electric Motors.

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playEngineRev(engineType = 'v8-growl') {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const duration = 2.2;

    // Master gain
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.01, now);
    masterGain.gain.exponentialRampToValueAtTime(0.35, now + 0.15);
    masterGain.gain.exponentialRampToValueAtTime(0.4, now + 0.9);
    masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    masterGain.connect(ctx.destination);

    if (engineType === 'ev-hyper') {
      // Futuristic EV dual oscillator warp
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();

      osc1.type = 'sine';
      osc2.type = 'triangle';

      osc1.frequency.setValueAtTime(160, now);
      osc1.frequency.exponentialRampToValueAtTime(1400, now + 1.2);
      osc1.frequency.exponentialRampToValueAtTime(450, now + duration);

      osc2.frequency.setValueAtTime(165, now);
      osc2.frequency.exponentialRampToValueAtTime(1420, now + 1.2);
      osc2.frequency.exponentialRampToValueAtTime(455, now + duration);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(4000, now + 1.2);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(masterGain);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + duration);
      osc2.stop(now + duration);
      return;
    }

    // ICE (Internal Combustion Engines): harmonics and rumble
    let baseFreq = 48; // V8 default
    let highFreq = 160;
    let waveType = 'sawtooth';

    if (engineType === '3cyl-economy') {
      baseFreq = 65;
      highFreq = 135;
      waveType = 'triangle';
    } else if (engineType === 'inline4-turbo') {
      baseFreq = 58;
      highFreq = 175;
      waveType = 'sawtooth';
    } else if (engineType === 'v6-twin-turbo') {
      baseFreq = 52;
      highFreq = 195;
      waveType = 'sawtooth';
    } else if (engineType === 'v8-growl') {
      baseFreq = 42;
      highFreq = 180;
      waveType = 'sawtooth';
    } else if (engineType === 'v12-symphony') {
      baseFreq = 78;
      highFreq = 340;
      waveType = 'sawtooth';
    }

    // Primary fundamental oscillator
    const osc1 = ctx.createOscillator();
    osc1.type = waveType;
    osc1.frequency.setValueAtTime(baseFreq, now);
    osc1.frequency.exponentialRampToValueAtTime(highFreq, now + 0.85);
    osc1.frequency.exponentialRampToValueAtTime(baseFreq * 1.1, now + duration);

    // Sub-harmonic for mechanical bass presence
    const subOsc = ctx.createOscillator();
    subOsc.type = 'triangle';
    subOsc.frequency.setValueAtTime(baseFreq * 0.5, now);
    subOsc.frequency.exponentialRampToValueAtTime(highFreq * 0.5, now + 0.85);
    subOsc.frequency.exponentialRampToValueAtTime(baseFreq * 0.55, now + duration);

    // Lowpass filter for throatiness
    const lowpass = ctx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.setValueAtTime(baseFreq * 4, now);
    lowpass.frequency.exponentialRampToValueAtTime(highFreq * 5, now + 0.85);
    lowpass.frequency.exponentialRampToValueAtTime(baseFreq * 3, now + duration);
    lowpass.Q.setValueAtTime(engineType === 'v12-symphony' ? 6 : 4, now);

    // Distortion/Overdrive waveshaper for realistic engine growl
    const distortion = ctx.createWaveShaper();
    distortion.curve = makeDistortionCurve(engineType === 'v8-growl' ? 45 : 25);
    distortion.oversample = '4x';

    osc1.connect(distortion);
    subOsc.connect(distortion);
    distortion.connect(lowpass);
    lowpass.connect(masterGain);

    osc1.start(now);
    subOsc.start(now);
    osc1.stop(now + duration);
    subOsc.stop(now + duration);

  } catch (err) {
    console.warn("Engine sound synthesizer error:", err);
  }
}

function makeDistortionCurve(amount) {
  const k = typeof amount === 'number' ? amount : 20;
  const n_samples = 44100;
  const curve = new Float32Array(n_samples);
  const deg = Math.PI / 180;
  for (let i = 0; i < n_samples; ++i) {
    const x = (i * 2) / n_samples - 1;
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }
  return curve;
}
