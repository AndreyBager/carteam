import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] min-h-[480px] max-h-[700px] flex items-center overflow-hidden pt-16 pb-12 mt-10 md:mt-0">
      <div className="absolute inset-0 z-0">
        <img alt="Japanese performance car" className="w-full h-full object-cover opacity-60 scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7E_AaeNpIb3kz_zCBE8RZULUsNCOT75qvwFGlhAJtsW2sdRezsEXgXUEHDLjGCL8FQzj65Lqwr6uVX-rmpUDbmbid2eOGaLbqmoo9xPwGTOz6QspUiyYcajAgWibq4BQa8rctCTTi3bmKRIK9__mt59Aluio1Vv0iA58RrpIyvI8n2Sq7x23HgSqrnGvjV9EnOF4toN9VKAyMBqvkjhdLCm9lw232-iLD3hkd0zvPyTUZSI2U_lOiNi6M_kh4sq8xt8grQKlfHDyR" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
      </div>
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 mb-4 bg-primary-container text-surface-container-lowest rounded-sm text-[0.55rem] uppercase tracking-[0.2em] font-black">
            PREMIUM AUTOMOTIVE SOURCING
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black italic font-headline text-on-surface leading-[1.05] tracking-[-0.04em] mb-4 uppercase">
            Авто под заказ из Японии, Кореи, Китая и ОАЭ
          </h1>
          <p className="text-sm md:text-base text-on-surface-variant/80 max-w-xl mb-8 font-medium leading-relaxed">
            До 30% дешевле рынка РФ. Полное оформление ПТС. Доставка от 10 дней
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#cta" className="px-8 py-3 bg-primary-container rounded-sm text-surface-container-lowest font-headline font-black uppercase text-xs transition-all hover:-translate-y-0.5 hover:bg-primary text-center">
              Найти авто
            </a>
            <a href="#cta" className="px-8 py-3 border border-outline-variant/50 rounded-sm text-on-surface font-headline font-black uppercase text-xs hover:bg-surface-container-highest transition-all text-center">
              Консультация
            </a>
          </div>
        </div>
      </div>
      <div className="absolute right-8 bottom-12 flex-col items-center gap-4 hidden md:flex">
        <span className="[writing-mode:vertical-lr] text-[0.5rem] uppercase tracking-[0.3em] text-on-surface-variant font-black">
          SCROLL TO EXPLORE
        </span>
        <div className="w-[1px] h-16 bg-outline-variant/30 relative">
          <div className="absolute top-0 left-0 w-full h-6 bg-primary-container animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
