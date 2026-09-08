"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const { language } = useLanguage();

  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-[1200] gap-10 px-5 md:grid-cols-2 md:items-center">
        <Image
          src="/rectangle.jpg"
          alt={language === "RU" ? "Профессия косметолог" : "Kosmetolog kasbi"}
          width={590}
          height={666}
          className=""
        />
        <div>
          <p className="mb-3 text-sm font-medium text-[#858585]">
            {language === "RU" ? "О нас" : "Biz haqimizda"}
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#55A630]">
            VALMARI
          </h2>
          <h2 className="max-w-[452] mb-6 text-3xl font-bold leading-tight text-[#424242]">
            {language === "RU"
              ? "ВЕДУЩИЙ УЧЕБНЫЙ ЦЕНТР ЭСТЕТИЧЕСКОЙ КОСМЕТОЛОГИИ"
              : "ESTETIK KOSMETOLOGIYA BO‘YICHA YETAKCHI O‘QUV MARKAZI"}
          </h2>
          <p className="max-w-[452] mb-5 leading-7 text-[#666]">
            {language === "RU"
              ? "Описание может быть любое. Ведущий учебный центр эстетической косметологии."
              : "Estetik kosmetologiya bo‘yicha yetakchi o‘quv markazi."}
          </p>
          <p className="max-w-[452] mb-8 leading-7 text-[#666]">
            {language === "RU"
              ? "Более 5 лет мы проводим сертифицированные курсы профессионального образования в области косметологии и индустрии красоты, здоровья и молодости."
              : "5 yildan ortiq vaqt davomida kosmetologiya, go‘zallik, salomatlik va yoshlik sohalarida sertifikatlangan professional ta’lim kurslarini o‘tkazib kelmoqdamiz."}
          </p>
          <h2 className="text-right text-[#55A630]">
            {language === "RU" ? "Подробнее" : "Batafsil"}
          </h2>
        </div>
      </div>
    </section>
  );
}
