"use client";

import { useLanguage } from "../../context/LanguageContext";
import statistics from "../../data/statistics.json";

export default function Statistics() {
  const { language } = useLanguage();

  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-[1200] grid-cols-2 gap-8 p-[50] px-5 shadow-[-2px_2px_20px_0px_#42424226] md:grid-cols-4">
        {statistics.map((item) => (
          <div key={item.number} className="text-center">
            <div className="mb-2 text-4xl font-bold text-[#55A630]">
              {item.number}
            </div>
            <p className="text-sm leading-6 text-[#424242]">
              {item.title[language]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
