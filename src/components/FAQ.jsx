import React from 'react';

const FAQ = () => {
  return (
    <section className="py-32 relative bg-surface-container-low">
      <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBC_H_k_n_fA-uXmHn3-14K6vN48U9RAtO1Z-LqY_x_fGz7u9K-v6-R9_x_9-x_9-x_9-x_9-x_9-x_9-x_9-x_9-x_9-x_9-x_9-x_9-x_9-x_9-x_9-x_9-x_9-x_9-x_9')] bg-cover opacity-5"></div>
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-headline font-black italic tracking-tighter uppercase mb-6">Частые вопросы</h2>
          <p className="text-on-surface-variant font-medium">Все, что нужно знать о процессе премиального импорта.</p>
        </div>
        <div className="space-y-4">
          <div className="bg-surface rounded-md p-6 group hover:bg-surface-container-highest transition-colors cursor-pointer ambient-shadow">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-headline font-bold uppercase">Как происходит оплата?</h4>
              <span className="material-symbols-outlined text-primary-container group-hover:rotate-45 transition-transform">add</span>
            </div>
          </div>
          <div className="bg-surface rounded-md p-6 group hover:bg-surface-container-highest transition-colors cursor-pointer ambient-shadow">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-headline font-bold uppercase">Что если машина не соответствует листу?</h4>
              <span className="material-symbols-outlined text-primary-container group-hover:rotate-45 transition-transform">add</span>
            </div>
          </div>
          <div className="bg-surface rounded-md p-6 group hover:bg-surface-container-highest transition-colors cursor-pointer ambient-shadow">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-headline font-bold uppercase">С какими аукционами вы работаете?</h4>
              <span className="material-symbols-outlined text-primary-container group-hover:rotate-45 transition-transform">add</span>
            </div>
          </div>
          <div className="bg-surface rounded-md p-6 group hover:bg-surface-container-highest transition-colors cursor-pointer ambient-shadow">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-headline font-bold uppercase">Какие сроки доставки в РФ?</h4>
              <span className="material-symbols-outlined text-primary-container group-hover:rotate-45 transition-transform">add</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
