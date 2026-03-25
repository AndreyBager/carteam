import React from 'react';

const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const TelegramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"></path><path d="M22 2L15 22L11 13L2 9L22 2z"></path></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const YouTubeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;
const WhatsAppIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;

const Footer = () => {
  return (
    <footer className="w-full pt-16 pb-8 bg-surface-container-lowest relative border-t border-outline-variant/30">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-primary-container"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-8 max-w-7xl mx-auto">
        <div>
          <img src="/logo.png" alt="CARTEAM PRO" className="h-10 mb-4 object-contain" />
          <p className="text-on-surface-variant/50 text-[0.6rem] font-medium leading-relaxed max-w-[240px] uppercase tracking-widest">
            Ваш надежный партнер в мире эксклюзивных автомобилей. Высочайший стандарт сервиса и экспертизы.
            Engineered for Precision.
          </p>
        </div>
        <div>
          <h5 className="text-primary-container font-black text-[0.6rem] uppercase tracking-[0.2em] mb-4">Меню</h5>
          <ul className="space-y-3">
            <li><a className="text-on-surface-variant hover:text-on-surface transition-colors text-[0.6rem] uppercase tracking-widest font-bold" href="#home">Главная</a></li>
            <li><a className="text-on-surface-variant hover:text-on-surface transition-colors text-[0.6rem] uppercase tracking-widest font-bold" href="#workflow">Схема работы</a></li>
            <li><a className="text-on-surface-variant hover:text-on-surface transition-colors text-[0.6rem] uppercase tracking-widest font-bold" href="#inventory">Каталог</a></li>
            <li><a className="text-on-surface-variant hover:text-on-surface transition-colors text-[0.6rem] uppercase tracking-widest font-bold" href="#reviews">Отзывы</a></li>
            <li><a className="text-on-surface-variant hover:text-on-surface transition-colors text-[0.6rem] uppercase tracking-widest font-bold" href="#map">Где мы находимся</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-primary-container font-black text-[0.6rem] uppercase tracking-[0.2em] mb-4">Соцсети</h5>
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-surface text-on-surface border border-outline-variant/30 flex items-center justify-center hover:border-primary-container hover:text-primary-container transition-colors group cursor-pointer">
              <PhoneIcon />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-surface text-on-surface border border-outline-variant/30 flex items-center justify-center hover:border-primary-container hover:text-primary-container transition-colors group cursor-pointer">
              <TelegramIcon />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-surface text-on-surface border border-outline-variant/30 flex items-center justify-center hover:border-primary-container hover:text-primary-container transition-colors group cursor-pointer">
              <InstagramIcon />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-surface text-on-surface border border-outline-variant/30 flex items-center justify-center hover:border-primary-container hover:text-primary-container transition-colors group cursor-pointer">
              <YouTubeIcon />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-surface text-on-surface border border-outline-variant/30 flex items-center justify-center hover:border-primary-container hover:text-primary-container transition-colors group cursor-pointer">
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-6 flex flex-col items-center gap-2">
        <div className="text-on-surface-variant/30 text-[0.6rem] uppercase tracking-[0.15em] font-medium text-center">
          © 2026 CarTeam Pro. Precision Engineered Imports.
        </div>
        <div className="text-on-surface-variant/30 text-[0.55rem] uppercase tracking-[0.15em] font-medium text-center">
          Разработал <a href="https://t.me/andrey_bager" target="_blank" rel="noopener noreferrer" className="hover:text-primary-container transition-colors font-bold underline decoration-outline-variant/30 underline-offset-2">Andrey Bager</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
