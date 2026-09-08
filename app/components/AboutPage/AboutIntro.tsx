"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

export default function AboutIntro() {
  const { language } = useLanguage();

  return (
    <section className="py-10 md:py-16">
      <div className="mx-auto w-full max-w-[1200]">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10">
          <div className="flex justify-center">
            <h1 className="max-w-[500] text-center text-[28px] font-bold leading-9 text-[#55A630] md:text-left md:text-[36px] md:leading-10">
              {language === "RU"
                ? "УЧЕБНЫЙ ЦЕНТР ЭСТЕТИЧЕСКОЙ КОСМЕТОЛОГИИ VALMARI"
                : "ESTETIK KOSMETOLOGIYA BO‘YICHA VALMARI O‘QUV MARKAZI"}
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="relative h-[300] w-full max-w-[589] sm:h-[380] md:h-[452]">
              <Image
                src="/rectangle13.jpg"
                alt={
                  language === "RU"
                    ? "Учебный центр эстетической косметологии VALMARI"
                    : "VALMARI estetik kosmetologiya o‘quv markazi"
                }
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 h-auto max-w-[1036] rounded-lg bg-white p-5 shadow-[10px_10px_10px_0px_#CFCFCF40] sm:p-8 md:mt-12 md:min-h-[428] md:p-16">
          <p className="mb-5 text-[15px] leading-6 text-[#424242] sm:text-[16px] sm:leading-7">
            {language === "RU"
              ? "Ведущий учебный центр эстетической косметологии. Более 5 лет мы проводим сертифицированные курсы профессионального образования в области косметологии и индустрии красоты."
              : "Estetik kosmetologiya bo‘yicha yetakchi o‘quv markazi. 5 yildan ortiq vaqt davomida kosmetologiya va go‘zallik sanoati sohasida sertifikatlangan professional ta’lim kurslarini o‘tkazib kelmoqdamiz."}
          </p>
          <p className="text-[15px] leading-6 text-[#424242] sm:text-[16px] sm:leading-7">
            {language === "RU"
              ? "В данный момент в Харькове нет аналогов нашего учебного центра по уровню подготовки и разнообразию читаемых курсов. Все выпускники нашего учебного центра востребованы в: институтах омоложения и здоровья, Спа-центрах, салонах красоты, частных клиниках и других организация в сфере."
              : "Hozirgi vaqtda Xarkovda tayyorgarlik darajasi va o‘qitiladigan kurslarning xilma-xilligi bo‘yicha bizning o‘quv markazimizga teng keladigan markaz yo‘q. Markazimizning barcha bitiruvchilariga yoshartirish va salomatlik institutlari, SPA-markazlar, go‘zallik salonlari, xususiy klinikalar va boshqa tashkilotlarda talab mavjud."}
          </p>
        </div>
      </div>
    </section>
  );
}
