"use client";

import { useLanguage } from "../../context/LanguageContext";

const itemsRU = [
  {
    title: "Минимум препарата максимум результата",
    text: "Вы научитесь делать эстетически красивые результаты, а не лица под копирку.",
  },
  {
    title: 'Тренер гарантировано "поставит вашу руку"',
    text: "Вы будете колоть самостоятельно уже на курсе.",
  },
  {
    title: "Узнаете, как работать с любыми ТМ ботулотоксина",
    text: "Мы объясним, за что отвечает каждый показатель на упаковке и по какому принципу выбирать препарат.",
  },
  {
    title: "Вы отработаете практику на моделях",
    text: "В нашей базе более 3500 моделей с реальными проблемами и пожеланиями.",
  },
];

const itemsUZ = [
  {
    title: "Preparat minimum, natija maksimum",
    text: "Siz bir xil ko‘rinishdagi yuzlar emas, estetik jihatdan chiroyli natijalar yaratishni o‘rganasiz.",
  },
  {
    title: 'Trener sizga "qo‘lni qo‘yishni" kafolatlaydi',
    text: "Kursning o‘zidayoq inyeksiyalarni mustaqil bajarishni boshlaysiz.",
  },
  {
    title: "Istalgan TM botulotoksini bilan ishlashni o‘rganasiz",
    text: "Qadoqdagi har bir ko‘rsatkich nimaga javob berishini va preparatni qaysi tamoyil asosida tanlash kerakligini tushuntiramiz.",
  },
  {
    title: "Amaliyotni modellarda bajarasiz",
    text: "Bizning bazamizda real muammolari va istaklariga ega 3500 dan ortiq model mavjud.",
  },
];

export default function WhatYouLearn() {
  const { language } = useLanguage();

  const items = language === "RU" ? itemsRU : itemsUZ;

  return (
    <section className="bg-[#F7F7F7] py-12">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <h2 className="mb-8 text-[30px] font-bold text-[#424242]">
          {language === "RU"
            ? "Чему вы научитесь на курсе"
            : "Kursda nimalarni o‘rganasiz"}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <article key={index} className="rounded-lg bg-white p-6">
              <h3 className="mb-3 text-[18px] font-bold text-[#55A630]">
                {item.title}
              </h3>
              <p className="text-[14px] leading-6 text-[#424242]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
