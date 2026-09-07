export default function Footer() {
  const menu = [
    "Курсы обучения",
    "Акции",
    "Вебинары",
    "О нас",
    "Видео-уроки",
    "Блог",
    "Прайс",
    "Магазин",
    "Рассписание",
  ];

  return (
    <footer className="bg-[#424242] py-12 text-white">
      <div className="mx-auto max-w-[1200] px-5">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-5 text-2xl font-bold text-[#55A630]">VALMARI</h3>

            <a href="tel:0800508622" className="block mb-3">
              0 (800) 508-622
            </a>

            <p className="text-white/70">Харьков, Клочковская, д. 3</p>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {menu.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-white/80 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-sm text-white/50">
          Политика конфиденциальности
        </div>
      </div>
    </footer>
  );
}
