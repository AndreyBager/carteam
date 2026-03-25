import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 bg-surface-container-lowest relative">
      <div className="absolute top-0 left-0 w-full h-1 signature-gradient"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-6 font-headline uppercase text-2xl font-black text-on-surface">
            CARTEAM PRO
          </div>
          <p className="text-on-surface-variant/50 text-[0.65rem] font-medium leading-relaxed max-w-[240px] uppercase tracking-widest">
            Ваш надежный партнер в мире эксклюзивных автомобилей. Высочайший стандарт сервиса и экспертизы.
            Engineered for Precision.
          </p>
        </div>
        <div>
          <h5 className="text-primary-container font-black text-[0.65rem] uppercase tracking-[0.2em] mb-6">Explore</h5>
          <ul className="space-y-4">
            <li><a className="text-on-surface-variant hover:text-on-surface transition-colors text-[0.65rem] uppercase tracking-widest font-bold" href="#">Inventory</a></li>
            <li><a className="text-on-surface-variant hover:text-on-surface transition-colors text-[0.65rem] uppercase tracking-widest font-bold" href="#">Process</a></li>
            <li><a className="text-on-surface-variant hover:text-on-surface transition-colors text-[0.65rem] uppercase tracking-widest font-bold" href="#">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-primary-container font-black text-[0.65rem] uppercase tracking-[0.2em] mb-6">Company</h5>
          <ul className="space-y-4">
            <li><a className="text-on-surface-variant hover:text-on-surface transition-colors text-[0.65rem] uppercase tracking-widest font-bold" href="#">Legal</a></li>
            <li><a className="text-on-surface-variant hover:text-on-surface transition-colors text-[0.65rem] uppercase tracking-widest font-bold" href="#">Privacy</a></li>
            <li><a className="text-on-surface-variant hover:text-on-surface transition-colors text-[0.65rem] uppercase tracking-widest font-bold" href="#">Terms</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-primary-container font-black text-[0.65rem] uppercase tracking-[0.2em] mb-6">Social</h5>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-surface-container-low rounded flex items-center justify-center hover:bg-primary-container transition-colors group cursor-pointer">
              <span className="material-symbols-outlined text-on-surface group-hover:text-surface-container-lowest text-sm">send</span>
            </div>
            <div className="w-10 h-10 bg-surface-container-low rounded flex items-center justify-center hover:bg-primary-container transition-colors group cursor-pointer">
              <span className="material-symbols-outlined text-on-surface group-hover:text-surface-container-lowest text-sm">public</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-on-surface-variant/30 text-[0.65rem] uppercase tracking-[0.15em] font-medium">
          © 2024 CarTeam Pro. Precision Engineered Imports.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
