"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function WhatYouLearn() {
  const { language } = useLanguage();

  const content = {
    RU: {
      title: "Чему вы научитесь на курсе",

      advantages: [
        [
          "Минимум препарата максимум результата",
          "Вы научитесь делать эстетически красивые результаты, а не лица под копирку",
        ],
        [
          'Тренер гарантировано "поставит вашу руку"',
          "Вы будете колоть самостоятельно уже на курсе",
        ],
        [
          "Узнаете, как работать с любыми ТМ ботулотоксина",
          "Мы объясним, за что отвечает каждый показатель на упаковке и по какому принципу выбирать препарат",
        ],
        [
          "Вы отработаете практику на моделях",
          "В нашей базе более 3500 моделей с реальными проблемами и пожеланиями",
        ],
      ],
    },

    UZ: {
      title: "Kursda nimalarni o‘rganasiz",

      advantages: [
        [
          "Minimal preparat — maksimal natija",
          "Siz bir xil yuzlar emas, estetik jihatdan chiroyli natijalar yaratishni o‘rganasiz",
        ],
        [
          'Trener kafolatlangan holda qo‘lingizni "qo‘yib beradi"',
          "Siz kurs davomidayoq mustaqil ravishda inyeksiya qilishni boshlaysiz",
        ],
        [
          "Har qanday botulotoksin TM bilan ishlashni o‘rganasiz",
          "Qadoqdagi har bir ko‘rsatkich nimaga javob berishini va preparatni qanday prinsip asosida tanlashni tushuntiramiz",
        ],
        [
          "Siz modellar ustida amaliyotni bajarib ko‘rasiz",
          "Bizning bazamizda real muammolari va istaklariga ega 3500 dan ortiq model mavjud",
        ],
      ],
    },
  };

  const text = content[language];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1200] px-5">
        <h2 className="mb-10 text-center text-[36px] font-bold text-[#424242]">
          {text.title}
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {text.advantages.map((card, index) => (
            <div key={index} className="rounded-[8] bg-[#D7FFD3] p-6 shadow-sm">
              <div className="flex flex-col gap-5">
                {card.map((item, itemIndex) => (
                  <p
                    key={itemIndex}
                    className="text-[17px] leading-[1.6] text-[#424242]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
