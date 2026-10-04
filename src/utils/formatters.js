// Formatter utilities for prices, currencies, and comparison matrix calculations

export function formatPrice(priceUSD, priceINR, currency = "INR") {
  if (currency === "INR") {
    if (priceINR >= 10000000) {
      const crore = (priceINR / 10000000).toFixed(2);
      return `₹ ${crore} Cr`;
    } else if (priceINR >= 100000) {
      const lakh = (priceINR / 100000).toFixed(2);
      return `₹ ${lakh} Lakh`;
    }
    return `₹ ${priceINR.toLocaleString('en-IN')}`;
  } else {
    return `$ ${priceUSD.toLocaleString('en-US')}`;
  }
}

export function formatFullPrice(priceUSD, priceINR, currency = "INR") {
  if (currency === "INR") {
    return `₹ ${priceINR.toLocaleString('en-IN')}`;
  }
  return `$ ${priceUSD.toLocaleString('en-US')}`;
}

export function getNestedValue(obj, path) {
  if (!obj || !path) return undefined;
  const parts = path.split('.');
  let current = obj;
  for (const part of parts) {
    if (current === undefined || current === null) return undefined;
    current = current[part];
  }
  return current;
}

export function calculateEMI(principal, annualRatePercent = 9.5, tenureYears = 5) {
  const r = annualRatePercent / 12 / 100;
  const n = tenureYears * 12;
  const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  return Math.round(emi);
}
