"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

const trainers = [
  {
    name: "Марина Спивак",
    positionRU: "Главный тренер",
    positionUZ: "Bosh trener",
    image: "/rectangle17.jpg",
  },
  {
    name: "Елена Белогурова",
    positionRU: "Тренер",
    positionUZ: "Trener",
    image: "/rectangle18.jpg",
  },
  {
    name: "Алина Ядчишина",
    positionRU: "Тренер",
    positionUZ: "Trener",
    image: "/rectangle19.jpg",
  },
  {
    name: "Юлия Щукина",
    positionRU: "Руководитель сети клиник LAZERINI",
    positionUZ: "LAZERINI klinikalari tarmog‘i rahbari",
    image: "/rectangle20.jpg",
  },
];

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
                {language === "RU" ? trainer.positionRU : trainer.positionUZ}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
