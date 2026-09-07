export default function Header() {
  const menu = [
    "Курсы обучения",
    "Вебинары",
    "Видео-уроки",
    "Блог",
    "О нас",
    "Прайс",
    "Рассписание",
    "Акции",
    "Магазин",
  ];

  return (
    <header className="border-b border-gray-100 py-5">
      <div className="mx-auto max-w-[1200] px-5">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-[#55A630]">VALMARI</div>

          <a
            href="tel:0800508622"
            className="text-xl font-medium text-[#424242]"
          >
            0 (800) 508-622
          </a>
        </div>

        <nav className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {menu.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-[#424242] transition hover:text-[#55A630]"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
