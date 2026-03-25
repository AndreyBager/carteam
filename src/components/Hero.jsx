import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt="Japanese performance car" className="w-full h-full object-cover opacity-60 scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7E_AaeNpIb3kz_zCBE8RZULUsNCOT75qvwFGlhAJtsW2sdRezsEXgXUEHDLjGCL8FQzj65Lqwr6uVX-rmpUDbmbid2eOGaLbqmoo9xPwGTOz6QspUiyYcajAgWibq4BQa8rctCTTi3bmKRIK9__mt59Aluio1Vv0iA58RrpIyvI8n2Sq7x23HgSqrnGvjV9EnOF4toN9VKAyMBqvkjhdLCm9lw232-iLD3hkd0zvPyTUZSI2U_lOiNi6M_kh4sq8xt8grQKlfHDyR" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/70 to-transparent"></div>
      </div>
      <div className="container max-w-7xl mx-auto px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 mb-6 signature-gradient text-surface-container-lowest rounded-sm text-[0.65rem] uppercase tracking-[0.2em] font-black">
            PREMIUM AUTOMOTIVE SOURCING
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic font-headline text-on-surface leading-[0.9] tracking-tighter mb-8 uppercase">
            Авто под заказ из Японии, Кореи, Китая и ОАЭ
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl mb-12 font-medium leading-relaxed">
            До 30% дешевле рынка РФ. Полное оформление ПТС. Доставка от 10 дней
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-10 py-5 signature-gradient rounded text-surface-container-lowest font-headline font-black uppercase text-lg transition-all hover:-translate-y-1">
              Найти авто
            </button>
            <button className="px-10 py-5 glass-effect ghost-border rounded text-on-surface font-headline font-black uppercase text-lg hover:bg-surface-container-highest transition-all">
              Консультация
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-8 bottom-20 flex-col items-center gap-4 hidden md:flex">
        <span className="[writing-mode:vertical-lr] text-[0.6rem] uppercase tracking-[0.3em] text-on-surface-variant font-black">
          SCROLL TO EXPLORE
        </span>
        <div className="w-[1px] h-32 bg-outline-variant relative">
          <div className="absolute top-0 left-0 w-full h-12 bg-primary-container"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
