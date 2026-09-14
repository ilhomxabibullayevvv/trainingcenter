"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

export default function BotoxHero() {
  const { language } = useLanguage();

  const content = {
    RU: {
      start: "Старт курса: 10 января",
      title: "Ботулинотерапия для косметологов",
      register: "Зарегистрироваться",
      details: "Узнать подробнее",
      imageAlt: "Ботулинотерапия",
    },

    UZ: {
      start: "Kurs boshlanishi: 10-yanvar",
      title: "Kosmetologlar uchun botulinoterapiya",
      register: "Ro'yxatdan o'tish",
      details: "Batafsil ma'lumot",
      imageAlt: "Botulinoterapiya",
    },
  };

  const text = content[language];

  return (
    <section className="py-10 md:py-16">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-10">
          <div className="w-full max-w-[650]">
            <p className="mb-4 text-[16px] text-[#55A630] md:text-[18px]">
              {text.start}
            </p>
            <h1 className="mb-6 max-w-[421] text-[34px] font-bold leading-[1.2] text-[#424242] sm:text-[38px] md:mb-8 md:text-[42px]">
              {text.title}
            </h1>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button className="rounded-[5px] border border-[#55A630] px-6 py-3 text-[15px] text-[#55A630] transition hover:bg-[#55A630] hover:text-white sm:px-8 sm:py-4 sm:text-[16px]">
                {text.register}
              </button>
              <button className="rounded-[5px] border border-[#55A630] px-6 py-3 text-[15px] text-[#55A630] transition hover:bg-[#55A630] hover:text-white sm:px-8 sm:py-4 sm:text-[16px]">
                {text.details}
              </button>
            </div>
          </div>
          <div className="block w-full md:w-auto">
            <Image
              src="/rectangle27.jpg"
              alt={text.imageAlt}
              width={590}
              height={588}
              priority
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
