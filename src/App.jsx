export default function FitPROWebsite() {
  const whatsappLink = "https://wa.me/77054457315";
  const instagramLink = "https://instagram.com/fitpro_gym_fitness_club";
  const mapEmbed = "https://www.google.com/maps?q=%D0%A3%D1%81%D1%82%D1%8C-%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA,%20%D1%83%D0%BB.%20%D0%9A%D0%BE%D0%BA%D0%B6%D0%B0%D0%BB%20%D0%91%D0%B0%D1%80%D0%B0%D0%BA%D0%B0%2019/1&output=embed";

  return (
    <div className="min-h-screen bg-black text-white">

      <section className="relative px-6 py-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(185,28,28,0.25),transparent_40%)]" />
        <div className="relative mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            <span className="text-white">FIT</span>
            <span className="text-red-600">PRO</span>
            <br />
            ТВОЕ НОВОЕ ТЕЛО
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80">
            Фитнес-клуб в Усть-Каменогорске с сильной атмосферой,
            современным оборудованием и результатом уже с первых недель
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <a href={whatsappLink} target="_blank" className="bg-green-500 text-black px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition">
              Записаться в WhatsApp
            </a>
            <a href={instagramLink} target="_blank" className="border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition">
              Смотреть Instagram
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4">
            <div>
              <div className="text-2xl font-black">07:00–22:00</div>
              <div className="text-sm text-white/60">ежедневно</div>
            </div>
            <div>
              <div className="text-2xl font-black">300 м²</div>
              <div className="text-sm text-white/60">пространство</div>
            </div>
            <div>
              <div className="text-2xl font-black">FitBar</div>
              <div className="text-sm text-white/60">спорт питание</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 text-center bg-white/5">
        <h2 className="text-3xl md:text-4xl font-black">Устали от залов без результата?</h2>
        <p className="mt-6 max-w-2xl mx-auto text-white/70">
          Нет мотивации, старое оборудование, нет поддержки тренеров —
          всё это мешает вам реально прогрессировать
        </p>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-black">
          В FITPRO вы начнёте видеть результат
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            "Современные тренажёры",
            "Сильная атмосфера",
            "Реальные результаты"
          ].map((item) => (
            <div key={item} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 text-center bg-red-700">
        <h2 className="text-4xl md:text-5xl font-black">Пробная тренировка</h2>
        <p className="mt-4 text-white/90 text-lg">
          Напишите нам и получите условия на первое посещение
        </p>
        <a href={whatsappLink} target="_blank" className="mt-8 inline-block bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition">
          Получить доступ
        </a>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="text-4xl font-black">Отзывы клиентов</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {["Очень крутой зал!", "Лучшая атмосфера", "Результат за месяц!"].map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              {t}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 bg-white/5 text-center">
        <h2 className="text-4xl font-black">Контакты</h2>
        <div className="mt-6 text-white/80">
          г. Усть-Каменогорск<br />
          ул. Кокжал Барака 19/1<br />
          +7 705 445 73 15
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <a href={whatsappLink} target="_blank" className="bg-green-500 text-black px-6 py-3 rounded-xl font-bold">WhatsApp</a>
          <a href={instagramLink} target="_blank" className="border border-white/20 px-6 py-3 rounded-xl">Instagram</a>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto overflow-hidden rounded-2xl border border-white/10">
          <iframe src={mapEmbed} className="w-full h-[400px]" loading="lazy" />
        </div>
      </section>

      <a href={whatsappLink} target="_blank" className="fixed bottom-6 right-6 bg-green-500 text-black px-6 py-4 rounded-full font-bold shadow-xl">
        WhatsApp
      </a>

    </div>
  );
}
