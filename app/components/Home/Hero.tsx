"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section className="bg-[#ECFFEB] py-5">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="max-w-[650]">
            <p className="mb-4 text-lg font-medium text-[#424242]">
              {language === "RU" ? "Бесплатный вебинар" : "Bepul vebinar"}
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-[#55A630] md:text-6xl">
              {language === "RU" ? "ПРОФЕССИЯ КОСМЕТОЛОГ" : "KOSMETOLOG KASBI"}
            </h1>

            <p className="mb-8 max-w-[419] text-lg text-[#424242]">
              {language === "RU"
                ? "Приглашаем на бесплатный вебинар для профессиональных косметологов и интересующихся этой профессией"
                : "Professional kosmetologlar va ushbu kasbga qiziqayotganlar uchun bepul vebinarga taklif qilamiz"}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-md border border-[#55A630] px-7 py-4 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                {language === "RU" ? "Зарегистрироваться" : "Ro'yxatdan o'tish"}
              </button>

              <button className="rounded-md border border-[#55A630] px-7 py-4 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                {language === "RU" ? "Узнать подробнее" : "Batafsil ma'lumot"}
              </button>
            </div>
          </div>

          <div className="block w-full md:w-auto">
            <Image
              src="/rectangle.png"
              alt={
                language === "RU" ? "Профессия косметолог" : "Kosmetolog kasbi"
              }
              width={681}
              height={556}
              className="h-auto w-full max-w-[681]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
