"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function PriceTable() {
  const { language } = useLanguage();

  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <h1 className="mb-10 text-center text-[32px] font-bold text-[#424242]">
          {language === "RU" ? "Стоимость обучения" : "Ta’lim narxi"}
        </h1>
        <div className="overflow-x-auto bg-[#F8F8F8]">
          <table className="w-full min-w-[700] border-collapse text-[13px] text-[#424242]">
            <thead>
              <tr className="border-b border-[#D9D9D9] text-left">
                <th className="px-3 py-4 font-medium">
                  {language === "RU" ? "Курс обучения" : "Ta’lim kursi"}
                </th>
                <th className="px-3 py-4 text-center font-medium">
                  {language === "RU" ? "Дни" : "Kunlar"}
                </th>
                <th className="px-3 py-4 text-center font-medium">
                  {language === "RU" ? "Часы" : "Soatlar"}
                </th>
                <th className="px-3 py-4 text-center font-medium">
                  {language === "RU"
                    ? "Ранняя регистрация"
                    : "Erta ro‘yxatdan o‘tish"}
                </th>
                <th className="px-3 py-4 text-center font-medium">
                  {language === "RU"
                    ? "Поздняя регистрация"
                    : "Kech ro‘yxatdan o‘tish"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E5E5E5]">
                <td className="px-3 py-4 font-bold text-[#424242]">
                  1.0&nbsp;&nbsp;
                  {language === "RU"
                    ? "Мезотерапия в эстетической косметологии"
                    : "Estetik kosmetologiyada mezoterapiya"}
                </td>
                <td className="px-3 py-4 text-center font-bold">5</td>
                <td className="px-3 py-4 text-center font-bold">40</td>
                <td className="px-3 py-4 text-center font-bold">10800 грн</td>
                <td className="px-3 py-4 text-center font-bold">14700 грн</td>
              </tr>
              <tr className="border-b border-[#E5E5E5]">
                <td className="px-3 py-3 pl-8">
                  1.1&nbsp;&nbsp;
                  {language === "RU"
                    ? "Техники мезотерапии"
                    : "Mezoterapiya texnikalari"}
                </td>
                <td className="px-3 py-3 text-center">1</td>
                <td className="px-3 py-3 text-center">8</td>
                <td className="px-3 py-3 text-center">2900 грн</td>
                <td className="px-3 py-3 text-center">3950 грн</td>
              </tr>
              <tr className="border-b border-[#E5E5E5]">
                <td className="px-3 py-3 pl-8">
                  1.2&nbsp;&nbsp;
                  {language === "RU"
                    ? "Мезотерапия лица"
                    : "Yuz mezoterapiyasi"}
                </td>
                <td className="px-3 py-3 text-center">1</td>
                <td className="px-3 py-3 text-center">8</td>
                <td className="px-3 py-3 text-center">2900 грн</td>
                <td className="px-3 py-3 text-center">3950 грн</td>
              </tr>
              <tr className="border-b border-[#E5E5E5]">
                <td className="px-3 py-3 pl-8">
                  1.3&nbsp;&nbsp;
                  {language === "RU"
                    ? "Липоскульптура тела"
                    : "Tana liposkalpulturasi"}
                </td>
                <td className="px-3 py-3 text-center">1</td>
                <td className="px-3 py-3 text-center">8</td>
                <td className="px-3 py-3 text-center">2900 грн</td>
                <td className="px-3 py-3 text-center">3950 грн</td>
              </tr>
              <tr className="border-b border-[#E5E5E5]">
                <td className="px-3 py-3 pl-8">
                  1.4&nbsp;&nbsp;
                  {language === "RU"
                    ? "Мезотерапия в трихологии"
                    : "Trikologiyada mezoterapiya"}
                </td>
                <td className="px-3 py-3 text-center">1</td>
                <td className="px-3 py-3 text-center">8</td>
                <td className="px-3 py-3 text-center">2900 грн</td>
                <td className="px-3 py-3 text-center">3950 грн</td>
              </tr>
              <tr className="border-b border-[#E5E5E5]">
                <td className="px-3 py-3 pl-8">
                  1.5&nbsp;&nbsp;
                  {language === "RU"
                    ? "Биоревитализация"
                    : "Biorevitalizatsiya"}
                </td>
                <td className="px-3 py-3 text-center">1</td>
                <td className="px-3 py-3 text-center">8</td>
                <td className="px-3 py-3 text-center">2900 грн</td>
                <td className="px-3 py-3 text-center">3950 грн</td>
              </tr>
              <tr className="border-b border-[#E5E5E5]">
                <td className="px-3 py-4 font-bold text-[#424242]">
                  2.0&nbsp;&nbsp;
                  {language === "RU"
                    ? "Контурная пластика иглой"
                    : "Igna bilan kontur plastika"}
                </td>
                <td className="px-3 py-4 text-center font-bold">2</td>
                <td className="px-3 py-4 text-center font-bold">16</td>
                <td className="px-3 py-4 text-center font-bold">7900 грн</td>
                <td className="px-3 py-4 text-center font-bold">11900 грн</td>
              </tr>
              <tr className="border-b border-[#E5E5E5]">
                <td className="px-3 py-3 pl-8">
                  2.1&nbsp;&nbsp;
                  {language === "RU"
                    ? "Базовый уровень"
                    : "Boshlang‘ich daraja"}
                </td>
                <td className="px-3 py-3 text-center">1</td>
                <td className="px-3 py-3 text-center">8</td>
                <td className="px-3 py-3 text-center">4500 грн</td>
                <td className="px-3 py-3 text-center">6450 грн</td>
              </tr>
              <tr className="border-b border-[#E5E5E5]">
                <td className="px-3 py-3 pl-8">
                  2.2&nbsp;&nbsp;
                  {language === "RU"
                    ? "Моделирование губ"
                    : "Lablarni modellashtirish"}
                </td>
                <td className="px-3 py-3 text-center">1</td>
                <td className="px-3 py-3 text-center">8</td>
                <td className="px-3 py-3 text-center">4500 грн</td>
                <td className="px-3 py-3 text-center">6450 грн</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 bg-[#ECF9EB] p-1 text-center text-[13px] text-[#666]">
          {language === "RU"
            ? "* Вы можете пройти обучение полностью или выбрать 1-й или 2-й день"
            : "* Siz ta’limni to‘liq o‘tashingiz yoki 1-kun yoki 2-kunni tanlashingiz mumkin"}
        </p>
      </div>
    </section>
  );
}
