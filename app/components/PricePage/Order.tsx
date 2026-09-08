"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Order() {
  const { language } = useLanguage();

  return (
    <section className="py-16">
      <div className="mx-auto h-[526] max-w-[1200] px-5 py-[90] text-center shadow-[-2px_2px_20px_0px_#42424226]">
        <h2 className="mb-4 text-3xl font-bold text-[#55A630]">
          {language === "RU"
            ? "Закажите обратный звонок"
            : "Qayta qo‘ng‘iroq buyurtma qiling"}
        </h2>
        <p className="mb-8 text-[#424242]">
          {language === "RU"
            ? "Оставьте заявку в форме и наш менеджер свяжется с вами"
            : "Formani to‘ldiring va menejerimiz siz bilan bog‘lanadi"}
        </p>
        <form className="flex flex-col items-center gap-5">
          <input
            type="text"
            placeholder={language === "RU" ? "Ваше имя" : "Ismingiz"}
            className="w-full max-w-[427] border border-[#55A630] px-5 py-4 outline-none"
          />
          <input
            type="tel"
            placeholder={
              language === "RU" ? "Ваш номер телефона" : "Telefon raqamingiz"
            }
            className="w-full max-w-[427] border border-[#55A630] px-5 py-4 outline-none"
          />
          <button
            type="submit"
            className="w-full max-w-[427] rounded-md border border-[#55A630] px-7 py-4 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white"
          >
            {language === "RU" ? "Отправить" : "Yuborish"}
          </button>
        </form>
      </div>
    </section>
  );
}
