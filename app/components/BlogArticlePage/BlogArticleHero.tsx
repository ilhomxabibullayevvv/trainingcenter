"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

export default function BlogArticleHero() {
  const { language } = useLanguage();

  return (
    <section className="py-15">
      <div className="mx-auto w-full max-w-[1200]">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-30">
          <div className="flex justify-center">
            <h1 className="max-w-[465] text-[32px] font-bold leading-10 text-[#424242]">
              {language === "RU"
                ? "Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук и какие существуют альтернативы?"
                : "Bo‘yin, dekolte va qo‘l panjalarini tuzatishda mezoterapiya dolzarbmi va qanday muqobil usullar mavjud?"}
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="relative h-[547] w-full max-w-[590] rounded-lg">
              <Image
                src="/rectangle12.jpg"
                alt={language === "RU" ? "Видео-урок" : "Video-dars"}
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
