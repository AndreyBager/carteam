import React, { useState } from 'react';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ВАЖНО: ЗАМЕНИТЕ ЭТИ ДАННЫЕ НА ВАШИ (токен бота от BotFather и ваш Chat ID)
    const TELEGRAM_BOT_TOKEN = '8354581019:AAHGChUGltNIKKMbjtn8cysv0Pmbd0UCL2o';
    const TELEGRAM_CHAT_ID = '8344208200';

    const message = `🔔 Новая заявка на импорт авто!\n\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nМодель: ${formData.carModel}`;

    try {
      if (TELEGRAM_BOT_TOKEN === 'YOUR_BOT_TOKEN_HERE') {
        // Если токены не настроены, имитируем отправку для демонстрации
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSuccess(true);
        }, 1000);
        return;
      }

      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }),
      });

      setIsSuccess(true);
    } catch (error) {
      console.error('Ошибка при отправке:', error);
      alert('Ошибка при отправке заявки. Пожалуйста, попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="cta" className="py-20 relative bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="border border-outline-variant/30 bg-surface-container-low p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden transition-colors hover:border-primary-container group">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container transition-all group-hover:w-2"></div>

          <div>
            <h2 className="text-4xl lg:text-5xl font-headline font-black italic uppercase mb-6 leading-[1.1] tracking-tighter text-on-surface">
              Готовы к новому <br /><span className="text-primary-container">уровню вождения?</span>
            </h2>
            <p className="text-on-surface-variant/80 text-[0.8rem] md:text-sm mb-10 font-medium">
              Оставьте заявку на подбор, и наши эксперты свяжутся с вами в течение 15 минут для детальной консультации.
            </p>
            <div className="flex flex-wrap gap-8 opacity-80">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                <span className="text-[0.55rem] font-label font-bold uppercase tracking-widest text-on-surface">CERTIFIED PARTNER</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                <span className="text-[0.55rem] font-label font-bold uppercase tracking-widest text-on-surface">FAST DELIVERY</span>
              </div>
            </div>
          </div>

          {isSuccess ? (
            <div className="bg-surface-container-lowest border border-primary-container/30 p-8 flex flex-col items-center justify-center text-center h-full min-h-[300px] animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 border border-primary-container">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary-container" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-headline font-black uppercase tracking-tighter text-on-surface mb-2">Спасибо что обратились!</h3>
              <p className="text-on-surface-variant text-sm font-medium">
                Специалисты свяжутся с вами в ближайшее время.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[0.55rem] font-label font-bold text-on-surface-variant/70 uppercase tracking-[0.2em] mb-2 ml-1">Имя</label>
                  <input id="name" name="name" required value={formData.name} onChange={handleChange} 
                    className="w-full border border-outline-variant/30 bg-surface-container-lowest text-on-surface p-3 transition-colors outline-none font-bold uppercase placeholder:text-on-surface-variant/20 text-xs hover:border-outline-variant focus:border-primary-container"
                    placeholder="АЛЕКСАНДР" type="text" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[0.55rem] font-label font-bold text-on-surface-variant/70 uppercase tracking-[0.2em] mb-2 ml-1">Телефон</label>
                  <input id="phone" name="phone" required value={formData.phone} onChange={handleChange}
                    className="w-full border border-outline-variant/30 bg-surface-container-lowest text-on-surface p-3 transition-colors outline-none font-bold placeholder:text-on-surface-variant/20 text-xs hover:border-outline-variant focus:border-primary-container"
                    placeholder="+7 (999) 000-00-00" type="tel" />
                </div>
              </div>
              <div>
                <label htmlFor="carModel" className="block text-[0.55rem] font-label font-bold text-on-surface-variant/70 uppercase tracking-[0.2em] mb-2 ml-1">Желаемая модель</label>
                <input id="carModel" name="carModel" required value={formData.carModel} onChange={handleChange}
                  className="w-full border border-outline-variant/30 bg-surface-container-lowest text-on-surface p-3 transition-colors outline-none font-bold uppercase placeholder:text-on-surface-variant/20 text-xs hover:border-outline-variant focus:border-primary-container"
                  placeholder="TOYOTA CROWN RS" type="text" />
              </div>
              <button disabled={isSubmitting} className="w-full mt-4 bg-primary-container text-surface-container-lowest py-4 font-headline font-black text-sm uppercase tracking-widest transition-all hover:bg-primary disabled:opacity-50"
                type="submit">
                {isSubmitting ? 'ОТПРАВКА...' : 'Начать подбор'}
              </button>
              <p className="text-[0.5rem] md:text-[0.55rem] text-on-surface-variant/50 text-center font-bold uppercase tracking-widest mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;
