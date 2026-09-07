import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const menu = [
    { title: "Курсы обучения", href: "/#" },
    { title: "Акции", href: "/promotions" },
    { title: "Вебинары", href: "/#" },
    { title: "О нас", href: "/AboutPage" },
    { title: "Видео-уроки", href: "/VideoLessonsPage" },
    { title: "Блог", href: "/BlogArticlePage" },
    { title: "Прайс", href: "/PricePage" },
    { title: "Магазин", href: "/#" },
    { title: "Рассписание", href: "/SchedulePage" },
  ];

  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-[1200] grid-cols-1 md:h-[365] md:grid-cols-2">
        <div className="h-[300] overflow-hidden md:h-full">
          <iframe
            src="https://www.google.com/maps?q=Харьков,+Клочковская,+3&output=embed"
            className="block h-full w-full border-0"
            loading="lazy"
          />
        </div>
        <div className="h-auto bg-[#424242] px-8 py-8 text-white md:h-full">
          <div className="mb-6">
            <Image
              src="/logo.svg"
              alt="ValMari"
              width={80}
              height={50}
              className="h-auto w-[80]"
            />
          </div>
          <a
            href="tel:0800508622"
            className="mb-2 block text-[16px] font-bold"
          >
            0 (800) 508-622
          </a>
          <p className="mb-8 text-[13px]">
            Харьков, Клочковская, д. 3
          </p>
          <div className="grid grid-cols-2 gap-[15]">
            {menu.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-[11px] text-white hover:text-[#55A630] max-w-[100]"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-5">
            <a href="#" aria-label="Facebook">
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={22}
                height={22}
              />
            </a>
            <a href="#" aria-label="Instagram">
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={22}
                height={22}
              />
            </a>
          </div>
          <p className="mt-6 text-[10px] text-white/50">
            Политика конфиденциальности
          </p>
        </div>
      </div>
    </footer>
  );
}