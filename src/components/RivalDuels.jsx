import React from 'react';
import { Flame, Swords, ArrowRight, Sparkles } from 'lucide-react';
import { PRESET_COMPARISONS, CARS_DATA } from '../data/carsData';
import { formatPrice } from '../utils/formatters';

export default function RivalDuels({ onLaunchDuel, currency }) {
  return (
    <section id="duels" style={{ padding: '4rem 0', scrollMarginTop: '80px' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: '#ef4444',
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '0.4rem'
          }}>
            <Flame size={16} />
            Curated Head-to-Head Clashes
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 900 }}>
            Iconic <span style={{
              background: 'linear-gradient(135deg, #f87171 0%, #dc2626 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Rival Duels</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '640px', margin: '0.5rem auto 0' }}>
            Instant blockbuster matchups across radically different segments. See how the world's most talked-about vehicles compete on every measurable metric.
          </p>
        </div>

        {/* Duels Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}>
          {PRESET_COMPARISONS.map(duel => {
            const car1 = CARS_DATA.find(c => c.id === duel.car1Id);
            const car2 = CARS_DATA.find(c => c.id === duel.car2Id);
            if (!car1 || !car2) return null;

            const var1 = car1.variants.find(v => v.id === duel.variant1Id) || car1.variants[0];
            const var2 = car2.variants.find(v => v.id === duel.variant2Id) || car2.variants[0];

            return (
              <div 
                key={duel.id}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden'
                }}
              >
                {/* Duel Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>
                    {duel.badge}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                    Direct Matchup
                  </span>
                </div>

                {/* Cars Face-off Cards */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto 1fr',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem'
                }}>
                  {/* Car 1 */}
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      height: '80px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      marginBottom: '0.5rem',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      <img 
                        src={car1.heroImage} 
                        alt={car1.model} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{car1.make}</div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#fff' }}>{car1.model}</div>
                    <div style={{ fontSize: '0.72rem', color: '#fbbf24', fontWeight: 700 }}>
                      {formatPrice(var1.priceUSD, var1.priceINR, currency)}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                      {var1.powerHp} hp • {var1.acceleration0to100}s
                    </div>
                  </div>

                  {/* VS Emblem */}
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(239, 68, 68, 0.15)',
                    border: '1px solid rgba(239, 68, 68, 0.4)',
                    color: '#f87171',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: '0.75rem',
                    boxShadow: '0 0 15px rgba(239, 68, 68, 0.2)'
                  }}>
                    VS
                  </div>

                  {/* Car 2 */}
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      height: '80px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      marginBottom: '0.5rem',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      <img 
                        src={car2.heroImage} 
                        alt={car2.model} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{car2.make}</div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#fff' }}>{car2.model}</div>
                    <div style={{ fontSize: '0.72rem', color: '#fbbf24', fontWeight: 700 }}>
                      {formatPrice(var2.priceUSD, var2.priceINR, currency)}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                      {var2.powerHp} hp • {var2.acceleration0to100}s
                    </div>
                  </div>
                </div>

                {/* Duel Title */}
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.35rem', color: '#fff' }}>
                  {duel.title}
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  {duel.subtitle}
                </p>

                {/* Launch Button */}
                <button
                  onClick={() => onLaunchDuel(car1, var1, car2, var2)}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.65rem',
                    fontSize: '0.85rem'
                  }}
                >
                  <Swords size={16} />
                  <span>Launch Duel in Matrix</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
