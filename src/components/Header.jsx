import React from 'react';

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-effect bg-gradient-to-b from-surface/90 to-transparent">
      <div className="flex justify-between items-center px-6 lg:px-8 py-3 max-w-[1920px] mx-auto border-b border-white/5">
        <a href="#home" className="flex items-center">
          <img src="/logo.png" alt="CARTEAM PRO" className="h-8 md:h-10 object-contain" />
        </a>
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10 font-headline uppercase tracking-wider text-[0.65rem] lg:text-[0.7rem] font-bold">
          <a className="text-on-surface hover:text-primary-container transition-colors" href="/#home">ГЛАВНАЯ</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors hover:opacity-80" href="/#workflow">СХЕМА РАБОТЫ</a>
          <a className="text-primary-container relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary-container after:rounded-full" href="/catalog">КАТАЛОГ</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors hover:opacity-80" href="/#reviews">ОТЗЫВЫ</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors hover:opacity-80" href="/#map">ГДЕ МЫ НАХОДИМСЯ</a>
        </div>
        <a href="#cta" className="bg-primary-container text-surface-container-lowest px-4 py-2 rounded-sm font-black uppercase text-[0.65rem] tracking-widest transition-all hover:bg-primary">
          НАЧАТЬ ИМПОРТ
        </a>
      </div>
    </nav>
  );
};

export default Header;
