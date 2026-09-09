"use client";

import { useLanguage } from "../../context/LanguageContext";
import achievements from "../../data/achievements.json";

export default function Achievements() {
  const { language } = useLanguage();

  return (
    <section className="bg-[#ECF9EB] py-16">
      <div className="mx-auto max-w-[1200] px-5">
        <h2 className="mb-10 text-center text-[32px] font-bold text-[#55A630]">
          {language === "RU" ? "Наши достижения" : "Bizning yutuqlarimiz"}
        </h2>
        <div className="grid grid-cols-2 gap-8 rounded-lg bg-white p-5 shadow-[-2px_2px_5px_0px_#43566420,-1px_1px_2px_0px_#43464A00] md:grid-cols-4">
          {achievements.map((item) => (
            <div key={item.number}>
              <div className="text-center text-[40px] font-bold text-[#55A630]">
                {item.number}
              </div>
              <p className="mt-2 text-center text-[15px] text-[#424242]">
                {item.text[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
