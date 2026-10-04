// src/pages/Catalog.jsx
import React from 'react';
import { useParams } from "react-router-dom";
import CarCard from "../components/CarCard";
import { CARS_DATA } from "../data/carsData";

export default function Catalog({
  currency,
  comparisonList,
  handleToggleCompare,
  handleRemoveFromCompare,
  handleUpdateVariant,
  favorites,
  handleToggleFavorite,
  setIsCompareDrawerOpen
}) {
  const { category } = useParams();

  // Filter cars by the category from URL (if category exists), otherwise show all
  const filteredCars = CARS_DATA.filter(car => {
    if (category && category !== "all") {
      return car.category === decodeURIComponent(category);
    }
    return true;
  });

  return (
    <section id="catalog" style={{ padding: "4.5rem 0", scrollMarginTop: "80px" }}>
      <div className="container">
        <h2 style={{ fontSize: "2.2rem", fontWeight: 800, textTransform: "capitalize", marginBottom: "1.5rem" }}>
          {category ? decodeURIComponent(category) + " Cars" : "All Cars"}
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.75rem"
        }}>
          {filteredCars.map(car => (
            <CarCard
              key={car.id}
              car={car}
              currency={currency}
              onSelectCar={(c, v) => {}}
              onToggleCompare={handleToggleCompare}
              isInCompare={comparisonList.some(item => item.car.id === car.id)}
              isFavorite={favorites.includes(car.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
