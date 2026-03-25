import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="bg-surface-container-low flex flex-col h-full group transition-colors hover:bg-surface-container-highest cursor-pointer border border-outline-variant/30 hover:border-outline-variant">
      <div className="h-48 overflow-hidden relative">
        <img alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={car.image} />
        <div className="absolute top-3 left-3 bg-primary-container text-surface-container-lowest px-2 py-0.5 rounded-sm text-[0.6rem] font-bold font-label uppercase tracking-widest">
          {car.country}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-headline font-black italic uppercase tracking-tighter mb-4 text-on-surface">
          {car.name}
        </h3>
        <div className="space-y-2 mb-6 flex-grow">
          <div className="flex justify-between items-center py-1 border-b border-outline-variant/30">
            <span className="text-[0.65rem] font-bold text-on-surface-variant uppercase tracking-widest font-label">Год / Пробег</span>
            <span className="text-xs font-bold text-on-surface">{car.year} / {car.mileage}</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-outline-variant/30">
            <span className="text-[0.65rem] font-bold text-on-surface-variant uppercase tracking-widest font-label">Двигатель</span>
            <span className="text-xs font-bold text-on-surface">{car.engine}</span>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <div className="text-[0.65rem] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Цена под ключ</div>
            <div className="text-xl font-headline font-black italic text-primary-container">{car.price} ₽</div>
          </div>
          <div className="text-right">
            <div className="text-[0.65rem] text-on-surface-variant/50 font-bold uppercase tracking-widest mb-1">В РФ от</div>
            <div className="text-sm font-bold text-on-surface-variant line-through">{car.originalPrice} ₽</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
