"use client";

import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const reviews = [
  {
    name: "Ирина Бубличенко",
    date: "15.09.2020",
    textRU:
      "Вчера была на карбокситерапии первый раз. Сомневалась в эффективности процедуры и очень зря! Цвет лица выровнялся и кожа подтянулась, воспаления стали не такими заметными. Эффект был сразу после процедуры и я планирую пройти весь курс. Алиночка профессионал своего дела и отличный собеседник, всегда рекомендует самые эффективные процедуры.",
    textUZ:
      "Kecha birinchi marta karboksiterapiya muolajasini oldim. Muolajaning samaradorligiga shubha qilgandim, lekin bu bekorga ekan! Yuz rangi tekislandi, terim taranglashdi va yallig‘lanishlar ancha kamroq seziladigan bo‘ldi. Ta’siri muolajadan keyin darhol sezildi va men to‘liq kursni o‘tishni rejalashtiryapman. Alinochka o‘z ishining professional mutaxassisi va ajoyib suhbatdosh, har doim eng samarali muolajalarni tavsiya qiladi.",
  },
  {
    name: "Ирина Бубличенко",
    date: "15.09.2020",
    textRU:
      "Вчера была на карбокситерапии первый раз. Сомневалась в эффективности процедуры и очень зря! Цвет лица выровнялся и кожа подтянулась, воспаления стали не такими заметными. Эффект был сразу после процедуры и я планирую пройти весь курс.",
    textUZ:
      "Kecha birinchi marta karboksiterapiya muolajasini oldim. Muolajaning samaradorligiga shubha qilgandim, lekin bu bekorga ekan! Yuz rangi tekislandi, terim taranglashdi va yallig‘lanishlar ancha kamroq seziladigan bo‘ldi. Ta’siri muolajadan keyin darhol sezildi va men to‘liq kursni o‘tishni rejalashtiryapman.",
  },
  {
    name: "Ирина Бубличенко",
    date: "15.09.2020",
    textRU:
      "Вчера была на карбокситерапии первый раз. Сомневалась в эффективности процедуры и очень зря! Цвет лица выровнялся и кожа подтянулась, воспаления стали не такими заметными. Эффект был сразу после процедуры и я планирую пройти весь курс. Алиночка профессионал своего дела и отличный собеседник.",
    textUZ:
      "Kecha birinchi marta karboksiterapiya muolajasini oldim. Muolajaning samaradorligiga shubha qilgandim, lekin bu bekorga ekan! Yuz rangi tekislandi, terim taranglashdi va yallig‘lanishlar ancha kamroq seziladigan bo‘ldi. Ta’siri muolajadan keyin darhol sezildi va men to‘liq kursni o‘tishni rejalashtiryapman. Alinochka o‘z ishining professional mutaxassisi va ajoyib suhbatdosh.",
  },
  {
    name: "Ирина Бубличенко",
    date: "15.09.2020",
    textRU:
      "Вчера была на карбокситерапии первый раз. Сомневалась в эффективности процедуры и очень зря! Цвет лица выровнялся и кожа подтянулась, воспаления стали не такими заметными. Эффект был сразу после процедуры и я планирую пройти весь курс. Алиночка профессионал своего дела и отличный собеседник, всегда рекомендует самые эффективные процедуры.",
    textUZ:
      "Kecha birinchi marta karboksiterapiya muolajasini oldim. Muolajaning samaradorligiga shubha qilgandim, lekin bu bekorga ekan! Yuz rangi tekislandi, terim taranglashdi va yallig‘lanishlar ancha kamroq seziladigan bo‘ldi. Ta’siri muolajadan keyin darhol sezildi va men to‘liq kursni o‘tishni rejalashtiryapman. Alinochka o‘z ishining professional mutaxassisi va ajoyib suhbatdosh, har doim eng samarali muolajalarni tavsiya qiladi.",
  },
];

export default function Reviews() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-[1200] px-4">
          <h2 className="mb-10 text-center text-[32px] font-bold text-[#424242]">
            {language === "RU" ? "Отзывы" : "Sharhlar"}
          </h2>
          <div className="bg-[#ECF9EB] px-6 py-10 md:px-12 md:py-12">
            <div className="flex flex-col items-center gap-8">
              {reviews.map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  className="grid w-full grid-cols-1 gap-5 md:grid-cols-[145px_1fr] md:gap-8"
                >
                  <div>
                    <h3 className="text-[13px] text-[#424242]">
                      {review.name}
                    </h3>
                    <p className="mt-1 text-[13px] font-bold text-[#424242]">
                      {review.date}
                    </p>
                  </div>
                  <p className="max-w-[546] text-[13px] leading-5 text-[#666]">
                    {language === "RU" ? review.textRU : review.textUZ}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="rounded-md border border-[#55A630] px-15 py-4 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white"
              >
                {language === "RU" ? "Оставить отзыв" : "Sharh qoldirish"}
              </button>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-[440] border-[3px] border-[#55A630] bg-white px-5 py-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-3 top-2 text-[22px] font-light text-[#55A630] hover:text-[#478F29]"
            >
              ×
            </button>
            <h3 className="mb-6 text-center text-[16px] font-medium text-[#424242]">
              {language === "RU" ? "Оставить заявку" : "Ariza qoldirish"}
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  language === "RU" ? "Заявка отправлена!" : "Ariza yuborildi!",
                );
                setIsModalOpen(false);
              }}
              className="flex flex-col gap-10"
            >
              <input
                type="text"
                placeholder={language === "RU" ? "Ваше имя" : "Ismingiz"}
                required
                className="h-[38] w-full bg-[#F1F1F1] px-3 text-[11px] text-[#424242] outline-none placeholder:text-[#999] focus:ring-1 focus:ring-[#55A630]"
              />
              <input
                type="tel"
                placeholder={
                  language === "RU"
                    ? "Ваш номер телефона"
                    : "Telefon raqamingiz"
                }
                required
                className="h-[38] w-full bg-[#F1F1F1] px-3 text-[11px] text-[#424242] outline-none placeholder:text-[#999] focus:ring-1 focus:ring-[#55A630]"
              />
              <textarea
                placeholder={language === "RU" ? "Ваш отзыв" : "Sharhingiz"}
                required
                className="h-[120] w-full resize-none bg-[#F1F1F1] px-3 py-3 text-[11px] text-[#424242] outline-none placeholder:text-[#999] focus:ring-1 focus:ring-[#55A630]"
              />
              <div className="mt-2 flex justify-center">
                <button
                  type="submit"
                  className="rounded-md border border-[#55A630] px-10 py-2 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white"
                >
                  {language === "RU" ? "Отправить заявку" : "Arizani yuborish"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
