import React from 'react';
import { Scale, Heart, Sparkles, Database, Shield } from 'lucide-react';

export default function Footer({ onNavigateSection }) {
  return (
    <footer style={{
      backgroundColor: '#05070a',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '4rem 0 2rem',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '1.2rem' }}>🏎️</span>
              </div>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: '1.35rem',
                color: '#fff'
              }}>
                AUTO<span className="text-gold-gradient">VERSE</span>
              </span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              The definitive world car intelligence matrix. Seamlessly comparing vehicles and variant hierarchies from Maruti Suzuki entry hatchbacks to Rolls-Royce bespoke limousines.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              fontSize: '0.72rem',
              color: '#34d399',
              fontWeight: 700
            }}>
              <Database size={13} />
              <span>Phase 1: Frontend Ready • Phase 2: Database Ready</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavigateSection('home'); }} style={{ transition: 'color 0.2s' }}>Home Showcase</a></li>
              <li><a href="#catalog" onClick={(e) => { e.preventDefault(); onNavigateSection('catalog'); }} style={{ transition: 'color 0.2s' }}>Vehicle Fleet Directory</a></li>
              <li><a href="#duels" onClick={(e) => { e.preventDefault(); onNavigateSection('duels'); }} style={{ transition: 'color 0.2s' }}>Curated Rival Duels</a></li>
              <li><a href="#matrix" onClick={(e) => { e.preventDefault(); onNavigateSection('matrix'); }} style={{ transition: 'color 0.2s' }}>Comparison Matrix</a></li>
              <li><a href="#finance" onClick={(e) => { e.preventDefault(); onNavigateSection('finance'); }} style={{ transition: 'color 0.2s' }}>Loan & EMI Calculator</a></li>
            </ul>
          </div>

          {/* Col 3: Automotive Segments */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Vehicle Segments
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <li>Budget & Daily Drivers (Maruti, Tata)</li>
              <li>Mid-Market SUVs (Hyundai, Mahindra)</li>
              <li>German Executive (BMW, Mercedes-Benz)</li>
              <li>Track Supercars (Porsche, Ferrari)</li>
              <li>Next-Gen EVs (Tesla, Lucid)</li>
              <li>The Pinnacle (Rolls-Royce, Bentley)</li>
            </ul>
          </div>

          {/* Col 4: Comparison Aspects */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Multi-Aspect Analysis
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <li>Powertrain & Torque Vectoring</li>
              <li>WLTP / ARAI Fuel Efficiency</li>
              <li>Global NCAP Safety & ADAS Level</li>
              <li>Dimensions & Boot Space Capacity</li>
              <li>Luxury Upholstery & Bespoke Suite</li>
              <li>Web Audio Engine Sound Simulation</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.78rem',
          color: 'var(--text-dim)'
        }}>
          <div>
            © {new Date().getFullYear()} AutoVerse. All global manufacturer trademarks belong to their respective owners.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Specification Methodology</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
