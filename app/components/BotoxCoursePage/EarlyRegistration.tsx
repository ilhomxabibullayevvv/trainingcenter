"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function EarlyRegistration() {
  const { language } = useLanguage();

  return (
    <section className="bg-[#ECF9EB] py-16">
      <div className="mx-auto max-w-[1200] px-5 text-center">
        <h2 className="mb-6 text-[36px] font-bold text-[#424242]">
          РАННЯЯ РЕГИСТРАЦИЯ
        </h2>
        <p className="mx-auto mb-8 max-w-[404] text-[20px] text-[#424242]">
          При регистрации на курс до 15 декабря стоимость обучения - 7000 грн
        </p>
        <button className="rounded-[5px] border border-[#55A630] px-8 py-2 text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
          Зарегистрироваться
        </button>
      </div>
    </section>
  );
}
