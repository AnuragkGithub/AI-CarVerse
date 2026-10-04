import React from 'react';
import { Scale, X, ArrowRight, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { formatPrice } from '../utils/formatters';

export default function ComparisonDrawer({ 
  comparisonList, 
  onRemoveFromCompare, 
  onClearCompare, 
  onLaunchCompare,
  isOpen,
  setIsOpen,
  currency 
}) {
  if (comparisonList.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 90,
      backgroundColor: 'rgba(10, 13, 20, 0.96)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(6, 182, 212, 0.4)',
      boxShadow: '0 -15px 35px rgba(0, 0, 0, 0.7)'
    }}>
      {/* Drawer Header & Toggle Bar */}
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 1.5rem',
        borderBottom: isOpen ? '1px solid rgba(255, 255, 255, 0.08)' : 'none'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            backgroundColor: 'rgba(6, 182, 212, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Scale size={18} color="#06b6d4" />
          </div>
          <div>
            <span style={{ fontWeight: 800, fontSize: '0.92rem', color: '#fff' }}>
              Comparison Dock ({comparisonList.length} of 4 vehicles)
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '8px' }}>
              {comparisonList.length < 2 ? 'Select at least 1 more car to compare' : 'Ready to compare side-by-side'}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: 'var(--text-muted)',
              fontSize: '0.8rem',
              padding: '4px 8px'
            }}
          >
            {isOpen ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
            <span>{isOpen ? 'Minimize' : 'Expand'}</span>
          </button>

          <button
            onClick={onClearCompare}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: '#f87171',
              fontSize: '0.8rem',
              padding: '4px 8px'
            }}
            title="Clear all cars"
          >
            <Trash2 size={15} />
            <span style={{ display: 'none', md: 'inline' }}>Clear</span>
          </button>

          <button
            onClick={onLaunchCompare}
            disabled={comparisonList.length < 2}
            className="btn-cyan"
            style={{
              padding: '0.5rem 1.25rem',
              fontSize: '0.85rem',
              opacity: comparisonList.length < 2 ? 0.5 : 1,
              cursor: comparisonList.length < 2 ? 'not-allowed' : 'pointer'
            }}
          >
            <span>Compare Now</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Expanded Content: Car Thumbnails */}
      {isOpen && (
        <div className="container" style={{ padding: '1rem 1.5rem 1.25rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem'
          }}>
            {[0, 1, 2, 3].map(slotIndex => {
              const item = comparisonList[slotIndex];

              if (!item) {
                return (
                  <div 
                    key={slotIndex}
                    style={{
                      height: '76px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px dashed rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-dim)',
                      fontSize: '0.78rem'
                    }}
                  >
                    + Add Slot {slotIndex + 1}
                  </div>
                );
              }

              return (
                <div 
                  key={item.car.id}
                  style={{
                    height: '76px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    padding: '0.5rem 0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <img 
                      src={item.car.heroImage} 
                      alt={item.car.model} 
                      style={{
                        width: '56px',
                        height: '42px',
                        objectFit: 'cover',
                        borderRadius: '6px'
                      }}
                    />
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#fff' }}>
                        {item.car.make} {item.car.model}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#06b6d4', fontWeight: 600 }}>
                        {item.variant.name.split(' ')[0]} {item.variant.name.split(' ')[1] || ''}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#fbbf24', fontWeight: 700 }}>
                        {formatPrice(item.variant.priceUSD, item.variant.priceINR, currency)}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveFromCompare(item.car.id)}
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(239, 68, 68, 0.2)',
                      color: '#f87171',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                    title="Remove"
                  >
                    <X size={13} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
