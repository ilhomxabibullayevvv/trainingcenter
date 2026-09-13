"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function BotoxDescription() {
  const { language } = useLanguage();

  const content = {
    RU: {
      first: `Процедура ботулинотерапия - это инъекционная методика для
      устранения и профилактики морщин. Также, процедура помогает
      бороться с опущением уголков рта, потерей четкости овала лица,
      гипергидрозом.`,

      second: `На курсе вы научитесь тщательно подбирать препарат, а также
      отработаете на практике техники введения и безопасные разметки
      точек для разных анатомических типов лица. Вы будете эффективно и
      безопасно применять навыки в работе со своими клиентами.`,

      third: `Курс по ботулинотерапии необходим, чтобы вы были уверены в своих
      знаниях и приносили желаемый результат своим клиентам.`,
    },

    UZ: {
      first: `Botulinoterapiya — bu ajinlarni yo‘qotish va ularning oldini olish
      uchun qo‘llaniladigan inyeksion usuldir. Shuningdek, ushbu muolaja
      og‘iz burchaklarining tushishi, yuz ovalining aniqligi yo‘qolishi va
      giperhidroz bilan kurashishga yordam beradi.`,

      second: `Kurs davomida siz preparatni to‘g‘ri tanlashni o‘rganasiz, shuningdek,
      turli anatomik yuz turlari uchun preparat yuborish texnikalari va
      nuqtalarni xavfsiz belgilash usullarini amaliyotda o‘zlashtirasiz.
      Olingan ko‘nikmalarni mijozlaringiz bilan ishlashda samarali va
      xavfsiz qo‘llay olasiz.`,

      third: `Botulinoterapiya kursi o‘z bilimlaringizga ishonch hosil qilishingiz
      va mijozlaringizga kutilgan natijani taqdim etishingiz uchun zarur.`,
    },
  };

  const text = content[language];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1200] bg-[#D7FFD3] px-5">
        <div className="max-w-[976] space-y-6 p-[30] text-[18px] leading-[1.7] text-[#424242]">
          <p>{text.first}</p>
          <p>{text.second}</p>
          <p>{text.third}</p>
        </div>
      </div>
    </section>
  );
}
