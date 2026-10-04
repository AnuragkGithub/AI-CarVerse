import React, { useState } from 'react';
import { Search, Sparkles, SlidersHorizontal, ArrowRight, ShieldCheck, Zap, Activity } from 'lucide-react';
import { CARS_DATA } from '../data/carsData';
import { formatPrice } from '../utils/formatters';

export default function Hero({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory,
  categories,
  onSelectCar,
  currency,
  onQuickDuel
}) {
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Suggestions filtered by query
  const suggestions = searchQuery.trim() === '' ? [] : CARS_DATA.filter(car => 
    car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.variants.some(v => v.name.toLowerCase().includes(searchQuery.toLowerCase()))
  ).slice(0, 5);

  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '4rem 0 3rem'
    }}>
      {/* Background Image Showcase with Cinematic Gradient Overlays */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url('/images/hero-banner.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 45%',
        filter: 'brightness(0.38) contrast(1.15)',
        zIndex: 0
      }} />

      {/* Atmospheric Vignette Gradients */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          linear-gradient(to bottom, rgba(7, 9, 14, 0.95) 0%, rgba(7, 9, 14, 0.4) 30%, rgba(7, 9, 14, 0.6) 70%, rgba(7, 9, 14, 1) 100%),
          radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.08) 0%, transparent 60%)
        `,
        zIndex: 1
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Top Floating Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          padding: '0.45rem 1.2rem',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(245, 158, 11, 0.12)',
          border: '1px solid rgba(245, 158, 11, 0.35)',
          backdropFilter: 'blur(10px)',
          marginBottom: '1.5rem',
          boxShadow: '0 0 25px rgba(245, 158, 11, 0.2)'
        }}>
          <Sparkles size={16} color="#fbbf24" />
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#fbbf24', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            The Global Vehicle Intelligence Matrix
          </span>
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontSize: 'clamp(2.3rem, 5.5vw, 4.4rem)',
          fontWeight: 900,
          lineHeight: 1.08,
          marginBottom: '1.25rem',
          letterSpacing: '-0.03em',
          maxWidth: '1100px',
          margin: '0 auto 1.25rem'
        }}>
          From <span className="text-cyan-gradient">Maruti Suzuki</span> to{' '}
          <span className="text-gold-gradient">Rolls-Royce</span>
          <br />
          <span style={{ color: '#fff', fontWeight: 800 }}>Compare Every Car on Earth.</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
          color: 'var(--text-muted)',
          maxWidth: '780px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.6
        }}>
          Deep technical specs, variant-by-variant breakdown, safety ratings, 
          engine audio synthesizer, and side-by-side differential analysis across all automotive tiers.
        </p>

        {/* Search Bar with Instant Autocomplete */}
        <div style={{
          maxWidth: '680px',
          margin: '0 auto 2rem',
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(18, 24, 38, 0.85)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            borderRadius: 'var(--radius-xl)',
            padding: '0.6rem 0.8rem 0.6rem 1.4rem',
            boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.7), 0 0 30px rgba(245, 158, 11, 0.15)',
            backdropFilter: 'blur(20px)'
          }}>
            <Search size={22} color="var(--gold-primary)" style={{ flexShrink: 0, marginRight: '0.75rem' }} />
            <input
              type="text"
              id="hero-search-input"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Search make, model, or variant (e.g. Swift ZXi, Phantom EWB, GT3 RS, G 63)..."
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'var(--text-muted)',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  marginRight: '0.5rem'
                }}
              >
                ✕
              </button>
            )}
            <a
              href="#catalog"
              className="btn-primary"
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: 'var(--radius-lg)',
                fontSize: '0.9rem',
                whiteSpace: 'nowrap'
              }}
            >
              Explore
            </a>
          </div>

          {/* Autocomplete Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              left: 0,
              width: '100%',
              background: 'var(--bg-secondary)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
              overflow: 'hidden',
              zIndex: 50,
              textAlign: 'left'
            }}>
              {suggestions.map(car => (
                <div
                  key={car.id}
                  onClick={() => {
                    onSelectCar(car);
                    setShowSuggestions(false);
                  }}
                  style={{
                    padding: '0.85rem 1.25rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                  className="suggestion-item"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <img 
                      src={car.heroImage} 
                      alt={car.model} 
                      style={{ width: '45px', height: '32px', objectFit: 'cover', borderRadius: '4px' }} 
                    />
                    <div>
                      <div style={{ fontWeight: 700, color: '#fff' }}>
                        {car.make} {car.model}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                        {car.variants.length} Variants ({car.variants.map(v => v.name.split(' ')[1] || v.name).join(', ')})
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 700, color: '#fbbf24', fontSize: '0.88rem' }}>
                      {formatPrice(car.startingPriceUSD, car.startingPriceINR, currency)}
                    </div>
                    <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>
                      {car.bodyType}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Category Selector Pills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          maxWidth: '980px',
          margin: '0 auto 2.5rem'
        }}>
          {categories.map(cat => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  backgroundColor: isActive ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  border: isActive ? '1px solid rgba(245, 158, 11, 0.6)' : '1px solid var(--border-subtle)',
                  color: isActive ? '#fbbf24' : 'var(--text-muted)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.2s'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Highlight Feature Badges */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
          maxWidth: '1050px',
          margin: '0 auto'
        }}>
          <div className="glass-card" style={{ padding: '1rem 1.25rem', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={22} color="#fbbf24" />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.92rem' }}>Maruti to Rolls-Royce</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>From $7.9k economy to $600k pinnacle suites</div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1rem 1.25rem', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={22} color="#22d3ee" />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.92rem' }}>All Variants & Trims</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Base to top-tier specs with direct feature diffs</div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1rem 1.25rem', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Activity size={22} color="#f87171" />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.92rem' }}>Engine Synthesizer</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Interactive Web Audio rev simulation for each car</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .suggestion-item:hover {
          background: rgba(255, 255, 255, 0.08) !important;
        }
      `}</style>
    </section>
  );
}
