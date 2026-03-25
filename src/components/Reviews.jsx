import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      name: "Никита Дружинин",
      img: "https://ui-avatars.com/api/?name=Никита+Дружинин&background=23262b&color=fff",
      text: "Заказывали два автомобиля nissan note e-power, в этой компании,по рекомендации знакомых. С Русланом обговорили все параметры и бюджет, было не просто в поиске автомобилей, и спустя множества вариантов, машины были куплены именно те что и хотели, а именно в комплектации медалист. Руслан всегда был на связи, консультировал по всем вопросам. Спасибо большое компании CarTeam! Желаю дальнейшего развития и по больше довольных клиентов."
    },
    {
      name: "Оксана Ворошилова",
      img: "https://ui-avatars.com/api/?name=Оксана+Ворошилова&background=23262b&color=fff",
      text: "Здравствуйте, Артём и Руслан! Хочу от души сказать Вам спасибо за то, что помогли мне осуществить маленькую мечту ❤️ Не знаю, что тут писать, я просто счастлива! 😂"
    },
    {
      name: "Артём Мирошник",
      img: "https://ui-avatars.com/api/?name=Артём+Мирошник&background=23262b&color=fff",
      text: "Всем привет! Делюсь своими впечатлениями о покупке автомобиля. Обратился я по совету товарища. Со мной работал Артем, все подробно объяснил, обговорил все нюансы и подводные камни. Наша ставка сыграла через три дня после подписания договора. Деньги в Японию я переводил самостоятельно через АТБ банк. Во Владивостоке машина была еще через 16 дней, я оплатил таможенную пошлину по квитанции и через 4 дня Артем уже забрал мою машину со склада. Больше всего понравилось, что все прошло быстро! 👍 Обязательно буду рекомендовать всем знакомым! Спасибо 🤝"
    },
    {
      name: "Sn .",
      img: "https://ui-avatars.com/api/?name=Sn+.&background=23262b&color=fff",
      text: "Привозила в январе через ребят Honda Vezel . Подобрали авто в течении 1,5 недель Работала с Русланом . Компания молодая на сколько знаю ,посоветовали друзья ,было страшновато ,но ребята сработали качественно 👍 Все понятно ,быстро и без воды Спасибо ребята ,процветания вашей компании ) Однозначно буду вас советовать друзьям"
    },
    {
      name: "Татьяна id147706298",
      img: "https://ui-avatars.com/api/?name=Татьяна&background=23262b&color=fff",
      text: "Отличная компания. Все честно и прозрачно. Очень быстрая покупка и доставка."
    },
    {
      name: "Дмитрий Лозовьюк",
      img: "https://ui-avatars.com/api/?name=Дмитрий+Лозовьюк&background=23262b&color=fff",
      text: "Хорошая компания , ребята молодцы , нашли мне машину в течении трёх дней . Машина уже у меня, ездию радуюсь . Теперь только к вам . Удачи в продажах ."
    }
  ];

  return (
    <section id="reviews" className="py-20 relative bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <span className="text-primary-container font-label font-black tracking-[0.2em] uppercase block mb-3 text-[0.6rem]">Отзывы клиентов</span>
          <h2 className="text-4xl md:text-5xl font-headline font-black italic tracking-tighter uppercase text-on-surface">Что о нас говорят</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-[#f2f4f6] text-surface p-6 rounded-md shadow flex flex-col h-full border border-gray-200 hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-4 mb-4">
                <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-surface/10" />
                <div>
                  <h4 className="font-headline font-bold text-lg leading-tight uppercase tracking-tight">{review.name}</h4>
                  <div className="flex text-[#fbbd08] mt-1 text-sm">
                    ★ ★ ★ ★ ★
                  </div>
                </div>
              </div>
              <p className="text-[0.8rem] font-medium leading-relaxed opacity-90">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <a href="https://2gis.ru/vladivostok/geo/70000001067233294" target="_blank" rel="noopener noreferrer" 
             className="w-full sm:w-auto px-8 py-4 bg-[#b2e536] text-[#0a2608] hover:bg-[#9cc125] font-headline font-black uppercase tracking-widest text-sm rounded transition-colors text-center shadow-lg">
            Отзывы на 2ГИС
          </a>
          <a href="https://yandex.ru/maps/-/CPRgeIYe" target="_blank" rel="noopener noreferrer" 
             className="w-full sm:w-auto px-8 py-4 bg-[#FF0000] text-white hover:bg-[#cc0000] font-headline font-black uppercase tracking-widest text-sm rounded transition-colors text-center shadow-lg">
            Отзывы Яндекс
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
