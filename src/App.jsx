import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarCard from './components/CarCard';
import ComparisonMatrix from './components/ComparisonMatrix';
import ComparisonDrawer from './components/ComparisonDrawer';
import CarDetailModal from './components/CarDetailModal';
import RivalDuels from './components/RivalDuels';
import FinanceCalculatorSection from './components/FinanceCalculatorSection';
import Footer from './components/Footer';
import { CARS_DATA, CATEGORIES } from './data/carsData';
import { 
  Filter, 
  ArrowUpDown, 
  RotateCcw, 
  Layers, 
  Sparkles,
  Search,
  Fuel,
  Car
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  // Global Currency State
  const [currency, setCurrency] = useState('INR');

  // Preloaded with Maruti Suzuki Swift and Rolls-Royce Phantom to immediately showcase the full spectrum
  const [comparisonList, setComparisonList] = useState(() => {
    const swift = CARS_DATA.find(c => c.id === 'maruti-swift');
    const phantom = CARS_DATA.find(c => c.id === 'rolls-royce-phantom');
    if (swift && phantom) {
      return [
        { car: swift, variant: swift.variants[2] }, // Swift ZXi+
        { car: phantom, variant: phantom.variants[1] } // Phantom EWB
      ];
    }
    return [];
  });

  // Saved Wishlist / Favorites
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('autoverse_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [isCompareDrawerOpen, setIsCompareDrawerOpen] = useState(false);
  const [selectedCarModal, setSelectedCarModal] = useState(null);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFuel, setSelectedFuel] = useState('all');
  const [selectedBody, setSelectedBody] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Sync favorites with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('autoverse_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  }, [favorites]);

  // Toggle favorite
  const handleToggleFavorite = (carId) => {
    setFavorites(prev => {
      if (prev.includes(carId)) {
        return prev.filter(id => id !== carId);
      } else {
        return [...prev, carId];
      }
    });
  };

  // Add / Remove from comparison
  const handleToggleCompare = (car, variant) => {
    setComparisonList(prev => {
      const exists = prev.some(item => item.car.id === car.id);
      if (exists) {
        return prev.filter(item => item.car.id !== car.id);
      } else {
        if (prev.length >= 4) {
          alert("Maximum 4 cars can be compared at once. Please remove one first.");
          return prev;
        }
        setIsCompareDrawerOpen(true);
        return [...prev, { car, variant: variant || car.variants[0] }];
      }
    });
  };

  const handleAddCarToCompare = (car, variant) => {
    setComparisonList(prev => {
      if (prev.some(item => item.car.id === car.id)) return prev;
      if (prev.length >= 4) return prev;
      return [...prev, { car, variant: variant || car.variants[0] }];
    });
  };

  const handleRemoveFromCompare = (carId) => {
    setComparisonList(prev => prev.filter(item => item.car.id !== carId));
  };

  const handleClearCompare = () => {
    setComparisonList([]);
  };

  const handleUpdateVariant = (carId, newVariant) => {
    setComparisonList(prev => prev.map(item => {
      if (item.car.id === carId) {
        return { ...item, variant: newVariant };
      }
      return item;
    }));
  };

  const handleLaunchCompare = () => {
    setIsCompareDrawerOpen(false);
    const matrixElem = document.getElementById('matrix');
    if (matrixElem) {
      matrixElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLaunchDuel = (car1, var1, car2, var2) => {
    setComparisonList([
      { car: car1, variant: var1 },
      { car: car2, variant: var2 }
    ]);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    const matrixElem = document.getElementById('matrix');
    if (matrixElem) {
      matrixElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered & Sorted Cars
  const filteredCars = CARS_DATA.filter(car => {
    // Search filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const matchMake = car.make.toLowerCase().includes(query);
      const matchModel = car.model.toLowerCase().includes(query);
      const matchVariant = car.variants.some(v => v.name.toLowerCase().includes(query));
      if (!matchMake && !matchModel && !matchVariant) return false;
    }

    // Category filter
    if (selectedCategory !== 'all' && car.category !== selectedCategory) {
      return false;
    }

    // Fuel filter
    if (selectedFuel !== 'all') {
      const hasFuel = car.variants.some(v => v.fuelType.toLowerCase().includes(selectedFuel.toLowerCase()));
      if (!hasFuel) return false;
    }

    // Body filter
    if (selectedBody !== 'all' && car.bodyType.toLowerCase() !== selectedBody.toLowerCase()) {
      return false;
    }

    // Favorites only filter
    if (showFavoritesOnly && !favorites.includes(car.id)) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.startingPriceUSD - b.startingPriceUSD;
    } else if (sortBy === 'price-high') {
      return b.startingPriceUSD - a.startingPriceUSD;
    } else if (sortBy === 'power-high') {
      const maxPowerA = Math.max(...a.variants.map(v => v.powerHp));
      const maxPowerB = Math.max(...b.variants.map(v => v.powerHp));
      return maxPowerB - maxPowerA;
    } else if (sortBy === 'accel-fast') {
      const minAccelA = Math.min(...a.variants.map(v => v.acceleration0to100));
      const minAccelB = Math.min(...b.variants.map(v => v.acceleration0to100));
      return minAccelA - minAccelB;
    } else if (sortBy === 'mileage-high') {
      const maxMileageA = Math.max(...a.variants.map(v => v.mileageKmpl));
      const maxMileageB = Math.max(...b.variants.map(v => v.mileageKmpl));
      return maxMileageB - maxMileageA;
    }
    return 0; // featured default order
  });

  return (
    <div className="autoverse-app">
      {/* Navigation Bar */}
      <Navbar 
        currency={currency}
        setCurrency={setCurrency}
        comparisonList={comparisonList}
        setIsCompareDrawerOpen={setIsCompareDrawerOpen}
        favorites={favorites}
        showFavoritesOnly={showFavoritesOnly}
        setShowFavoritesOnly={setShowFavoritesOnly}
        onNavigateSection={handleNavigateSection}
      />

      <main>
        {/* Cinematic Hero Banner */}
        <Hero 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={CATEGORIES}
          onSelectCar={(car, variant) => setSelectedCarModal({ car, variant })}
          currency={currency}
          onQuickDuel={handleLaunchDuel}
        />

        {/* Curated Rival Duels Showcase */}
        <RivalDuels 
          onLaunchDuel={handleLaunchDuel}
          currency={currency}
        />

        {/* Centerpiece: Comprehensive Side-by-Side Comparison Matrix */}
        <ComparisonMatrix 
          comparisonList={comparisonList}
          onRemoveFromCompare={handleRemoveFromCompare}
          onUpdateVariant={handleUpdateVariant}
          onAddCarToCompare={handleAddCarToCompare}
          currency={currency}
          onOpenCarModal={(car, variant) => setSelectedCarModal({ car, variant })}
        />

        {/* Global Vehicle Fleet Catalog */}
        <section id="catalog" style={{ padding: '4.5rem 0', scrollMarginTop: '80px' }}>
          <div className="container">
            {/* Catalog Header */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--gold-primary)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.3rem'
                }}>
                  <Layers size={16} />
                  World Vehicle Directory
                </div>
                <h2 style={{ fontSize: '2.4rem', fontWeight: 900 }}>
                  Explore All Models & <span className="text-cyan-gradient">Variants</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                  Showing {filteredCars.length} of {CARS_DATA.length} vehicles. 
                  {showFavoritesOnly ? ' (Filtered by Saved Wishlist)' : ''}
                </p>
              </div>

              {/* Sort & Filter Controls */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                {/* Fuel Filter */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Fuel size={15} color="var(--text-dim)" />
                  <select
                    value={selectedFuel}
                    onChange={(e) => setSelectedFuel(e.target.value)}
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'var(--text-main)',
                      padding: '0.5rem 0.75rem',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      outline: 'none'
                    }}
                  >
                    <option value="all">All Fuels</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Electric">Electric (EV)</option>
                  </select>
                </div>

                {/* Body Type Filter */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Car size={15} color="var(--text-dim)" />
                  <select
                    value={selectedBody}
                    onChange={(e) => setSelectedBody(e.target.value)}
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'var(--text-main)',
                      padding: '0.5rem 0.75rem',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      outline: 'none'
                    }}
                  >
                    <option value="all">All Body Styles</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Coupe">Coupe</option>
                    <option value="Limousine">Limousine</option>
                    <option value="Supercar">Supercar</option>
                  </select>
                </div>

                {/* Sort Order Dropdown */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ArrowUpDown size={15} color="var(--text-dim)" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'var(--text-main)',
                      padding: '0.5rem 0.75rem',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      outline: 'none'
                    }}
                  >
                    <option value="featured">Sort: Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="power-high">Power: Highest Horsepower</option>
                    <option value="accel-fast">Acceleration: Fastest 0-100</option>
                    <option value="mileage-high">Efficiency: Highest Mileage</option>
                  </select>
                </div>

                {/* Reset Filters */}
                {(selectedCategory !== 'all' || selectedFuel !== 'all' || selectedBody !== 'all' || searchQuery || showFavoritesOnly) && (
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedFuel('all');
                      setSelectedBody('all');
                      setSearchQuery('');
                      setShowFavoritesOnly(false);
                    }}
                    style={{
                      padding: '0.5rem 0.75rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid rgba(239, 68, 68, 0.4)',
                      color: '#f87171',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                    title="Reset all filters"
                  >
                    <RotateCcw size={13} />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>

            {/* Cars Grid */}
            {filteredCars.length === 0 ? (
              <div className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
                <Search size={36} color="var(--text-dim)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No vehicles matched your filter</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  Try relaxing your search query or resetting filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedFuel('all');
                    setSelectedBody('all');
                    setSearchQuery('');
                    setShowFavoritesOnly(false);
                  }}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.75rem'
              }}>
                {filteredCars.map(car => (
                  <CarCard
                    key={car.id}
                    car={car}
                    currency={currency}
                    onSelectCar={(car, variant) => setSelectedCarModal({ car, variant })}
                    onToggleCompare={handleToggleCompare}
                    isInCompare={comparisonList.some(item => item.car.id === car.id)}
                    isFavorite={favorites.includes(car.id)}
                    onToggleFavorite={handleToggleFavorite}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Loan & Monthly EMI Calculator Section */}
        <FinanceCalculatorSection currency={currency} />
      </main>

      {/* Floating Bottom Comparison Drawer */}
      <ComparisonDrawer 
        comparisonList={comparisonList}
        onRemoveFromCompare={handleRemoveFromCompare}
        onClearCompare={handleClearCompare}
        onLaunchCompare={handleLaunchCompare}
        isOpen={isCompareDrawerOpen}
        setIsOpen={setIsCompareDrawerOpen}
        currency={currency}
      />

      {/* Deep Dive Car Details Modal */}
      {selectedCarModal && (
        <CarDetailModal 
          car={selectedCarModal.car}
          initialVariant={selectedCarModal.variant}
          onClose={() => setSelectedCarModal(null)}
          currency={currency}
          onToggleCompare={handleToggleCompare}
          isInCompare={comparisonList.some(item => item.car.id === selectedCarModal.car.id)}
          isFavorite={favorites.includes(selectedCarModal.car.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      {/* Footer */}
      <Footer onNavigateSection={handleNavigateSection} />
    </div>
  );
}
