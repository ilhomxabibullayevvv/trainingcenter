"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

export default function Models() {
  const { language } = useLanguage();

  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-[1200] gap-10 px-5 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="mb-8 text-3xl font-bold text-[#55A630]">
            {language === "RU"
              ? "ВЕДЕМ НАБОР МОДЕЛЕЙ"
              : "MODELLAR QABUL QILAMIZ"}
          </h2>
          <p className="mb-4 leading-7 text-[#666]">
            {language === "RU"
              ? "Мы предлагаем свои услуги для моделей."
              : "Biz modellar uchun o‘z xizmatlarimizni taklif qilamiz."}
          </p>
          <p className="mb-8 leading-7 text-[#666]">
            {language === "RU"
              ? "Выберите процедуру или несколько процедур и наш менеджер проконсультирует вас и назовет ближайшую дату, когда вы сможете получить эту процедуру."
              : "Bir yoki bir nechta muolajani tanlang. Menejerimiz sizga maslahat beradi va ushbu muolajani olishingiz mumkin bo‘lgan eng yaqin sanani aytadi."}
          </p>
          <button className="rounded-md border border-[#55A630] px-30 py-4 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
            {language === "RU" ? "Стать моделью" : "Model bo‘lish"}
          </button>
        </div>
        <Image
          src="/rectangle2.jpg"
          alt={language === "RU" ? "Профессия косметолог" : "Kosmetolog kasbi"}
          width={498}
          height={459}
          className=""
        />
      </div>
    </section>
  );
}
