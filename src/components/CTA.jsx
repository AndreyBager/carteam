import React from 'react';

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-section-cta">
      <div className="absolute inset-0 backdrop-blur-md bg-surface/80"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary-container/10 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container/10 blur-[160px] rounded-full"></div>
        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
          <span className="text-[20rem] font-black italic leading-none select-none text-on-surface">CTP</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="bg-surface-container-low rounded-lg p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ambient-shadow relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-2 signature-gradient"></div>

          <div>
            <h2 className="text-5xl font-headline font-black italic uppercase mb-8 leading-[1.1] tracking-tighter">
              Готовы к новому <br /><span className="text-primary-container">уровню вождения?</span>
            </h2>
            <p className="text-on-surface-variant text-lg mb-12 font-medium">
              Оставьте заявку на подбор, и наши эксперты свяжутся с вами в течение 15 минут для детальной консультации.
            </p>
            <div className="flex flex-wrap gap-12 opacity-80">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-primary-container">shield</span>
                <span className="text-[0.65rem] font-label font-bold uppercase tracking-widest text-on-surface">CERTIFIED PARTNER</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-primary-container">speed</span>
                <span className="text-[0.65rem] font-label font-bold uppercase tracking-widest text-on-surface">FAST DELIVERY</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-primary-container">lock</span>
                <span className="text-[0.65rem] font-label font-bold uppercase tracking-widest text-on-surface">SECURE ESCROW</span>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[0.65rem] font-label font-bold text-secondary uppercase tracking-[0.2em] mb-2 ml-1">Имя</label>
                <input className="w-full bg-surface-container-lowest rounded border-none text-on-surface p-4 focus:ring-2 focus:ring-primary-container transition-all outline-none font-bold uppercase placeholder:text-on-surface-variant/30 ghost-border"
                  placeholder="АЛЕКСАНДР" type="text" />
              </div>
              <div>
                <label className="block text-[0.65rem] font-label font-bold text-secondary uppercase tracking-[0.2em] mb-2 ml-1">Телефон</label>
                <input className="w-full bg-surface-container-lowest rounded border-none text-on-surface p-4 focus:ring-2 focus:ring-primary-container transition-all outline-none font-bold placeholder:text-on-surface-variant/30 ghost-border"
                  placeholder="+7 (999) 000-00-00" type="tel" />
              </div>
            </div>
            <div>
              <label className="block text-[0.65rem] font-label font-bold text-secondary uppercase tracking-[0.2em] mb-2 ml-1">Желаемая модель</label>
              <input className="w-full bg-surface-container-lowest rounded border-none text-on-surface p-4 focus:ring-2 focus:ring-primary-container transition-all outline-none font-bold uppercase placeholder:text-on-surface-variant/30 ghost-border"
                placeholder="TOYOTA CROWN RS" type="text" />
            </div>
            <button className="w-full signature-gradient rounded text-surface-container-lowest py-5 font-headline font-bold text-xl uppercase tracking-widest transition-all hover:-translate-y-1"
              type="submit">
              Начать подбор
            </button>
            <p className="text-[0.6rem] text-on-surface-variant text-center font-medium uppercase tracking-widest mt-4">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
