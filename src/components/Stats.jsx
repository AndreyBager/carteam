import React from 'react';

const Stats = () => {
  return (
    <section className="py-24 relative bg-section-stats">
      <div className="absolute inset-0 backdrop-blur-sm bg-surface/50"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          <div className="text-center md:text-left">
            <div className="text-6xl font-black font-headline text-on-surface tracking-tighter mb-2 italic">1,200+</div>
            <div className="text-[0.65rem] font-label font-black text-primary-container uppercase tracking-[0.2em]">Доставлено авто</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-6xl font-black font-headline text-on-surface tracking-tighter mb-2 italic">98%</div>
            <div className="text-[0.65rem] font-label font-black text-primary-container uppercase tracking-[0.2em]">Счастливых клиентов</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-6xl font-black font-headline text-on-surface tracking-tighter mb-2 italic">400M+</div>
            <div className="text-[0.65rem] font-label font-black text-primary-container uppercase tracking-[0.2em]">Объем закупок (₽)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
