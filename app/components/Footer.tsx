"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const menu = [
    {
      title: language === "RU" ? "Курсы обучения" : "O'quv kurslari",
      href: "/#",
    },
    {
      title: language === "RU" ? "Акции" : "Aksiyalar",
      href: "/promotions",
    },
    {
      title: language === "RU" ? "Вебинары" : "Vebinarlar",
      href: "/#",
    },
    {
      title: language === "RU" ? "О нас" : "Biz haqimizda",
      href: "/AboutPage",
    },
    {
      title: language === "RU" ? "Видео-уроки" : "Video-darslar",
      href: "/VideoLessonsPage",
    },
    {
      title: language === "RU" ? "Блог" : "Blog",
      href: "/BlogArticlePage",
    },
    {
      title: language === "RU" ? "Прайс" : "Narxlar",
      href: "/PricePage",
    },
    {
      title: language === "RU" ? "Магазин" : "Do'kon",
      href: "/#",
    },
    {
      title: language === "RU" ? "Рассписание" : "Jadval",
      href: "/SchedulePage",
    },
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
          <a href="tel:0800508622" className="mb-2 block text-[16px] font-bold">
            0 (800) 508-622
          </a>
          <p className="mb-8 text-[13px]">
            {language === "RU"
              ? "Харьков, Клочковская, д. 3"
              : "Xarkov, Klochkovskaya, 3-uy"}
          </p>
          <div className="grid grid-cols-2 gap-[15]">
            {menu.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="max-w-[100] text-[11px] text-white hover:text-[#55A630]"
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
            {language === "RU"
              ? "Политика конфиденциальности"
              : "Maxfiylik siyosati"}
          </p>
        </div>
      </div>
    </footer>
  );
}
