"use client";

import { useLanguage } from "../../context/LanguageContext";

const items = [
  {
    titleRU: "Преподаватели",
    titleUZ: "O‘qituvchilar",
    textRU:
      "Наши преподаватели имеют многолетний опыт в сфере косметологии и совмещают преподавательскую деятельность с практической работой.",
    textUZ:
      "Bizning o‘qituvchilarimiz kosmetologiya sohasida ko‘p yillik tajribaga ega bo‘lib, o‘qituvchilik faoliyatini amaliy ish bilan birga olib boradilar.",
  },
  {
    titleRU: "Сертификаты",
    titleUZ: "Sertifikatlar",
    textRU:
      "Удостоверение, сертификат и свидетельство полученные у нас по окончанию курсов работают как лучшая рекомендация при приеме на работу.",
    textUZ:
      "Kurslarni tugatgandan so‘ng bizdan olingan guvohnoma, sertifikat va diplom ishga joylashishda eng yaxshi tavsiyanoma sifatida xizmat qiladi.",
  },
  {
    titleRU: "Повышение квалификации",
    titleUZ: "Malaka oshirish",
    textRU:
      "Ежегодно больше 2000 косметологов повышают квалификацию и уровень профессионализма.",
    textUZ:
      "Har yili 2000 dan ortiq kosmetolog o‘z malakasi va professional darajasini oshiradi.",
  },
];

export default function WhyUs() {
  const { language } = useLanguage();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200] px-5">
        <h2 className="mb-15 text-center text-3xl font-bold text-[#424242]">
          {language === "RU" ? "Почему мы" : "Nega aynan biz?"}
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.titleRU}
              className="h-[315] max-w-[380.95px] p-[50] shadow-[-2px_2px_20px_0px_#42424226] hover:bg-[#B7ECB1]"
            >
              <h3 className="mb-4 max-w-[334.91px] text-xl font-bold text-[#424242]">
                {language === "RU" ? item.titleRU : item.titleUZ}
              </h3>
              <p className="leading-7 text-[#666]">
                {language === "RU" ? item.textRU : item.textUZ}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
