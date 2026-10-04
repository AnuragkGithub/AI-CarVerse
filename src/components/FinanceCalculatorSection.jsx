import React, { useState } from 'react';
import { Calculator, DollarSign, Calendar, Percent, ShieldCheck } from 'lucide-react';
import { CARS_DATA } from '../data/carsData';
import { formatPrice, calculateEMI } from '../utils/formatters';

export default function FinanceCalculatorSection({ currency }) {
  const [selectedCarId, setSelectedCarId] = useState(CARS_DATA[0].id);
  const selectedCar = CARS_DATA.find(c => c.id === selectedCarId) || CARS_DATA[0];
  const [selectedVariantId, setSelectedVariantId] = useState(selectedCar.variants[0].id);
  const selectedVariant = selectedCar.variants.find(v => v.id === selectedVariantId) || selectedCar.variants[0];

  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [tenureYears, setTenureYears] = useState(5);
  const [interestRate, setInterestRate] = useState(9.2);

  // When car changes, update variant
  const handleCarChange = (e) => {
    const newCarId = e.target.value;
    setSelectedCarId(newCarId);
    const newCar = CARS_DATA.find(c => c.id === newCarId);
    if (newCar) {
      setSelectedVariantId(newCar.variants[0].id);
    }
  };

  const carPrice = currency === 'INR' ? selectedVariant.priceINR : selectedVariant.priceUSD;
  const downPayment = Math.round((carPrice * downPaymentPercent) / 100);
  const loanAmount = carPrice - downPayment;
  const monthlyEMI = calculateEMI(loanAmount, interestRate, tenureYears);
  const totalMonths = tenureYears * 12;
  const totalPayment = monthlyEMI * totalMonths + downPayment;
  const totalInterest = Math.max(0, (monthlyEMI * totalMonths) - loanAmount);

  return (
    <section id="finance" style={{ padding: '4rem 0', scrollMarginTop: '80px' }}>
      <div className="container">
        <div className="glass-card" style={{
          padding: '2.5rem',
          background: 'linear-gradient(135deg, rgba(14, 18, 26, 0.95) 0%, rgba(10, 22, 28, 0.95) 100%)',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6)'
        }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Calculator size={20} color="#10b981" />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Automotive Financial Suite
              </span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff' }}>
                Universal Vehicle EMI & Loan Calculator
              </h2>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem', maxWidth: '650px' }}>
            Model exact monthly loan repayments for any vehicle trim from budget hatchbacks to ultra-luxury bespoke limousines.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {/* Input Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Select Car and Variant */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem'
              }}>
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                    Select Car Model
                  </label>
                  <select
                    value={selectedCarId}
                    onChange={handleCarChange}
                    style={{
                      width: '100%',
                      padding: '0.55rem',
                      backgroundColor: 'var(--bg-tertiary)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      outline: 'none'
                    }}
                  >
                    {CARS_DATA.map(c => (
                      <option key={c.id} value={c.id}>{c.make} {c.model}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                    Trim / Variant
                  </label>
                  <select
                    value={selectedVariantId}
                    onChange={(e) => setSelectedVariantId(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.55rem',
                      backgroundColor: 'var(--bg-tertiary)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '8px',
                      color: '#fbbf24',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      outline: 'none'
                    }}
                  >
                    {selectedCar.variants.map(v => (
                      <option key={v.id} value={v.id}>{v.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Vehicle Price Display */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                padding: '0.75rem 1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Ex-Showroom Price:</span>
                <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#fbbf24', fontFamily: 'var(--font-heading)' }}>
                  {formatPrice(selectedVariant.priceUSD, selectedVariant.priceINR, currency)}
                </span>
              </div>

              {/* Down Payment Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.4rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Down Payment ({downPaymentPercent}%)</span>
                  <span style={{ fontWeight: 800, color: '#fff' }}>
                    {formatPrice(downPayment, downPayment, currency)}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="70" 
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#10b981' }}
                />
              </div>

              {/* Loan Tenure Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.4rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Loan Duration</span>
                  <span style={{ fontWeight: 800, color: '#fff' }}>{tenureYears} Years ({totalMonths} Months)</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="7" 
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#06b6d4' }}
                />
              </div>

              {/* Interest Rate Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.4rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Annual Interest Rate</span>
                  <span style={{ fontWeight: 800, color: '#fff' }}>{interestRate}% p.a.</span>
                </div>
                <input 
                  type="range" 
                  min="6.5" 
                  max="16.0" 
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#fbbf24' }}
                />
              </div>
            </div>

            {/* Output Summary Card */}
            <div style={{
              backgroundColor: 'rgba(7, 9, 14, 0.75)',
              padding: '1.75rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>
                  Estimated Monthly EMI
                </span>
                <div style={{
                  fontSize: '2.4rem',
                  fontWeight: 900,
                  color: '#34d399',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.02em',
                  marginTop: '4px'
                }}>
                  {formatPrice(monthlyEMI, monthlyEMI, currency)}
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}> / month</span>
                </div>
              </div>

              {/* Breakdown Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Loan Principal:</span>
                  <span style={{ fontWeight: 700, color: '#fff' }}>{formatPrice(loanAmount, loanAmount, currency)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Total Interest Payable:</span>
                  <span style={{ fontWeight: 700, color: '#fbbf24' }}>{formatPrice(totalInterest, totalInterest, currency)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Initial Down Payment:</span>
                  <span style={{ fontWeight: 700, color: '#fff' }}>{formatPrice(downPayment, downPayment, currency)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>Total Loan Cost:</span>
                  <span style={{ fontWeight: 900, color: '#34d399' }}>{formatPrice(totalPayment, totalPayment, currency)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
