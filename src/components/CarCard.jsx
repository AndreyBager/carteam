import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="bg-surface-container-low rounded-md overflow-hidden group ambient-shadow transition-all duration-500 hover:-translate-y-2 hover:bg-surface-container-highest">
      <div className="h-64 overflow-hidden relative">
        <img alt={car.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          src={car.image} />
        <div className="absolute top-4 left-4 bg-secondary-container text-on-surface px-3 py-1 rounded-sm text-[0.65rem] font-bold font-label uppercase tracking-widest">
          {car.country}
        </div>
      </div>
      <div className="p-8 flex flex-col h-[calc(100%-16rem)] min-h-[16rem]">
        <h3 className="text-2xl font-headline font-bold uppercase tracking-tight mb-8 text-on-surface">
          {car.name}
        </h3>
        <div className="space-y-6 mb-10 flex-grow">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest font-label">Год / Пробег</span>
            <span className="text-sm font-medium text-on-surface">{car.year} / {car.mileage}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest font-label">Двигатель</span>
            <span className="text-sm font-medium text-on-surface">{car.engine}</span>
          </div>
        </div>
        <div className="flex items-end justify-between mt-auto">
          <div>
            <div className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Цена под ключ</div>
            <div className="text-2xl font-headline font-bold text-primary">{car.price}</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">В РФ от</div>
            <div className="text-lg font-medium text-secondary line-through opacity-70">{car.originalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
