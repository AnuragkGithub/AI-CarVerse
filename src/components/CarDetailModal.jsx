import React, { useState } from 'react';
import { 
  X, 
  Volume2, 
  Scale, 
  Check, 
  Heart, 
  Calculator, 
  Gauge, 
  Timer, 
  Fuel, 
  ShieldCheck, 
  Zap,
  Sparkles,
  ChevronRight,
  Info
} from 'lucide-react';
import { formatPrice, formatFullPrice, calculateEMI } from '../utils/formatters';
import { playEngineRev } from '../utils/engineAudio';

export default function CarDetailModal({ 
  car, 
  initialVariant,
  onClose, 
  currency, 
  onToggleCompare, 
  isInCompare,
  isFavorite,
  onToggleFavorite
}) {
  const [selectedVariant, setSelectedVariant] = useState(initialVariant || car.variants[0]);
  const [selectedColor, setSelectedColor] = useState(car.colors[0]);
  const [activeImage, setActiveImage] = useState(car.heroImage);
  const [isRevving, setIsRevving] = useState(false);
  const [revRpm, setRevRpm] = useState(800); // Idle RPM

  // Loan EMI Calculator state
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTenureYears, setLoanTenureYears] = useState(5);
  const [interestRate, setInterestRate] = useState(9.0);

  const priceAmount = currency === 'INR' ? selectedVariant.priceINR : selectedVariant.priceUSD;
  const downPaymentAmount = Math.round((priceAmount * downPaymentPercent) / 100);
  const loanPrincipal = priceAmount - downPaymentAmount;
  const monthlyEmi = calculateEMI(loanPrincipal, interestRate, loanTenureYears);

  const handleRev = () => {
    setIsRevving(true);
    playEngineRev(car.engineSoundType);
    
    // Animate RPM needle
    setRevRpm(6800);
    setTimeout(() => {
      setRevRpm(4200);
    }, 1000);
    setTimeout(() => {
      setRevRpm(800);
      setIsRevving(false);
    }, 2200);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(3, 5, 8, 0.88)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div 
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '1100px',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.9)'
        }}
      >
        {/* Header Bar */}
        <div style={{
          padding: '1.25rem 1.75rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(7, 9, 14, 0.6)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
                {car.make}
              </span>
              <span className="badge badge-gold" style={{ fontSize: '0.65rem' }}>
                {car.bodyType}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {car.year} Model
              </span>
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>
              {car.make} {car.model}
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Compare Toggle */}
            <button
              onClick={() => onToggleCompare(car, selectedVariant)}
              className="btn-cyan"
              style={{ fontSize: '0.8rem', padding: '0.5rem 0.9rem' }}
            >
              {isInCompare ? <Check size={15} /> : <Scale size={15} />}
              <span>{isInCompare ? 'In Comparison' : '+ Compare'}</span>
            </button>

            {/* Favorite Toggle */}
            <button
              onClick={() => onToggleFavorite(car.id)}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <Heart 
                size={18} 
                fill={isFavorite ? '#ef4444' : 'none'} 
                color={isFavorite ? '#ef4444' : '#fff'} 
              />
            </button>

            {/* Close Modal */}
            <button
              onClick={onClose}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div style={{
          padding: '1.75rem',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {/* Top Hero Section: Photo + Live Engine Synthesizer & RPM Gauge */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 1.25fr) minmax(280px, 0.95fr)',
            gap: '1.5rem',
            alignItems: 'stretch'
          }}>
            {/* Gallery View */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{
                height: '340px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                position: 'relative',
                border: `2px solid ${selectedColor.hex}`,
                boxShadow: `0 0 35px ${selectedColor.hex}33`,
                transition: 'border-color 0.3s ease'
              }}>
                <img 
                  src={activeImage} 
                  alt={car.model} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  background: 'rgba(0, 0, 0, 0.75)',
                  backdropFilter: 'blur(8px)',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: selectedColor.hex }}></span>
                  <span>Paint: <strong>{selectedColor.name}</strong></span>
                </div>
              </div>

              {/* Color Swatch Picker */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.6rem 1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                borderRadius: 'var(--radius-md)'
              }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Exterior Paint Options:</span>
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  {car.colors.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(c)}
                      title={c.name}
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: c.hex,
                        border: selectedColor.name === c.name ? '2px solid #fff' : '1px solid rgba(255, 255, 255, 0.3)',
                        transform: selectedColor.name === c.name ? 'scale(1.25)' : 'scale(1)',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Engine Audio Synthesizer & RPM Gauge & Variant Selector */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              justifyContent: 'space-between'
            }}>
              {/* Variant Picker Dropdown */}
              <div style={{
                padding: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>
                  Select Vehicle Variant / Trim
                </label>
                <select
                  value={selectedVariant.id}
                  onChange={(e) => {
                    const found = car.variants.find(v => v.id === e.target.value);
                    if (found) setSelectedVariant(found);
                  }}
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--bg-tertiary)',
                    color: '#fbbf24',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    padding: '0.6rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(245, 158, 11, 0.4)',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {car.variants.map(v => (
                    <option key={v.id} value={v.id}>
                      {v.name} — {formatPrice(v.priceUSD, v.priceINR, currency)}
                    </option>
                  ))}
                </select>

                <div style={{ marginTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Ex-Showroom Price:</span>
                  <span style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fbbf24', fontFamily: 'var(--font-heading)' }}>
                    {formatPrice(selectedVariant.priceUSD, selectedVariant.priceINR, currency)}
                  </span>
                </div>
              </div>

              {/* Interactive Engine Rev Synthesizer with Live RPM */}
              <div style={{
                padding: '1.25rem',
                backgroundColor: 'rgba(10, 13, 20, 0.9)',
                borderRadius: 'var(--radius-md)',
                border: isRevving ? '1px solid #fbbf24' : '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: isRevving ? '0 0 25px rgba(245, 158, 11, 0.3)' : undefined,
                transition: 'all 0.3s ease'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Volume2 size={18} color="#fbbf24" />
                    <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>
                      Engine Acoustics Synthesizer
                    </span>
                  </div>
                  <span style={{
                    fontFamily: 'monospace',
                    fontSize: '1.1rem',
                    fontWeight: 900,
                    color: isRevving ? '#ef4444' : '#10b981'
                  }}>
                    {revRpm} RPM
                  </span>
                </div>

                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '1rem' }}>
                  Acoustic profile: <strong>{car.engineSoundType.toUpperCase()}</strong> ({selectedVariant.engine})
                </div>

                {/* Rev Button */}
                <button
                  onClick={handleRev}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    background: isRevving ? 'var(--red-gradient)' : 'var(--gold-gradient)'
                  }}
                >
                  <Volume2 size={18} />
                  <span>{isRevving ? 'REVING FULL THROTTLE...' : 'PRESS GAS / REV ENGINE'}</span>
                </button>
              </div>

              {/* 4 Core Quick Spec Badges */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.5rem'
              }}>
                <div style={{ padding: '0.6rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '6px' }}>
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>Horsepower</span>
                  <div style={{ fontWeight: 800, color: '#fff' }}>{selectedVariant.powerHp} hp</div>
                </div>
                <div style={{ padding: '0.6rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '6px' }}>
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>0-100 km/h</span>
                  <div style={{ fontWeight: 800, color: '#fff' }}>{selectedVariant.acceleration0to100}s</div>
                </div>
                <div style={{ padding: '0.6rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '6px' }}>
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>Efficiency</span>
                  <div style={{ fontWeight: 800, color: '#fff' }}>{selectedVariant.mileageKmpl} km/l</div>
                </div>
                <div style={{ padding: '0.6rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '6px' }}>
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>Safety Rating</span>
                  <div style={{ fontWeight: 800, color: '#34d399', fontSize: '0.85rem' }}>{selectedVariant.safety.ncapRating}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Variant Hierarchy Comparison for this Car */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <Sparkles size={18} color="var(--gold-primary)" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                {car.model} Variant Hierarchy Breakdown
              </h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Compare what features you get as you upgrade between trims of the {car.make} {car.model}:
            </p>

            <div style={{
              overflowX: 'auto',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                  <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <th style={{ padding: '0.75rem 1rem', fontSize: '0.8rem', color: 'var(--text-dim)' }}>Variant</th>
                    <th style={{ padding: '0.75rem 1rem', fontSize: '0.8rem', color: 'var(--text-dim)' }}>Price</th>
                    <th style={{ padding: '0.75rem 1rem', fontSize: '0.8rem', color: 'var(--text-dim)' }}>Power</th>
                    <th style={{ padding: '0.75rem 1rem', fontSize: '0.8rem', color: 'var(--text-dim)' }}>Transmission</th>
                    <th style={{ padding: '0.75rem 1rem', fontSize: '0.8rem', color: 'var(--text-dim)' }}>Key Feature Highlight</th>
                  </tr>
                </thead>
                <tbody>
                  {car.variants.map(v => (
                    <tr 
                      key={v.id}
                      onClick={() => setSelectedVariant(v)}
                      style={{
                        backgroundColor: selectedVariant.id === v.id ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                        cursor: 'pointer'
                      }}
                    >
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: selectedVariant.id === v.id ? '#fbbf24' : '#fff' }}>
                        {v.name}
                      </td>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 800, color: '#fbbf24' }}>
                        {formatPrice(v.priceUSD, v.priceINR, currency)}
                      </td>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>
                        {v.powerHp} hp
                      </td>
                      <td style={{ padding: '0.85rem 1rem', color: 'var(--text-muted)' }}>
                        {v.transmission}
                      </td>
                      <td style={{ padding: '0.85rem 1rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        {v.comfort.sunroof !== 'None' ? `${v.comfort.sunroof}, ` : ''}
                        {v.infotainment.screen}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Interactive Loan & Monthly EMI Calculator */}
          <div className="glass-card" style={{
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Calculator size={20} color="#10b981" />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>
                Instant Financing & EMI Calculator for {selectedVariant.name}
              </h3>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              alignItems: 'center'
            }}>
              {/* Down Payment Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.4rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Down Payment ({downPaymentPercent}%)</span>
                  <span style={{ fontWeight: 700, color: '#fff' }}>
                    {formatPrice(
                      currency === 'INR' ? downPaymentAmount : downPaymentAmount,
                      currency === 'INR' ? downPaymentAmount : downPaymentAmount,
                      currency
                    )}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="60" 
                  step="5"
                  value={downPaymentPercent} 
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#10b981' }}
                />
              </div>

              {/* Loan Tenure Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.4rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Loan Tenure</span>
                  <span style={{ fontWeight: 700, color: '#fff' }}>{loanTenureYears} Years</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="7" 
                  step="1"
                  value={loanTenureYears} 
                  onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#06b6d4' }}
                />
              </div>

              {/* Estimated Monthly EMI Output */}
              <div style={{
                padding: '1rem',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Estimated Monthly EMI
                </div>
                <div style={{
                  fontSize: '1.75rem',
                  fontWeight: 900,
                  color: '#34d399',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {formatPrice(monthlyEmi, monthlyEmi, currency)} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>/mo</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                  @ {interestRate}% p.a. interest
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
