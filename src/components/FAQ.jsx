import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: 'Как происходит оплата?', a: 'Оплата происходит поэтапно в соответствии с договором: предоплата за поиск, оплата после покупки авто на аукционе, таможенные платежи и логистика.' },
    { q: 'Что если машина не соответствует листу?', a: 'Перед покупкой мы проводим дополнительную инспекцию, проверяем историю авто и делаем детальный фотоотчет. Вы покупаете только то, что полностью соответствует вашим требованиям.' },
    { q: 'С какими аукционами вы работаете?', a: 'Мы работаем с крупнейшими аукционами Японии (USS, TAA, CAA, JU и др.), дилерскими сетями Южной Кореи (Enka, KB Cha Cha Cha) и площадками Китая и ОАЭ.' },
    { q: 'Какие сроки доставки в РФ?', a: 'В среднем доставка из Японии или Кореи до Владивостока занимает 2-3 недели после покупки. Таможенное оформление — 5-7 дней. Отправка в регионы РФ зависит от ТК.' }
  ];

  return (
    <section className="py-20 relative bg-surface-container-low border-b border-outline-variant/20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-black italic tracking-tighter uppercase mb-4 text-on-surface">Частые вопросы</h2>
          <p className="text-on-surface-variant/80 text-[0.8rem] font-medium">Все, что нужно знать о процессе премиального импорта.</p>
        </div>
        <div className="space-y-0 text-left">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="group transition-colors cursor-pointer border-b border-outline-variant/30 py-6 last:border-b-0 hover:bg-surface-container-lowest px-4"
            >
              <div className="flex justify-between items-center">
                <h4 className="text-[0.7rem] md:text-[0.85rem] font-headline font-black uppercase tracking-wider text-on-surface">{faq.q}</h4>
                <span className={`text-primary-container font-black text-lg transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 mt-4' : 'max-h-0'}`}>
                <p className="text-on-surface-variant/80 text-[0.8rem] font-medium leading-relaxed pr-8">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
