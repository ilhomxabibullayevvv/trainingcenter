"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import materials from "../../data/usefulMaterials.json";

export default function UsefulMaterials() {
  const { language } = useLanguage();

  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <h1 className="mb-30 text-center text-[32px] font-bold text-[#424242]">
          {language === "RU" ? "Полезные материалы" : "Foydali materiallar"}
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {materials.map((material) => (
            <article
              key={material.id}
              className="overflow-hidden rounded-lg bg-white"
            >
              <Image
                src={material.image}
                alt={
                  language === "RU"
                    ? "Полезные материалы"
                    : "Foydali materiallar"
                }
                width={380}
                height={200}
                className="h-[200] w-full object-cover"
              />
              <div className="p-5">
                <h3 className="mb-6 text-[16px] font-medium leading-6 text-[#424242]">
                  {material.title[language]}
                </h3>
                <div className="text-right">
                  <Link
                    href={material.link}
                    className="text-[14px] font-medium text-[#55A630]"
                  >
                    {language === "RU" ? "Читать полностью" : "To‘liq o‘qish"}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center gap-5">
          <button className="font-bold text-[#55A630]">1</button>
          <button className="text-[#424242]">2</button>
          <button className="text-[#424242]">3</button>
          <button className="text-[#424242]">4</button>
          <button className="text-[#424242]">5</button>
        </div>
      </div>
    </section>
  );
}
