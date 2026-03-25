import React from 'react';

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-effect bg-gradient-to-b from-[#011520] to-transparent">
      <div className="flex justify-between items-center px-8 py-6 max-w-[1920px] mx-auto">
        <div className="text-2xl font-black tracking-tighter text-on-surface font-headline">
          CARTEAM PRO
        </div>
        <div className="hidden md:flex items-center space-x-10 font-headline uppercase tracking-wider text-sm font-semibold">
          <a className="text-primary-container relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary-container after:rounded-full" href="#">ГЛАВНАЯ</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors hover:opacity-80" href="#">СХЕМА РАБОТЫ</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors hover:opacity-80" href="#">КАТАЛОГ</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors hover:opacity-80" href="#">ОТЗЫВЫ</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors hover:opacity-80" href="#">ГДЕ МЫ НАХОДИМСЯ</a>
        </div>
        <button className="signature-gradient text-surface-container-lowest px-6 py-2 rounded font-bold uppercase text-xs tracking-widest scale-95 active:scale-90 transition-all hover:-translate-y-0.5">
          НАЧАТЬ ИМПОРТ
        </button>
      </div>
    </nav>
  );
};

export default Header;
