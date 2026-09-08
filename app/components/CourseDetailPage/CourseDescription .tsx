"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function CourseDescription() {
  const { language } = useLanguage();

  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <div className="max-w-[850] space-y-5 text-[15px] leading-7 text-[#424242]">
          <p>
            {language === "RU"
              ? "Процедура ботулинотерапия - это инъекционная методика для устранения и профилактики морщин. Также, процедура помогает бороться с опущением уголков рта, потерей четкости овала лица, гипергидрозом."
              : "Botulinoterapiya — ajinlarni yo‘qotish va ularning oldini olish uchun qo‘llaniladigan inyeksion usul. Shuningdek, ushbu muolaja lab burchaklarining tushishi, yuz ovalining aniqligi yo‘qolishi va giperhidroz bilan kurashishga yordam beradi."}
          </p>
          <p>
            {language === "RU"
              ? "На курсе вы научитесь тщательно подбирать препарат, а также отработаете на практике техники введения и безопасные разметки точек для разных анатомических типов лица. Вы будете эффективно и безопасно применять навыки в работе со своими клиентами."
              : "Kurs davomida siz preparatni to‘g‘ri va ehtiyotkorlik bilan tanlashni o‘rganasiz, shuningdek, turli anatomik yuz turlari uchun preparat yuborish texnikalari va nuqtalarni xavfsiz belgilashni amaliyotda o‘zlashtirasiz. O‘z mijozlaringiz bilan ishlashda olgan ko‘nikmalaringizni samarali va xavfsiz qo‘llay olasiz."}
          </p>
          <p>
            {language === "RU"
              ? "Курс по ботулинотерапии необходим, чтобы вы были уверены в своих знаниях и приносили желаемый результат своим клиентам."
              : "Botulinoterapiya kursi bilimlaringizga ishonch hosil qilishingiz va mijozlaringizga kutilgan natijani taqdim eta olishingiz uchun zarur."}
          </p>
        </div>
      </div>
    </section>
  );
}
