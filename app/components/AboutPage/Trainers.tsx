"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import trainers from "../../data/trainers.json";

export default function Trainers() {
  const { language } = useLanguage();

  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1200] px-5">
        <h2 className="mb-10 text-center text-[32px] font-bold text-[#424242]">
          {language === "RU" ? "Наши тренера" : "Bizning trenerlarimiz"}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="mx-auto w-full max-w-[285]">
              <div className="relative mb-4 h-[380] w-full overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[18px] font-bold text-[#424242]">
                {trainer.name}
              </h3>
              <p className="mt-2 text-[14px] text-[#424242]">
                {trainer.position[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
