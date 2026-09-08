"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function EarlyRegistration() {
  const { language } = useLanguage();

  return (
    <section className="bg-[#F7F7F7] py-12">
      <div className="mx-auto w-full max-w-[1200] px-5 text-center">
        <h2 className="mb-5 text-[30px] font-bold text-[#424242]">
          {language === "RU" ? "Ранняя регистрация" : "Erta ro‘yxatdan o‘tish"}
        </h2>
        <p className="mb-7 text-[18px] text-[#424242]">
          {language === "RU"
            ? "При регистрации на курс до 15 декабря стоимость обучения - 7000 грн"
            : "15-dekabrgacha kursga ro‘yxatdan o‘tilganda ta’lim narxi — 7000 грн"}
        </p>
        <button className="rounded bg-[#55A630] px-8 py-3 text-white">
          {language === "RU" ? "Зарегистрироваться" : "Ro‘yxatdan o‘tish"}
        </button>
      </div>
    </section>
  );
}
