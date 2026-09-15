"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function EarlyRegistration() {
  const { language } = useLanguage();

  const content = {
    RU: {
      title: "РАННЯЯ РЕГИСТРАЦИЯ",
      description:
        "При регистрации на курс до 15 декабря стоимость обучения - 7000 грн",
      button: "Зарегистрироваться",
    },

    UZ: {
      title: "ERTA RO‘YXATDAN O‘TISH",
      description:
        "15-dekabrgacha kursga ro‘yxatdan o‘tilganda, ta’lim narxi — 7000 grivna",
      button: "Ro‘yxatdan o‘tish",
    },
  };

  const text = content[language];

  return (
    <section className="bg-[#ECF9EB] py-10 md:py-16">
      <div className="mx-auto w-full max-w-[1200] px-5 text-center">
        <h2 className="mb-6 text-[30px] font-bold text-[#424242] md:text-[36px]">
          {text.title}
        </h2>
        <p className="mx-auto mb-8 max-w-[404] text-[18px] text-[#424242] md:text-[20px]">
          {text.description}
        </p>
        <button className="rounded-[5px] border border-[#55A630] px-8 py-2 text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
          {text.button}
        </button>
      </div>
    </section>
  );
}
