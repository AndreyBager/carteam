import React from 'react';
import CarCard from './CarCard';
import { cars } from '../data/cars';

const Inventory = () => {
  return (
    <section className="py-32 relative bg-section-inventory overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-xl bg-surface/80"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-primary-container font-label font-black tracking-[0.3em] uppercase block mb-4 text-xs">Curated Selection</span>
            <h2 className="text-5xl font-headline font-black italic tracking-tighter uppercase">Доступно сейчас</h2>
          </div>
          <button className="flex items-center gap-4 text-primary-container hover:text-on-surface transition-colors group">
            <span className="font-headline font-black uppercase tracking-widest text-xs">Весь каталог</span>
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">trending_flat</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inventory;
