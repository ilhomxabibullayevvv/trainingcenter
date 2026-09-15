"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

export default function Trainer() {
  const { language } = useLanguage();

  const content = {
    RU: {
      title: "Тренер",
      name: "Марина Спивак",
      imageAlt: "Марина Спивак",
      items: [
        "врач дерматовенеролог",
        "соосновательница центра эстетической косметологии ValMari",
        "ведущий специалист косметолог-инъекционист",
        "главный тренер учебного центра ValMari",
        "более 10 лет опыта работы врачом-инъекционистом",
        "более 8-ми лет опыта работы тренером",
        "в 2016 году вошла в пятерку лучших косметологов Украины",
      ],
    },

    UZ: {
      title: "Trener",
      name: "Marina Spivak",
      imageAlt: "Marina Spivak",
      items: [
        "dermatovenerolog shifokor",
        "ValMari estetik kosmetologiya markazi hammuassisi",
        "yetakchi kosmetolog-inyeksionist mutaxassis",
        "ValMari o‘quv markazining bosh treneri",
        "10 yildan ortiq inyeksionist shifokor sifatida tajribaga ega",
        "8 yildan ortiq trener sifatida tajribaga ega",
        "2016-yilda Ukrainaning eng yaxshi 5 nafar kosmetologi qatoriga kirgan",
      ],
    },
  };

  const text = content[language];

  return (
    <section className="py-10 md:py-16">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="w-full">
            <Image
              src="/rectangle26.jpg"
              alt={text.imageAlt}
              width={406}
              height={511}
              className="h-auto w-full max-w-[406]"
            />
          </div>
          <div className="w-full">
            <h2 className="mb-8 text-[32px] font-bold text-[#55A630] md:mb-10 md:text-[36px]">
              {text.title}
            </h2>
            <h3 className="mb-6 text-[26px] font-bold text-[#424242] md:text-[30px]">
              {text.name}
            </h3>
            <ul className="space-y-4 text-[16px] text-[#424242] md:text-[17px]">
              {text.items.map((item, index) => (
                <li key={index}>— {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
