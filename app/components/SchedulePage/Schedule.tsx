"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

export default function Schedule() {
  const { language } = useLanguage();

  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1200] px-4 sm:px-5">
        <h1 className="mb-[40] text-center text-[26px] font-bold text-[#424242] sm:mb-[60] sm:text-[32px]">
          {language === "RU" ? "Расписание" : "Dars jadvali"}
        </h1>
        <div className="mb-8 flex flex-wrap">
          <button className="w-1/2 rounded-md border border-[#D4D8DB] px-3 py-3 text-[14px] font-medium text-[#1C1E23] transition hover:bg-[#B7ECB1] hover:text-[#1C1E23] sm:w-auto sm:px-[80] sm:py-4">
            {language === "RU" ? "Курсы обучения" : "Ta’lim kurslari"}
          </button>
          <button className="w-1/2 rounded-md border border-[#D4D8DB] px-3 py-3 text-[14px] font-medium text-[#1C1E23] transition hover:bg-[#B7ECB1] hover:text-[#1C1E23] sm:w-auto sm:px-[80] sm:py-4">
            {language === "RU" ? "Вебинары" : "Vebinarlar"}
          </button>
        </div>
        <div className="mb-8 flex flex-wrap">
          <button className="w-1/2 rounded-md border border-[#D4D8DB] px-3 py-3 text-[14px] font-medium text-[#1C1E23] transition hover:bg-[#B7ECB1] hover:text-[#1C1E23] sm:w-auto sm:px-[72] sm:py-4">
            {language === "RU" ? "Харьков" : "Xarkov"}
          </button>
          <button className="w-1/2 rounded-md border border-[#D4D8DB] px-3 py-3 text-[14px] font-medium text-[#1C1E23] transition hover:bg-[#B7ECB1] hover:text-[#1C1E23] sm:w-auto sm:px-[72] sm:py-4">
            {language === "RU" ? "Полтава" : "Poltava"}
          </button>
          <button className="w-1/2 rounded-md border border-[#D4D8DB] px-3 py-3 text-[14px] font-medium text-[#1C1E23] transition hover:bg-[#B7ECB1] hover:text-[#1C1E23] sm:w-auto sm:px-[72] sm:py-4">
            {language === "RU" ? "Днепр" : "Dnipro"}
          </button>
          <button className="w-1/2 rounded-md border border-[#D4D8DB] px-3 py-3 text-[14px] font-medium text-[#1C1E23] transition hover:bg-[#B7ECB1] hover:text-[#1C1E23] sm:w-auto sm:px-[72] sm:py-4">
            {language === "RU" ? "Львов" : "Lvov"}
          </button>
          <button className="w-1/2 rounded-md border border-[#D4D8DB] px-3 py-3 text-[14px] font-medium text-[#1C1E23] transition hover:bg-[#B7ECB1] hover:text-[#1C1E23] sm:w-auto sm:px-[72] sm:py-4">
            {language === "RU" ? "Херсон" : "Xerson"}
          </button>
          <button className="w-1/2 rounded-md border border-[#D4D8DB] px-3 py-3 text-[14px] font-medium text-[#1C1E23] transition hover:bg-[#B7ECB1] hover:text-[#1C1E23] sm:w-auto sm:px-[72] sm:py-4">
            {language === "RU" ? "Сумы" : "Sumi"}
          </button>
        </div>
        <div className="w-full overflow-hidden">
          <Image
            src="/rectangle3.png"
            alt={language === "RU" ? "Расписание" : "Dars jadvali"}
            width={1194}
            height={828}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
