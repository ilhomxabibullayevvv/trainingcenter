"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function CourseHero() {
  const { language } = useLanguage();

  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <p className="mb-4 text-[14px] text-[#55A630]">
          {language === "RU"
            ? "Старт курса: 10 января"
            : "Kurs boshlanishi: 10-yanvar"}
        </p>
        <h1 className="mb-6 text-[36px] font-bold text-[#424242]">
          {language === "RU"
            ? "Ботулинотерапия для косметологов"
            : "Kosmetologlar uchun botulinoterapiya"}
        </h1>
        <div className="flex flex-wrap gap-4">
          <button className="rounded bg-[#55A630] px-7 py-3 text-[14px] text-white">
            {language === "RU" ? "Зарегистрироваться" : "Ro‘yxatdan o‘tish"}
          </button>
          <button className="rounded border border-[#55A630] px-7 py-3 text-[14px] text-[#55A630]">
            {language === "RU" ? "Узнать подробнее" : "Batafsil ma’lumot"}
          </button>
        </div>
      </div>
    </section>
  );
}
