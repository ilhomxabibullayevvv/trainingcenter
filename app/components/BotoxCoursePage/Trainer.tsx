"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

export default function Trainer() {
  const { language } = useLanguage();

  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1200] px-5">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Image
              src="/rectangle26.jpg"
              alt="Марина Спивак"
              width={406}
              height={511}
              className=""
            />
          </div>
          <div>
            <h2 className="mb-10 text-[36px] font-bold text-[#55A630]">Тренер</h2>
            <h3 className="mb-6 text-[30px] font-bold text-[#424242]">
              Марина Спивак
            </h3>
            <ul className="space-y-4 text-[17px] text-[#424242]">
              <li>— врач дерматовенеролог</li>
              <li>
                — соосновательница центра эстетической косметологии ValMari
              </li>
              <li>— ведущий специалист косметолог-инъекционист</li>
              <li>— главный тренер учебного центра ValMari</li>
              <li>— более 10 лет опыта работы врачом-инъекционистом</li>
              <li>— более 8-ми лет опыта работы тренером</li>
              <li>— в 2016 году вошла в пятерку лучших косметологов Украины</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
