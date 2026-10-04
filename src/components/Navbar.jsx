import React, { useState } from 'react';
import { 
  Scale, 
  Heart, 
  Layers, 
  Flame, 
  Calculator, 
  Menu, 
  X, 
  Sparkles,
  Search
} from 'lucide-react';

export default function Navbar({ 
  currency, 
  setCurrency, 
  comparisonList, 
  setIsCompareDrawerOpen, 
  favorites, 
  setShowFavoritesOnly,
  showFavoritesOnly,
  onNavigateSection,
  onSearchFocus
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-header" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(7, 9, 14, 0.88)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '74px'
      }}>
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); onNavigateSection('home'); }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)'
          }}>
            <span style={{ fontSize: '1.4rem' }}>🏎️</span>
          </div>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: '1.4rem',
                letterSpacing: '-0.02em',
                color: '#fff'
              }}>
                AUTO<span className="text-gold-gradient">VERSE</span>
              </span>
              <span className="badge badge-gold" style={{ fontSize: '0.62rem', padding: '2px 6px' }}>
                GLOBAL
              </span>
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.04em' }}>
              Maruti Suzuki ⇄ Rolls-Royce
            </div>
          </div>
        </a>

        {/* Center Navigation Links (Desktop) */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
          <button 
            onClick={() => onNavigateSection('catalog')} 
            style={{ 
              color: 'var(--text-main)', 
              fontWeight: 600, 
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'color var(--transition-fast)'
            }}
            className="nav-link"
          >
            <Layers size={16} color="var(--gold-primary)" />
            Vehicle Fleet
          </button>

          <button 
            onClick={() => onNavigateSection('duels')} 
            style={{ 
              color: 'var(--text-main)', 
              fontWeight: 600, 
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
            className="nav-link"
          >
            <Flame size={16} color="#ef4444" />
            Rival Duels
          </button>

          <button 
            onClick={() => onNavigateSection('matrix')} 
            style={{ 
              color: 'var(--text-main)', 
              fontWeight: 600, 
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
            className="nav-link"
          >
            <Scale size={16} color="#06b6d4" />
            Comparison Matrix
          </button>

          <button 
            onClick={() => onNavigateSection('finance')} 
            style={{ 
              color: 'var(--text-main)', 
              fontWeight: 600, 
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
            className="nav-link"
          >
            <Calculator size={16} color="#10b981" />
            EMI Calculator
          </button>
        </nav>

        {/* Right Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Currency Toggle */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.06)',
            borderRadius: 'var(--radius-full)',
            padding: '3px',
            border: '1px solid var(--border-subtle)'
          }}>
            <button
              onClick={() => setCurrency('INR')}
              style={{
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: currency === 'INR' ? '#000' : 'var(--text-muted)',
                background: currency === 'INR' ? 'var(--gold-gradient)' : 'transparent',
                transition: 'all 0.2s'
              }}
              title="Show prices in Indian Rupees (Lakh / Crore)"
            >
              ₹ INR
            </button>
            <button
              onClick={() => setCurrency('USD')}
              style={{
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: currency === 'USD' ? '#000' : 'var(--text-muted)',
                background: currency === 'USD' ? 'var(--gold-gradient)' : 'transparent',
                transition: 'all 0.2s'
              }}
              title="Show prices in US Dollars"
            >
              $ USD
            </button>
          </div>

          {/* Favorites Filter Toggle */}
          <button
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className="btn-secondary"
            style={{
              padding: '0.55rem 0.9rem',
              fontSize: '0.82rem',
              backgroundColor: showFavoritesOnly ? 'rgba(239, 68, 68, 0.2)' : undefined,
              borderColor: showFavoritesOnly ? 'rgba(239, 68, 68, 0.5)' : undefined
            }}
            title="Saved Wishlist"
          >
            <Heart size={16} fill={showFavoritesOnly ? '#ef4444' : (favorites.length ? '#ef4444' : 'none')} color={favorites.length ? '#ef4444' : 'currentColor'} />
            <span style={{ display: 'none', md: 'inline' }}>Saved</span>
            {favorites.length > 0 && (
              <span style={{
                background: '#ef4444',
                color: '#fff',
                fontSize: '0.7rem',
                fontWeight: 800,
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '2px'
              }}>
                {favorites.length}
              </span>
            )}
          </button>

          {/* Comparison Dock Trigger */}
          <button
            onClick={() => setIsCompareDrawerOpen(true)}
            className="btn-cyan"
            style={{
              padding: '0.55rem 1rem',
              fontSize: '0.85rem'
            }}
            title="Open Comparison Dock"
          >
            <Scale size={16} />
            <span>Compare</span>
            <span style={{
              background: '#000',
              color: '#fff',
              fontSize: '0.72rem',
              fontWeight: 800,
              borderRadius: '10px',
              padding: '1px 6px',
              marginLeft: '4px'
            }}>
              {comparisonList.length}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              padding: '0.5rem',
              color: 'var(--text-main)'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <button 
            onClick={() => { onNavigateSection('catalog'); setMobileMenuOpen(false); }}
            style={{ textAlign: 'left', padding: '0.5rem 0', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Layers size={18} color="var(--gold-primary)" />
            Vehicle Fleet
          </button>
          <button 
            onClick={() => { onNavigateSection('duels'); setMobileMenuOpen(false); }}
            style={{ textAlign: 'left', padding: '0.5rem 0', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Flame size={18} color="#ef4444" />
            Rival Duels
          </button>
          <button 
            onClick={() => { onNavigateSection('matrix'); setMobileMenuOpen(false); }}
            style={{ textAlign: 'left', padding: '0.5rem 0', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Scale size={18} color="#06b6d4" />
            Comparison Matrix ({comparisonList.length})
          </button>
          <button 
            onClick={() => { onNavigateSection('finance'); setMobileMenuOpen(false); }}
            style={{ textAlign: 'left', padding: '0.5rem 0', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Calculator size={18} color="#10b981" />
            Loan & EMI Calculator
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        .nav-link:hover {
          color: #fbbf24 !important;
        }
      `}</style>
    </header>
  );
}
