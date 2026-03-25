import React from 'react';

const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const TelegramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"></path><path d="M22 2L15 22L11 13L2 9L22 2z"></path></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const YouTubeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;
const WhatsAppIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;

const MapSection = () => {
  return (
    <section id="map" className="py-20 relative bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-headline font-black italic tracking-tighter text-on-surface">Где мы находимся:</h2>
            <div className="space-y-2 text-lg font-medium text-on-surface-variant">
              <p className="text-on-surface">+7 (924) 112-91-90</p>
              <p>carteam1309@gmail.com</p>
              <p>Владивосток, ул. Толбухина, д. 2, корпус 5</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#" className="w-12 h-12 rounded-full bg-surface-container-lowest text-on-surface border border-outline-variant/30 flex items-center justify-center hover:border-primary-container hover:text-primary-container transition-colors group cursor-pointer">
                <PhoneIcon />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-surface-container-lowest text-on-surface border border-outline-variant/30 flex items-center justify-center hover:border-primary-container hover:text-primary-container transition-colors group cursor-pointer">
                <TelegramIcon />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-surface-container-lowest text-on-surface border border-outline-variant/30 flex items-center justify-center hover:border-primary-container hover:text-primary-container transition-colors group cursor-pointer">
                <InstagramIcon />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-surface-container-lowest text-on-surface border border-outline-variant/30 flex items-center justify-center hover:border-primary-container hover:text-primary-container transition-colors group cursor-pointer">
                <YouTubeIcon />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-surface-container-lowest text-on-surface border border-outline-variant/30 flex items-center justify-center hover:border-primary-container hover:text-primary-container transition-colors group cursor-pointer">
                <WhatsAppIcon />
              </a>
            </div>
          </div>
          
          <div className="w-full h-[400px] border border-outline-variant/30 relative bg-surface-container-lowest">
            {/* Embedded Yandex Map */}
            <iframe 
              src="https://yandex.ru/map-widget/v1/?ll=131.936277%2C43.149171&z=16&text=Владивосток%2C%20ул.%20Толбухина%2C%20д.%202%2C%20корпус%205" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allowFullScreen={true}
              title="Yandex Maps Location"
              className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
