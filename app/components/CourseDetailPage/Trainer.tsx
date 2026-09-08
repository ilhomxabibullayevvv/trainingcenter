"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Trainer() {
  const { language } = useLanguage();

  return (
    <section className="py-12">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <h2 className="mb-8 text-[30px] font-bold text-[#424242]">
          {language === "RU" ? "Тренер" : "Trener"}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="h-[400] rounded-lg bg-[#DDE8D7]" />
          <div>
            <h3 className="mb-5 text-[26px] font-bold text-[#55A630]">
              Марина Спивак
            </h3>
            <ul className="space-y-3 text-[15px] leading-6 text-[#424242]">
              <li>
                {language === "RU"
                  ? "— врач дерматовенеролог"
                  : "— dermatovenerolog shifokor"}
              </li>
              <li>
                {language === "RU"
                  ? "— соосновательница центра эстетической косметологии ValMari"
                  : "— ValMari estetik kosmetologiya markazi hammuassisi"}
              </li>
              <li>
                {language === "RU"
                  ? "— ведущий специалист косметолог-инъекционист"
                  : "— yetakchi kosmetolog-inyeksionist mutaxassis"}
              </li>
              <li>
                {language === "RU"
                  ? "— главный тренер учебного центра ValMari"
                  : "— ValMari o‘quv markazining bosh treneri"}
              </li>
              <li>
                {language === "RU"
                  ? "— более 10 лет опыта работы врачом-инъекционистом"
                  : "— shifokor-inyeksionist sifatida 10 yildan ortiq ish tajribasiga ega"}
              </li>
              <li>
                {language === "RU"
                  ? "— более 8-ми лет опыта работы тренером"
                  : "— trener sifatida 8 yildan ortiq ish tajribasiga ega"}
              </li>
              <li>
                {language === "RU"
                  ? "— в 2016 году вошла в пятерку лучших косметологов Украины"
                  : "— 2016-yilda Ukrainaning eng yaxshi 5 nafar kosmetologi qatoriga kirgan"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
