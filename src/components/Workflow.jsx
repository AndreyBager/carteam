import React from 'react';

const Workflow = () => {
  return (
    <section className="py-32 relative bg-section-workflow overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-md"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="mb-20">
          <span className="text-primary-container font-label font-black tracking-[0.3em] uppercase block mb-4 text-xs">Operation Workflow</span>
          <h2 className="text-5xl font-headline font-black italic tracking-tighter uppercase">Схема работы</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="group bg-surface-container-low p-8 rounded-md ambient-shadow transition-all duration-500 hover:bg-surface-container-highest hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1.5 h-8 bg-on-surface group-hover:bg-primary-container transition-colors"></div>
              <h3 className="text-2xl font-headline font-black italic uppercase">Анализ рынка</h3>
            </div>
            <p className="text-on-surface-variant text-base leading-relaxed font-medium">Определяем среднюю стоимость автомобиля исходя из запроса клиента.</p>
          </div>

          <div className="group bg-surface-container-low p-8 rounded-md ambient-shadow transition-all duration-500 hover:bg-surface-container-highest hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1">
                <div className="w-1.5 h-8 bg-primary-container"></div>
                <div className="w-1.5 h-8 bg-primary-container"></div>
              </div>
              <h3 className="text-2xl font-headline font-black italic uppercase">Подписание договора</h3>
            </div>
            <p className="text-on-surface-variant text-base leading-relaxed font-medium">После согласования стоимости и параметров автомобиля подписываем договор.</p>
          </div>

          <div className="group bg-surface-container-low p-8 rounded-md ambient-shadow transition-all duration-500 hover:bg-surface-container-highest hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1">
                <div className="w-1.5 h-8 bg-primary-container"></div>
                <div className="w-1.5 h-8 bg-primary-container"></div>
                <div className="w-1.5 h-8 bg-primary-container"></div>
              </div>
              <h3 className="text-2xl font-headline font-black italic uppercase">Предоплата</h3>
            </div>
            <p className="text-on-surface-variant text-base leading-relaxed font-medium">Предоплата вносится на расчетный счет компании.</p>
          </div>

          <div className="group bg-surface-container-low p-8 rounded-md ambient-shadow transition-all duration-500 hover:bg-surface-container-highest hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-headline font-black italic text-on-surface group-hover:text-primary-container transition-colors">IV</span>
              <h3 className="text-2xl font-headline font-black italic uppercase">Выбор автомобиля</h3>
            </div>
            <p className="text-on-surface-variant text-base leading-relaxed font-medium">Каждый день согласовываем варианты покупки.</p>
          </div>

          <div className="group bg-surface-container-low p-8 rounded-md ambient-shadow transition-all duration-500 hover:bg-surface-container-highest hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-headline font-black italic text-on-surface group-hover:text-primary-container transition-colors">V</span>
              <h3 className="text-2xl font-headline font-black italic uppercase">Покупка</h3>
            </div>
            <p className="text-on-surface-variant text-base leading-relaxed font-medium">Покупаем только согласованный с клиентом автомобиль.</p>
          </div>

          <div className="group bg-surface-container-low p-8 rounded-md ambient-shadow transition-all duration-500 hover:bg-surface-container-highest hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-headline font-black italic text-primary-container">VI</span>
              <h3 className="text-2xl font-headline font-black italic uppercase">Доставка</h3>
            </div>
            <p className="text-on-surface-variant text-base leading-relaxed font-medium">После успешной покупки начинаем готовить документы на экспорт автомобиля и дальнейшего его оформления на территории России.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
