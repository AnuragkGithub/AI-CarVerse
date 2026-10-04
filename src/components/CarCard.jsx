import React, { useState } from 'react';
import { 
  Scale, 
  Heart, 
  Volume2, 
  Check, 
  ChevronRight, 
  Gauge, 
  Timer, 
  Fuel, 
  ShieldCheck,
  Zap,
  Sliders
} from 'lucide-react';
import { formatPrice } from '../utils/formatters';
import { playEngineRev } from '../utils/engineAudio';

export default function CarCard({ 
  car, 
  currency, 
  onSelectCar, 
  onToggleCompare, 
  isInCompare,
  isFavorite,
  onToggleFavorite,
  onDirectCompareRival
}) {
  // Selected variant state on the card level
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isRevving, setIsRevving] = useState(false);

  const activeVariant = car.variants[selectedVariantIndex] || car.variants[0];
  const activeColor = car.colors[selectedColorIndex] || car.colors[0];

  const handleRev = (e) => {
    e.stopPropagation();
    setIsRevving(true);
    playEngineRev(car.engineSoundType);
    setTimeout(() => {
      setIsRevving(false);
    }, 2200);
  };

  // Category badge style
  const getCategoryBadge = (cat) => {
    switch (cat) {
      case 'budget':
        return <span className="badge badge-emerald">Budget Economy</span>;
      case 'mid-market':
        return <span className="badge badge-cyan">Mid-Market SUV</span>;
      case 'premium-luxury':
        return <span className="badge badge-purple">Executive Luxury</span>;
      case 'supercar':
        return <span className="badge badge-red">Track Supercar</span>;
      case 'ultra-luxury':
        return <span className="badge badge-gold">The Pinnacle</span>;
      case 'electric':
        return <span className="badge badge-cyan">Next-Gen EV</span>;
      default:
        return <span className="badge badge-gold">{cat}</span>;
    }
  };

  return (
    <div 
      className="glass-card car-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
        transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        border: isInCompare 
          ? '1px solid var(--accent-cyan)' 
          : `1px solid rgba(255, 255, 255, 0.08)`,
        boxShadow: isInCompare 
          ? '0 0 25px rgba(6, 182, 212, 0.25)' 
          : undefined
      }}
    >
      {/* Top Banner & Quick Controls */}
      <div style={{
        position: 'relative',
        height: '220px',
        overflow: 'hidden',
        backgroundColor: '#0a0d14'
      }}>
        {/* Car Image with Zoom */}
        <img 
          src={car.heroImage} 
          alt={`${car.make} ${car.model}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            filter: 'brightness(0.95)'
          }}
          className="car-card-img"
        />

        {/* Ambient Gradient Overlay with active car color tint */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(to top, rgba(7, 9, 14, 0.95) 0%, transparent 60%)`,
          pointerEvents: 'none'
        }} />

        {/* Top Badges */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          zIndex: 2
        }}>
          {getCategoryBadge(car.category)}
          <span style={{
            fontSize: '0.68rem',
            color: 'var(--text-muted)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '2px 8px',
            borderRadius: '4px',
            backdropFilter: 'blur(4px)',
            width: 'fit-content'
          }}>
            {car.brandOrigin}
          </span>
        </div>

        {/* Top Right Actions (Rev Engine & Favorite) */}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          zIndex: 2
        }}>
          {/* Engine Rev Sound Button */}
          <button
            onClick={handleRev}
            style={{
              background: isRevving ? 'var(--gold-gradient)' : 'rgba(0, 0, 0, 0.65)',
              color: isRevving ? '#000' : '#fbbf24',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              borderRadius: 'var(--radius-full)',
              padding: '5px 10px',
              fontSize: '0.72rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              backdropFilter: 'blur(8px)',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            title={`Rev ${car.model} Engine (${car.engineSoundType})`}
          >
            <Volume2 size={13} />
            <span>{isRevving ? 'REV...' : 'SOUND'}</span>
            {isRevving && (
              <span className="audio-playing" style={{ display: 'inline-flex', gap: '2px', alignItems: 'center' }}>
                <span className="wave-bar" style={{ width: '2px', background: '#000' }}></span>
                <span className="wave-bar" style={{ width: '2px', background: '#000' }}></span>
                <span className="wave-bar" style={{ width: '2px', background: '#000' }}></span>
              </span>
            )}
          </button>

          {/* Favorite Wishlist Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(car.id);
            }}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 0, 0, 0.65)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            title={isFavorite ? "Remove from Saved" : "Save Car"}
          >
            <Heart 
              size={16} 
              fill={isFavorite ? '#ef4444' : 'none'} 
              color={isFavorite ? '#ef4444' : '#fff'} 
            />
          </button>
        </div>

        {/* Color Preview Swatches (Overlay at bottom of image) */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          zIndex: 2,
          background: 'rgba(0,0,0,0.5)',
          padding: '3px 8px',
          borderRadius: 'var(--radius-full)',
          backdropFilter: 'blur(4px)'
        }}>
          <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Color:</span>
          {car.colors.map((c, idx) => (
            <span
              key={idx}
              onClick={(e) => { e.stopPropagation(); setSelectedColorIndex(idx); }}
              title={c.name}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: c.hex,
                border: selectedColorIndex === idx ? '2px solid #fff' : '1px solid rgba(255,255,255,0.4)',
                cursor: 'pointer',
                transform: selectedColorIndex === idx ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.15s'
              }}
            />
          ))}
        </div>

        {/* Selected Color Name Label */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          right: '12px',
          fontSize: '0.68rem',
          color: '#fbbf24',
          zIndex: 2,
          fontWeight: 600
        }}>
          {activeColor.name}
        </div>
      </div>

      {/* Card Body */}
      <div style={{
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}>
        {/* Title & Brand */}
        <div style={{ marginBottom: '0.75rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {car.make}
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>
              {car.model}
            </h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: 600 }}>
              {car.year}
            </span>
          </div>
        </div>

        {/* Variant Selector Dropdown */}
        <div style={{
          marginBottom: '1rem',
          padding: '0.6rem 0.8rem',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 'var(--radius-md)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.3rem'
          }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
              Variant / Trim
            </span>
            <span style={{ fontSize: '0.7rem', color: '#06b6d4', fontWeight: 600 }}>
              {car.variants.length} Available
            </span>
          </div>
          <select
            value={selectedVariantIndex}
            onChange={(e) => setSelectedVariantIndex(Number(e.target.value))}
            style={{
              width: '100%',
              backgroundColor: 'var(--bg-tertiary)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '6px',
              padding: '0.35rem 0.5rem',
              fontSize: '0.8rem',
              color: '#fff',
              fontWeight: 600,
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {car.variants.map((variant, idx) => (
              <option key={variant.id} value={idx}>
                {variant.name} ({formatPrice(variant.priceUSD, variant.priceINR, currency)})
              </option>
            ))}
          </select>
        </div>

        {/* Dynamic Price Display */}
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: '1rem',
          paddingBottom: '0.85rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          <div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
              Variant Price
            </div>
            <div style={{
              fontSize: '1.45rem',
              fontWeight: 900,
              color: '#fbbf24',
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-heading)'
            }}>
              {formatPrice(activeVariant.priceUSD, activeVariant.priceINR, currency)}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Transmission</span>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-main)' }}>
              {activeVariant.gearboxType}
            </div>
          </div>
        </div>

        {/* 4 Key Spec Highlights (Dynamically bound to active variant) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.6rem',
          marginBottom: '1.25rem'
        }}>
          <div style={{
            padding: '0.55rem 0.75rem',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-dim)', fontSize: '0.7rem' }}>
              <Gauge size={13} color="#f59e0b" />
              <span>Power</span>
            </div>
            <div style={{ fontWeight: 800, fontSize: '0.92rem', color: '#fff' }}>
              {activeVariant.powerHp} <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>hp</span>
            </div>
          </div>

          <div style={{
            padding: '0.55rem 0.75rem',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-dim)', fontSize: '0.7rem' }}>
              <Timer size={13} color="#ef4444" />
              <span>0-100 km/h</span>
            </div>
            <div style={{ fontWeight: 800, fontSize: '0.92rem', color: '#fff' }}>
              {activeVariant.acceleration0to100} <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>sec</span>
            </div>
          </div>

          <div style={{
            padding: '0.55rem 0.75rem',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-dim)', fontSize: '0.7rem' }}>
              <Fuel size={13} color="#10b981" />
              <span>Efficiency</span>
            </div>
            <div style={{ fontWeight: 800, fontSize: '0.92rem', color: '#fff' }}>
              {activeVariant.mileageKmpl} <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>km/l</span>
            </div>
          </div>

          <div style={{
            padding: '0.55rem 0.75rem',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-dim)', fontSize: '0.7rem' }}>
              <ShieldCheck size={13} color="#06b6d4" />
              <span>Airbags</span>
            </div>
            <div style={{ fontWeight: 800, fontSize: '0.92rem', color: '#fff' }}>
              {activeVariant.safety.airbags} <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Airbags</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0.6rem',
          marginTop: 'auto'
        }}>
          {/* Compare Button */}
          <button
            onClick={() => onToggleCompare(car, activeVariant)}
            style={{
              padding: '0.65rem 0.8rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.82rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              backgroundColor: isInCompare ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255, 255, 255, 0.06)',
              color: isInCompare ? '#22d3ee' : '#fff',
              border: isInCompare ? '1px solid rgba(6, 182, 212, 0.6)' : '1px solid var(--border-subtle)',
              transition: 'all 0.2s'
            }}
          >
            {isInCompare ? (
              <>
                <Check size={15} />
                <span>Comparing</span>
              </>
            ) : (
              <>
                <Scale size={15} />
                <span>+ Compare</span>
              </>
            )}
          </button>

          {/* Deep Dive Modal Button */}
          <button
            onClick={() => onSelectCar(car, activeVariant)}
            className="btn-primary"
            style={{
              padding: '0.65rem 0.8rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.82rem',
              fontWeight: 700
            }}
          >
            <span>Specs</span>
            <ChevronRight size={15} />
          </button>
        </div>
      </div>

      <style>{`
        .car-card:hover .car-card-img {
          transform: scale(1.06);
        }
        .car-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </div>
  );
}
