// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { CARS_DATA } from '../data/carsData';
import './Home.css'; // optional styling file

// Extract distinct categories from the data set
const categories = Array.from(new Set(CARS_DATA.map(car => car.category)));

export default function Home({ currency, onQuickDuel }) {
  return (
    <div className="home-page">
      {/* Hero banner – keep the same component for a dramatic intro */}
      <Hero
        searchQuery=""
        setSearchQuery={() => {}}
        selectedCategory="all"
        setSelectedCategory={() => {}}
        categories={categories}
        onSelectCar={() => {}}
        currency={currency}
        onQuickDuel={onQuickDuel}
      />

      {/* Video showcase – placeholder for now; can be replaced with real YouTube embeds later */}
      <section className="video-section" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Racing Highlights</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Experience the thrill of high‑speed car racing. (Videos will be added soon)
        </p>
        {/* Placeholder – a simple poster with a play button could be used; we keep it empty for now */}
        <div style={{ width: '100%', maxWidth: '720px', margin: '0 auto', height: '0', paddingBottom: '56.25%', backgroundColor: '#222', borderRadius: 'var(--radius-md)' }} />
      </section>

      {/* Category tiles – each links to the catalog filtered by the category */}
      <section className="category-tiles" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Explore By Category</h2>
        <div
          className="grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1.5rem',
            justifyItems: 'center'
          }}
        >
          {categories.map(cat => (
            <Link
              key={cat}
              to={`/catalog/${encodeURIComponent(cat)}`}
              className="category-tile glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                padding: '2rem',
                textDecoration: 'none',
                color: 'var(--text-main)',
                background: 'rgba(var(--glass-bg), 0.2)',
                borderRadius: 'var(--radius-lg)',
                backdropFilter: 'blur(12px)'
              }}
            >
              <span style={{ fontSize: '1.2rem', fontWeight: 600, textTransform: 'capitalize' }}>{cat}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
