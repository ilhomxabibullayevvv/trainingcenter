"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Statistics() {
  const { language } = useLanguage();

  const statistics = [
    [
      "4000+",
      language === "RU" ? "Сертификатов мы выдали" : "Biz sertifikatlar berdik",
    ],
    [
      "3500+",
      language === "RU" ? "Моделей в нашей базе" : "Bazamizdagi modellar",
    ],
    [
      "1500+",
      language === "RU"
        ? "Специалистов мы обучили"
        : "Biz mutaxassislarni o‘qitdik",
    ],
    ["5500+", language === "RU" ? "Довольных клиентов" : "Mamnun mijozlar"],
  ];

  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-[1200] p-[50] grid-cols-2 gap-8 px-5 md:grid-cols-4 shadow-[-2px_2px_20px_0px_#42424226]">
        {statistics.map(([number, text]) => (
          <div key={number} className="text-center">
            <div className="mb-2 text-4xl font-bold text-[#55A630]">
              {number}
            </div>
            <p className="text-sm leading-6 text-[#424242]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
