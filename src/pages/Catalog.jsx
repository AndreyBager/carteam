import React, { useState } from 'react';
import CarCard from '../components/CarCard';
import { cars } from '../data/cars';

const Catalog = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // CTA Submit mimicking the telegram logic
  const handleCtaSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // ВАЖНО: ЗАМЕНИТЕ ЭТИ ДАННЫЕ НА ВАШИ (токен бота от BotFather и ваш Chat ID)
    const TELEGRAM_BOT_TOKEN = '8354581019:AAHGChUGltNIKKMbjtn8cysv0Pmbd0UCL2o';
    const TELEGRAM_CHAT_ID = '8344208200';
    const msg = `🔔 Новая заявка на поиск автомобиля с каталога!\n\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nПожелания: ${formData.message}`;

    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: msg }),
      });
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 lg:pt-32 pb-0 bg-surface min-h-screen relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="mb-16">
          <div className="inline-block border border-primary-container px-3 py-1 mb-6 rounded-sm">
            <span className="text-[0.6rem] font-label font-bold text-primary-container uppercase tracking-[0.2em]">
              Premium Selection
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[6rem] font-headline font-black italic uppercase leading-[0.9] tracking-tighter text-on-surface mb-8">
            Каталог <br /> Автомобилей
          </h1>
          
          <div className="flex gap-4 items-stretch max-w-3xl">
            <div className="w-1 bg-primary-container flex-shrink-0"></div>
            <p className="text-on-surface-variant/80 text-sm md:text-base font-medium leading-relaxed py-1">
              Прямой импорт эксклюзивных и серийных автомобилей из крупнейших хабов мира. <strong className="text-on-surface">Япония, Корея, Китай и ОАЭ</strong> — с полной гарантией юридической чистоты и технического состояния.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-surface-container-lowest border border-outline-variant/20 p-6 md:p-8 rounded-sm mb-16 shadow-lg flex flex-col xl:flex-row gap-6 xl:items-end">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-[0.6rem] font-label font-bold text-on-surface-variant/50 uppercase tracking-[0.2em] mb-3">Страна</label>
              <select className="w-full bg-surface text-on-surface border border-outline-variant/30 p-3.5 outline-none text-xs font-bold uppercase transition-colors hover:border-outline-variant focus:border-primary-container appearance-none cursor-pointer">
                <option>Все направления</option>
                <option>Япония</option>
                <option>Южная Корея</option>
                <option>Китай</option>
                <option>ОАЭ</option>
              </select>
            </div>
            <div>
              <label className="block text-[0.6rem] font-label font-bold text-on-surface-variant/50 uppercase tracking-[0.2em] mb-3">Марка</label>
              <select className="w-full bg-surface text-on-surface border border-outline-variant/30 p-3.5 outline-none text-xs font-bold uppercase transition-colors hover:border-outline-variant focus:border-primary-container appearance-none cursor-pointer">
                <option>Любая марка</option>
                <option>Toyota</option>
                <option>Honda</option>
                <option>BMW</option>
                <option>Kia</option>
                <option>Zeekr</option>
              </select>
            </div>
            <div>
              <label className="block text-[0.6rem] font-label font-bold text-on-surface-variant/50 uppercase tracking-[0.2em] mb-3">Год выпуска</label>
              <div className="flex gap-2">
                <select className="w-full bg-surface text-on-surface border border-outline-variant/30 p-3.5 outline-none text-xs font-bold uppercase transition-colors hover:border-outline-variant focus:border-primary-container appearance-none cursor-pointer">
                  <option>От</option>
                  <option>2018</option>
                  <option>2020</option>
                  <option>2022</option>
                </select>
                <select className="w-full bg-surface text-on-surface border border-outline-variant/30 p-3.5 outline-none text-xs font-bold uppercase transition-colors hover:border-outline-variant focus:border-primary-container appearance-none cursor-pointer">
                  <option>До</option>
                  <option>2023</option>
                  <option>2024</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-[0.6rem] font-label font-bold text-on-surface-variant/50 uppercase tracking-[0.2em] mb-3">Бюджет (₽)</label>
              <select className="w-full bg-surface text-on-surface border border-outline-variant/30 p-3.5 outline-none text-xs font-bold uppercase transition-colors hover:border-outline-variant focus:border-primary-container appearance-none cursor-pointer">
                <option>Любой</option>
                <option>До 2.000.000 ₽</option>
                <option>До 4.000.000 ₽</option>
                <option>От 4.000.000 ₽</option>
              </select>
            </div>
          </div>
          <button className="xl:w-48 bg-primary-container text-surface-container-lowest px-6 py-4 font-headline font-black text-xs uppercase tracking-widest transition-all hover:bg-primary whitespace-nowrap">
            ПОКАЗАТЬ АВТО
          </button>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {cars.map((car, i) => (
            <CarCard key={i} car={car} />
          ))}
          {cars.map((car, i) => (
            <CarCard key={`clone-${i}`} car={car} />
          ))} {/* Duplicating for visual mass on the demo page */}
        </div>
      </div>

      {/* Secondary Custom CTA Section matching the UI */}
      <div className="relative border-t border-outline-variant/20 pt-24 pb-24 overflow-hidden">
        {/* Background gradient structure from mockup */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-surface-container-low/20 via-surface to-surface z-0"></div>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-start gap-8">
          <div className="text-left w-full">
            <h2 className="text-4xl lg:text-[4rem] font-headline font-black italic uppercase leading-[0.95] tracking-tighter text-on-surface mb-6">
              НЕ НАШЛИ <br /> <span className="text-primary-container">НУЖНЫЙ АВТО?</span>
            </h2>
            <p className="text-on-surface-variant/80 text-sm md:text-base font-medium leading-relaxed mb-10 max-w-lg">
              Оставьте заявку, и наши специалисты подберут идеальный вариант под ваш бюджет и критерии в течение 24 часов.
            </p>
          </div>
          
          <div className="w-full">
            {isSuccess ? (
              <div className="bg-surface-container-lowest border border-primary-container/30 p-8 flex flex-col items-center justify-center text-center rounded-sm animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-4 border border-primary-container">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary-container" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-headline font-black uppercase tracking-tighter text-on-surface mb-2">Запрос отправлен</h3>
                <p className="text-on-surface-variant text-sm font-medium">Ожидайте звонка эксперта.</p>
              </div>
            ) : (
              <form onSubmit={handleCtaSubmit} className="space-y-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required name="name" type="text" placeholder="Ваше имя" 
                    value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 text-on-surface p-4 text-sm font-medium outline-none transition-colors hover:border-outline-variant focus:border-primary-container placeholder:text-on-surface-variant/40" />
                  <input required name="phone" type="tel" placeholder="+7 (___) ___-__-__" 
                    value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 text-on-surface p-4 text-sm font-medium outline-none transition-colors hover:border-outline-variant focus:border-primary-container placeholder:text-on-surface-variant/40" />
                </div>
                <textarea required name="message" placeholder="Опишите желаемый автомобиль (марка, модель, бюджет...)" rows="4"
                  value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 text-on-surface p-4 text-sm font-medium outline-none transition-colors hover:border-outline-variant focus:border-primary-container placeholder:text-on-surface-variant/40 resize-none"></textarea>
                
                <button disabled={isSubmitting} type="submit" 
                  className="w-full md:w-[280px] mt-4 bg-primary-container text-surface-container-lowest px-10 py-5 font-headline font-black text-[0.85rem] uppercase tracking-widest transition-all hover:bg-primary disabled:opacity-50">
                  {isSubmitting ? 'Отправка...' : 'Отправить запрос'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
