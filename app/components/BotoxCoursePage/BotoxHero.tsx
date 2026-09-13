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
    },
    UZ: {
      start: "Kurs boshlanishi: 10-yanvar",
      title: "Kosmetologlar uchun botulinoterapiya",
      register: "Ro'yxatdan o'tish",
      details: "Batafsil ma'lumot",
    },
  };

  const text = content[language];

  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-[1200] items-center gap-10 px-5 md:grid-cols-2">
        <div>
          <p className="mb-4 text-[18px] text-[#55A630]">{text.start}</p>
          <h1 className="mb-8 max-w-[421] text-[42px] font-bold leading-[1.2] text-[#424242]">
            {text.title}
          </h1>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-[5px] border border-[#55A630] px-8 py-4 text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
              {text.register}
            </button>
            <button className="rounded-[5px] border border-[#55A630] px-8 py-4 text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
              {text.details}
            </button>
          </div>
        </div>
        <div className="relative h-[588] w-full">
          <Image
            src="/rectangle27.jpg"
            alt="Ботулинотерапия"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
