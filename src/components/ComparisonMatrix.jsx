import React, { useState } from 'react';
import { 
  Scale, 
  Check, 
  X, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Trophy, 
  SlidersHorizontal,
  Printer,
  Share2,
  Plus,
  Zap,
  Gauge,
  ShieldAlert,
  Fuel,
  Volume2
} from 'lucide-react';
import { COMPARISON_CATEGORIES, CARS_DATA } from '../data/carsData';
import { formatPrice, getNestedValue } from '../utils/formatters';
import { playEngineRev } from '../utils/engineAudio';
import confetti from 'canvas-confetti';

export default function ComparisonMatrix({ 
  comparisonList, 
  onRemoveFromCompare, 
  onUpdateVariant, 
  onAddCarToCompare, 
  currency,
  onOpenCarModal
}) {
  const [highlightDiffs, setHighlightDiffs] = useState(true);
  const [showWinnerBadges, setShowWinnerBadges] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    pricing: true,
    performance: true,
    economy: true,
    dimensions: true,
    chassis: false,
    luxury: true,
    infotainment: true,
    safety: true
  });
  const [showAddCarModal, setShowAddCarModal] = useState(false);
  const [revvingCarId, setRevvingCarId] = useState(null);

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleRevEngine = (car) => {
    setRevvingCarId(car.id);
    playEngineRev(car.engineSoundType);
    setTimeout(() => {
      setRevvingCarId(null);
    }, 2200);
  };

  const handleShareOrPrint = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    window.print();
  };

  // Helper to determine winner for a numeric field
  const getWinnerIndex = (field) => {
    if (!field.highlightWinner || comparisonList.length < 2) return -1;
    
    let bestVal = field.highlightWinner === 'highest' ? -Infinity : Infinity;
    let winnerIdx = -1;

    comparisonList.forEach((item, index) => {
      let val;
      if (field.type === 'price') {
        val = currency === 'INR' ? item.variant.priceINR : item.variant.priceUSD;
      } else if (field.type === 'nested') {
        val = getNestedValue(item.variant, field.key);
      } else {
        val = item.variant[field.key];
      }

      if (typeof val === 'number' && !isNaN(val)) {
        if (field.highlightWinner === 'highest') {
          if (val > bestVal) {
            bestVal = val;
            winnerIdx = index;
          }
        } else if (field.highlightWinner === 'lowest') {
          if (val < bestVal && val > 0) {
            bestVal = val;
            winnerIdx = index;
          }
        }
      }
    });

    return winnerIdx;
  };

  // Check if all values in a row are different
  const areValuesDifferent = (field) => {
    if (comparisonList.length < 2) return false;
    const values = comparisonList.map(item => {
      if (field.type === 'price') {
        return item.variant.priceUSD;
      } else if (field.type === 'nested') {
        return getNestedValue(item.variant, field.key);
      }
      return item.variant[field.key];
    });

    return new Set(values).size > 1;
  };

  // If no cars selected in comparison matrix, show quick launcher
  if (comparisonList.length === 0) {
    return (
      <section id="matrix" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div className="glass-card" style={{
            padding: '4rem 2rem',
            maxWidth: '850px',
            margin: '0 auto',
            border: '1px dashed rgba(245, 158, 11, 0.4)'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '20px',
              background: 'rgba(245, 158, 11, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              boxShadow: '0 0 30px rgba(245, 158, 11, 0.2)'
            }}>
              <Scale size={32} color="#fbbf24" />
            </div>

            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              Comparison Matrix is Ready
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
              Select 2 to 4 cars and their specific variants from the catalog below, or load one of our curated showcase duels to see instantaneous multi-aspect spec analysis.
            </p>

            {/* Quick 1-Click Comparison Pre-loaders */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              <button
                onClick={() => {
                  const swift = CARS_DATA.find(c => c.id === 'maruti-swift');
                  const phantom = CARS_DATA.find(c => c.id === 'rolls-royce-phantom');
                  if (swift && phantom) {
                    onAddCarToCompare(swift, swift.variants[2]);
                    onAddCarToCompare(phantom, phantom.variants[1]);
                  }
                }}
                className="btn-primary"
                style={{ fontSize: '0.85rem' }}
              >
                <Sparkles size={16} />
                Load: Maruti Swift vs Rolls-Royce Phantom
              </button>

              <button
                onClick={() => {
                  const porsche = CARS_DATA.find(c => c.id === 'porsche-911');
                  const ferrari = CARS_DATA.find(c => c.id === 'ferrari-296-gtb');
                  if (porsche && ferrari) {
                    onAddCarToCompare(porsche, porsche.variants[1]);
                    onAddCarToCompare(ferrari, ferrari.variants[1]);
                  }
                }}
                className="btn-cyan"
                style={{ fontSize: '0.85rem' }}
              >
                <Zap size={16} />
                Load: Porsche 911 GT3 RS vs Ferrari 296 GTB
              </button>

              <button
                onClick={() => {
                  const tesla = CARS_DATA.find(c => c.id === 'tesla-model-s');
                  const bmw = CARS_DATA.find(c => c.id === 'bmw-3-series');
                  if (tesla && bmw) {
                    onAddCarToCompare(tesla, tesla.variants[1]);
                    onAddCarToCompare(bmw, bmw.variants[1]);
                  }
                }}
                className="btn-secondary"
                style={{ fontSize: '0.85rem' }}
              >
                Load: Tesla Plaid vs BMW M340i
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="matrix" style={{ padding: '4rem 0', scrollMarginTop: '80px' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#06b6d4',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.3rem'
            }}>
              <Scale size={16} />
              Side-by-Side Analysis
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 900 }}>
              Deep Comparison <span className="text-gold-gradient">Matrix</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              Comparing {comparisonList.length} vehicles. Change variants on the fly to see how trims stack up.
            </p>
          </div>

          {/* Matrix Controls & Actions */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
            {/* Diff Highlight Toggle */}
            <button
              onClick={() => setHighlightDiffs(!highlightDiffs)}
              className="btn-secondary"
              style={{
                fontSize: '0.82rem',
                padding: '0.55rem 0.9rem',
                backgroundColor: highlightDiffs ? 'rgba(245, 158, 11, 0.15)' : undefined,
                borderColor: highlightDiffs ? 'rgba(245, 158, 11, 0.5)' : undefined,
                color: highlightDiffs ? '#fbbf24' : 'var(--text-main)'
              }}
            >
              <Sparkles size={15} />
              <span>{highlightDiffs ? 'Diffs Highlighted' : 'Highlight Diffs'}</span>
            </button>

            {/* Winner Badges Toggle */}
            <button
              onClick={() => setShowWinnerBadges(!showWinnerBadges)}
              className="btn-secondary"
              style={{
                fontSize: '0.82rem',
                padding: '0.55rem 0.9rem',
                backgroundColor: showWinnerBadges ? 'rgba(16, 185, 129, 0.15)' : undefined,
                borderColor: showWinnerBadges ? 'rgba(16, 185, 129, 0.5)' : undefined,
                color: showWinnerBadges ? '#34d399' : 'var(--text-main)'
              }}
            >
              <Trophy size={15} />
              <span>{showWinnerBadges ? 'Winner Badges On' : 'Show Winners'}</span>
            </button>

            {/* Add Car Button (if < 4) */}
            {comparisonList.length < 4 && (
              <button
                onClick={() => setShowAddCarModal(true)}
                className="btn-cyan"
                style={{ fontSize: '0.82rem', padding: '0.55rem 1rem' }}
              >
                <Plus size={15} />
                <span>Add Vehicle ({4 - comparisonList.length} slots left)</span>
              </button>
            )}

            {/* Print / Export Report */}
            <button
              onClick={handleShareOrPrint}
              className="btn-secondary"
              style={{ fontSize: '0.82rem', padding: '0.55rem 0.9rem' }}
              title="Print or Export Comparison Report"
            >
              <Printer size={15} />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* Visual Spec Scorecard / Radar Equivalent Bar Analyzer */}
        <div className="glass-card" style={{
          padding: '1.5rem',
          marginBottom: '2rem',
          background: 'linear-gradient(135deg, rgba(14, 18, 26, 0.95) 0%, rgba(20, 26, 38, 0.95) 100%)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Gauge size={18} color="var(--gold-primary)" />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>
                Instant Spec Scorecard Analysis
              </h3>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              Normalized benchmark across active variants
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${comparisonList.length}, 1fr)`,
            gap: '1.25rem'
          }}>
            {comparisonList.map((item, idx) => {
              // Calculate relative metric scores (0 - 100)
              const hpScore = Math.min(100, Math.round((item.variant.powerHp / 1020) * 100));
              const accelScore = Math.max(10, Math.min(100, Math.round(((13 - item.variant.acceleration0to100) / 11) * 100)));
              const efficiencyScore = Math.min(100, Math.round((item.variant.mileageKmpl / 26) * 100));
              const safetyScore = Math.min(100, (item.variant.safety.airbags / 10) * 100);

              return (
                <div key={item.car.id} style={{
                  padding: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                  <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.2rem', color: '#fff' }}>
                    {item.car.make} {item.car.model}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#fbbf24', fontWeight: 600, marginBottom: '0.85rem' }}>
                    {item.variant.name}
                  </div>

                  {/* Power Bar */}
                  <div style={{ marginBottom: '0.6rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '3px' }}>
                      <span>Horsepower ({item.variant.powerHp} hp)</span>
                      <span>{hpScore}%</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${hpScore}%`, height: '100%', background: 'var(--gold-gradient)', borderRadius: '3px' }}></div>
                    </div>
                  </div>

                  {/* Quickness Bar */}
                  <div style={{ marginBottom: '0.6rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '3px' }}>
                      <span>Quickness 0-100 ({item.variant.acceleration0to100}s)</span>
                      <span>{accelScore}%</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${accelScore}%`, height: '100%', background: 'var(--red-gradient)', borderRadius: '3px' }}></div>
                    </div>
                  </div>

                  {/* Fuel / Energy Efficiency Bar */}
                  <div style={{ marginBottom: '0.6rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '3px' }}>
                      <span>Efficiency ({item.variant.mileageKmpl} km/l)</span>
                      <span>{efficiencyScore}%</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${efficiencyScore}%`, height: '100%', background: 'var(--emerald-gradient)', borderRadius: '3px' }}></div>
                    </div>
                  </div>

                  {/* Safety & Airbags */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '3px' }}>
                      <span>Safety ({item.variant.safety.airbags} Airbags)</span>
                      <span>{safetyScore}%</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${safetyScore}%`, height: '100%', background: 'var(--cyan-gradient)', borderRadius: '3px' }}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* The Matrix Table */}
        <div style={{
          overflowX: 'auto',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'var(--bg-secondary)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            minWidth: '780px',
            textAlign: 'left'
          }}>
            {/* Table Header: Sticky Vehicle Cards with In-Column Variant Switchers */}
            <thead>
              <tr style={{ background: 'rgba(10, 13, 20, 0.95)', borderBottom: '2px solid rgba(255, 255, 255, 0.1)' }}>
                {/* Feature Label Column */}
                <th style={{
                  padding: '1.5rem',
                  width: '260px',
                  verticalAlign: 'bottom',
                  borderRight: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Parameters
                  </div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>
                    Feature Matrix
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Switch variant dropdown below to compare trims
                  </div>
                </th>

                {/* Car Columns */}
                {comparisonList.map((item, colIdx) => (
                  <th key={item.car.id} style={{
                    padding: '1.25rem',
                    verticalAlign: 'top',
                    minWidth: '260px',
                    borderRight: colIdx < comparisonList.length - 1 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
                    position: 'relative'
                  }}>
                    {/* Remove Button */}
                    <button
                      onClick={() => onRemoveFromCompare(item.car.id)}
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(239, 68, 68, 0.2)',
                        border: '1px solid rgba(239, 68, 68, 0.4)',
                        color: '#f87171',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                      title="Remove from comparison"
                    >
                      <X size={14} />
                    </button>

                    {/* Car Thumbnail & Rev Sound */}
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <img 
                        src={item.car.heroImage} 
                        alt={item.car.model} 
                        style={{
                          width: '70px',
                          height: '46px',
                          objectFit: 'cover',
                          borderRadius: '6px',
                          border: '1px solid rgba(255, 255, 255, 0.15)'
                        }}
                      />
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
                          {item.car.make}
                        </div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>
                          {item.car.model}
                        </div>
                      </div>
                    </div>

                    {/* Sound Rev & Deep Dive Links */}
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <button
                        onClick={() => handleRevEngine(item.car)}
                        style={{
                          flex: 1,
                          padding: '4px 8px',
                          background: revvingCarId === item.car.id ? 'var(--gold-gradient)' : 'rgba(245, 158, 11, 0.12)',
                          color: revvingCarId === item.car.id ? '#000' : '#fbbf24',
                          border: '1px solid rgba(245, 158, 11, 0.3)',
                          borderRadius: '6px',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '4px'
                        }}
                      >
                        <Volume2 size={12} />
                        <span>{revvingCarId === item.car.id ? 'Revving...' : 'Rev Sound'}</span>
                      </button>

                      <button
                        onClick={() => onOpenCarModal(item.car, item.variant)}
                        style={{
                          padding: '4px 8px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: 'var(--text-main)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '6px',
                          fontSize: '0.7rem',
                          fontWeight: 600
                        }}
                      >
                        Full Details
                      </button>
                    </div>

                    {/* Variant Selector Inside the Matrix Header */}
                    <div style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      padding: '0.5rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      <div style={{ fontSize: '0.68rem', color: '#06b6d4', fontWeight: 700, marginBottom: '2px', textTransform: 'uppercase' }}>
                        Active Variant
                      </div>
                      <select
                        value={item.variant.id}
                        onChange={(e) => {
                          const newVar = item.car.variants.find(v => v.id === e.target.value);
                          if (newVar) {
                            onUpdateVariant(item.car.id, newVar);
                          }
                        }}
                        style={{
                          width: '100%',
                          backgroundColor: 'var(--bg-tertiary)',
                          color: '#fff',
                          fontWeight: 700,
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '4px',
                          padding: '0.35rem 0.5rem',
                          fontSize: '0.8rem',
                          outline: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        {item.car.variants.map(v => (
                          <option key={v.id} value={v.id}>
                            {v.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body by Categories */}
            <tbody>
              {COMPARISON_CATEGORIES.map(category => {
                const isExpanded = expandedSections[category.id];

                return (
                  <React.Fragment key={category.id}>
                    {/* Category Accordion Header Row */}
                    <tr 
                      onClick={() => toggleSection(category.id)}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        borderTop: '2px solid rgba(255, 255, 255, 0.08)',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                        cursor: 'pointer'
                      }}
                    >
                      <td 
                        colSpan={comparisonList.length + 1}
                        style={{
                          padding: '0.85rem 1.5rem',
                          fontWeight: 800,
                          fontSize: '0.95rem',
                          color: '#fbbf24',
                          letterSpacing: '0.02em'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {category.title}
                          </span>
                          <span style={{ color: 'var(--text-muted)' }}>
                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </span>
                        </div>
                      </td>
                    </tr>

                    {/* Field Rows */}
                    {isExpanded && category.fields.map(field => {
                      const isDiff = areValuesDifferent(field);
                      const winnerIndex = showWinnerBadges ? getWinnerIndex(field) : -1;

                      return (
                        <tr 
                          key={field.key}
                          style={{
                            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                            transition: 'background 0.15s'
                          }}
                          className={highlightDiffs && isDiff ? 'diff-row' : ''}
                        >
                          {/* Label Column */}
                          <td style={{
                            padding: '0.85rem 1.5rem',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            color: 'var(--text-muted)',
                            borderRight: '1px solid rgba(255, 255, 255, 0.06)',
                            backgroundColor: 'rgba(7, 9, 14, 0.3)'
                          }}>
                            {field.label}
                          </td>

                          {/* Values Columns */}
                          {comparisonList.map((item, colIdx) => {
                            let rawValue;
                            if (field.type === 'price') {
                              rawValue = formatPrice(item.variant.priceUSD, item.variant.priceINR, currency);
                            } else if (field.type === 'nested') {
                              rawValue = getNestedValue(item.variant, field.key);
                            } else {
                              rawValue = item.variant[field.key];
                            }

                            const isWinner = winnerIndex === colIdx;

                            return (
                              <td 
                                key={item.car.id}
                                className={`
                                  ${highlightDiffs && isDiff ? 'diff-cell-highlight' : ''}
                                  ${isWinner ? 'winner-cell-highlight' : ''}
                                `}
                                style={{
                                  padding: '0.85rem 1.25rem',
                                  fontSize: '0.88rem',
                                  fontWeight: typeof rawValue === 'number' || field.type === 'price' ? 700 : 500,
                                  color: field.type === 'price' ? '#fbbf24' : '#fff',
                                  borderRight: colIdx < comparisonList.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
                                  position: 'relative'
                                }}
                              >
                                {isWinner && (
                                  <span className="winner-badge-pill">
                                    ★ Best
                                  </span>
                                )}

                                {field.type === 'boolean' ? (
                                  rawValue ? (
                                    <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}>
                                      <Check size={16} /> Standard
                                    </span>
                                  ) : (
                                    <span style={{ color: 'var(--text-dim)' }}>— Not Available</span>
                                  )
                                ) : (
                                  <span>
                                    {rawValue !== undefined && rawValue !== null ? String(rawValue) : '—'}
                                    {field.unit && typeof rawValue === 'number' ? field.unit : ''}
                                  </span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Car Modal Picker */}
      {showAddCarModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div className="glass-card" style={{
            maxWidth: '650px',
            width: '100%',
            maxHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>
                  Select Vehicle to Compare
                </h3>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                  Add up to 4 vehicles to the comparison matrix
                </div>
              </div>
              <button 
                onClick={() => setShowAddCarModal(false)}
                style={{ color: 'var(--text-muted)' }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: '1rem 1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {CARS_DATA.filter(c => !comparisonList.some(item => item.car.id === c.id)).map(car => (
                <div
                  key={car.id}
                  onClick={() => {
                    onAddCarToCompare(car, car.variants[0]);
                    setShowAddCarModal(false);
                  }}
                  style={{
                    padding: '0.85rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  className="add-car-row"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <img 
                      src={car.heroImage} 
                      alt={car.model} 
                      style={{ width: '55px', height: '38px', objectFit: 'cover', borderRadius: '4px' }}
                    />
                    <div>
                      <div style={{ fontWeight: 700, color: '#fff' }}>
                        {car.make} {car.model}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                        {car.bodyType} • {car.variants.length} Variants
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 800, color: '#fbbf24', fontSize: '0.9rem' }}>
                      {formatPrice(car.startingPriceUSD, car.startingPriceINR, currency)}
                    </div>
                    <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>
                      + Add
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .add-car-row:hover {
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(6, 182, 212, 0.5) !important;
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}
