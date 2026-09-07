"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [language, setLanguage] = useState<"RU" | "UZ">("RU");

  const menu = [
    { title: "Курсы обучения", href: "/#" },
    { title: "Вебинары", href: "/#" },
    { title: "Видео-уроки", href: "/VideoLessonsPage" },
    { title: "Блог", href: "/BlogArticlePage" },
    { title: "О нас", href: "/AboutPage" },
    { title: "Прайс", href: "/PricePage" },
    { title: "Рассписание", href: "/SchedulePage" },
    { title: "Акции", href: "/PromotionsPage" },
    { title: "Магазин", href: "#" },
  ];

  const changeLanguage = (newLanguage: "RU" | "UZ") => {
    setLanguage(newLanguage);
    setIsLanguageOpen(false);
  };

  const currentFlag = language === "RU" ? "/flag.svg" : "/uzbekistan-flag.svg";

  return (
    <>
      <header className="border-b border-[#DDE8D7] bg-white">
        <div className="mx-auto max-w-[1200] px-5">
          <div className="hidden md:block">
            <div className="flex h-[60] items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="ValMari"
                  width={40}
                  height={40}
                  className="h-[40] w-[40]"
                />
              </Link>
              <div className="flex items-center gap-[55]">
                <a
                  href="tel:0800508622"
                  className="flex items-center gap-3 text-[16px] font-medium text-[#424242] transition hover:text-[#55A630]"
                >
                  <Image
                    src="/phone.svg"
                    alt="Телефон"
                    width={20}
                    height={20}
                    className="h-[20] w-[20]"
                  />
                  0 (800) 508-622
                </a>
                <div className="flex items-center gap-4">
                  <a href="#" aria-label="Facebook">
                    <Image
                      src="/facebook2.svg"
                      alt="Facebook"
                      width={18}
                      height={18}
                      className="h-[18] w-[18]"
                    />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <Image
                      src="/instagram2.svg"
                      alt="Instagram"
                      width={18}
                      height={18}
                      className="h-[18] w-[18]"
                    />
                  </a>
                </div>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    className="flex items-center gap-2"
                    aria-label="Выбрать язык"
                  >
                    <Image
                      src={currentFlag}
                      alt={language}
                      width={25}
                      height={18}
                      className="h-[18] w-[25]"
                    />
                    <span className="text-[12px] text-[#55A630]">⌄</span>
                  </button>
                  {isLanguageOpen && (
                    <div className="absolute right-0 top-[32] z-50 w-[100] rounded-md border border-[#DDE8D7] bg-white p-1 shadow-lg">
                      <button
                        type="button"
                        onClick={() => changeLanguage("RU")}
                        className="flex w-full items-center gap-2 rounded px-2 py-2 text-left text-[12px] text-[#424242] transition hover:bg-[#DDE8D7]"
                      >
                        <Image
                          src="/flag.svg"
                          alt="Русский"
                          width={25}
                          height={18}
                          className="h-[18] w-[25]"
                        />
                        <span>RU</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => changeLanguage("UZ")}
                        className="flex w-full items-center gap-2 rounded px-2 py-2 text-left text-[12px] text-[#424242] transition hover:bg-[#DDE8D7]"
                      >
                        <Image
                          src="/flag.png"
                          alt="O'zbekcha"
                          width={25}
                          height={18}
                          className="h-[18] w-[25]"
                        />
                        <span>UZ</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <nav className="flex h-[45] items-center justify-between">
              {menu.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-[11px] text-[#424242] transition hover:text-[#55A630]"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex h-[60] items-center justify-between md:hidden">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/logo.svg"
                alt="ValMari"
                width={40}
                height={40}
                className="h-[40] w-[40]"
              />
            </Link>
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Открыть меню"
              className="flex h-[40] w-[40] items-center justify-center"
            >
              <Image
                src="/hamburger.svg"
                alt="Меню"
                width={25}
                height={20}
                className="h-[20] w-[25]"
              />
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            onClick={() => setIsMenuOpen(false)}
            className="absolute inset-0 bg-black/40"
          />
          <div className="absolute left-0 top-0 h-full w-[285] bg-white px-6 py-5">
            <div className="flex items-center justify-between">
              <a
                href="tel:0800508622"
                className="flex items-center gap-2 text-[14px] font-medium text-[#424242]"
              >
                <Image
                  src="/phone.svg"
                  alt="Телефон"
                  width={18}
                  height={18}
                  className="h-[18] w-[18]"
                />
                0 (800) 508-622
              </a>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Закрыть меню"
                className="flex h-[30] w-[30] items-center justify-center"
              >
                <span className="relative block h-[25] w-[25]">
                  <span className="absolute left-1/2 top-1/2 block h-[2] w-[25] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#55A630]" />
                  <span className="absolute left-1/2 top-1/2 block h-[2] w-[25] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#55A630]" />
                </span>
              </button>
            </div>
            <div className="mt-3 border-b border-dashed border-[#D4D8DB]" />
            <div className="relative mt-5">
              <button
                type="button"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2"
                aria-label="Выбрать язык"
              >
                <Image
                  src={currentFlag}
                  alt={language}
                  width={30}
                  height={20}
                  className="h-[20] w-[30]"
                />
                <span className="text-[13px] text-[#55A630]">⌄</span>
              </button>
              {isLanguageOpen && (
                <div className="absolute left-0 top-[32] z-50 w-[100] rounded-md border border-[#DDE8D7] bg-white p-1 shadow-lg">
                  <button
                    type="button"
                    onClick={() => changeLanguage("RU")}
                    className="flex w-full items-center gap-2 rounded px-2 py-2 text-left text-[12px] text-[#424242] transition hover:bg-[#DDE8D7]"
                  >
                    <Image
                      src="/flag.svg"
                      alt="Русский"
                      width={25}
                      height={18}
                      className="h-[18] w-[25]"
                    />
                    <span>RU</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => changeLanguage("UZ")}
                    className="flex w-full items-center gap-2 rounded px-2 py-2 text-left text-[12px] text-[#424242] transition hover:bg-[#DDE8D7]"
                  >
                    <Image
                      src="/flag.png"
                      alt="O'zbekcha"
                      width={25}
                      height={18}
                      className="h-[18] w-[25]"
                    />
                    <span>UZ</span>
                  </button>
                </div>
              )}
            </div>
            <nav className="mt-7 flex flex-col">
              {menu.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-[7] text-[15px] text-[#424242] transition hover:text-[#55A630]"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <div className="mt-7 flex items-center gap-5">
              <a href="#" aria-label="Facebook">
                <Image
                  src="/facebook2.svg"
                  alt="Facebook"
                  width={22}
                  height={22}
                  className="h-[22] w-[22]"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <Image
                  src="/instagram2.svg"
                  alt="Instagram"
                  width={22}
                  height={22}
                  className="h-[22] w-[22]"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
