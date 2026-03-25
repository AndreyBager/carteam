import React from 'react';

const Workflow = () => {
  return (
    <section id="workflow" className="py-20 relative bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <span className="text-primary-container font-label font-black tracking-[0.2em] uppercase block mb-3 text-[0.6rem]">Operation Workflow</span>
          <h2 className="text-4xl md:text-5xl font-headline font-black italic tracking-tighter uppercase text-on-surface">Схема работы</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: 'I', title: 'Анализ рынка', desc: 'Определяем среднюю стоимость автомобиля исходя из запроса клиента.' },
            { id: 'II', title: 'Подписание договора', desc: 'После согласования стоимости и параметров автомобиля подписываем договор.' },
            { id: 'III', title: 'Предоплата', desc: 'Предоплата вносится на расчетный счет компании.' },
            { id: 'IV', title: 'Выбор автомобиля', desc: 'Каждый день согласовываем варианты покупки.' },
            { id: 'V', title: 'Покупка', desc: 'Покупаем только согласованный с клиентом автомобиль.' },
            { id: 'VI', title: 'Доставка', desc: 'После успешной покупки начинаем готовить документы на экспорт автомобиля и дальнейшего его оформления на территории России.' }
          ].map((item, idx) => (
            <div key={idx} className="border border-outline-variant/50 bg-surface-container-low p-8 rounded-sm transition-colors hover:border-primary-container group">
              <div className="flex items-center gap-4 mb-4">
                {idx < 3 ? (
                  <div className="flex gap-1.5">
                    {[...Array(idx + 1)].map((_, i) => (
                      <div key={i} className="w-1 h-6 bg-primary-container"></div>
                    ))}
                  </div>
                ) : (
                  <span className="text-xl font-headline font-black italic text-primary-container">{item.id}</span>
                )}
                <h3 className="text-lg font-headline font-black italic uppercase text-on-surface">{item.title}</h3>
              </div>
              <p className="text-on-surface-variant/80 text-[0.8rem] leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
