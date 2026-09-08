"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function Promotions() {
  const { language } = useLanguage();

  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1200]">
        <h1 className="mb-10 text-center text-[32px] font-bold text-[#424242]">
          {language === "RU" ? "Акционные предложения" : "Aksiyali takliflar"}
        </h1>
        <div className="overflow-hidden rounded-lg bg-white">
          <div className="w-full">
            <Image
              src="/rectangle4.png"
              alt={
                language === "RU"
                  ? "Акция 2+1 в честь Черной пятницы"
                  : "Qora juma munosabati bilan 2+1 aksiyasi"
              }
              width={1438}
              height={415}
              className="mb-[15] h-auto w-full object-cover"
            />
          </div>
          <div>
            <h2 className="mb-3 text-right text-[14px] font-medium text-[#424242]">
              {language === "RU"
                ? "Акция 2+1 в честь Черной пятницы"
                : "Qora juma munosabati bilan 2+1 aksiyasi"}
            </h2>
            <div className="flex justify-end">
              <Link
                href="/SpecialOffersPage"
                className="text-[14px] font-medium text-[#478F29]"
              >
                {language === "RU"
                  ? "Подробнее про акцию"
                  : "Aksiya haqida batafsil"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
