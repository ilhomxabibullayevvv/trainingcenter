"use client";

import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function CourseProgram() {
  const { language } = useLanguage();
  const [isDay1Open, setIsDay1Open] = useState(false);
  const [isDay2Open, setIsDay2Open] = useState(false);

  const content = {
    RU: {
      title: "Программа курса",

      day1: "1 ДЕНЬ",
      topic1:
        "Тема: Коррекция ботулотоксином типа А (БТА) верхней и средней трети лица",

      theoryTitle: "ТЕОРИЯ",

      theory: [
        "Виды токсинов на рынке. Преимущества и особенности",
        "Показания, противопоказания применения для разных возрастов, в зависимости от особенностей строения лица",
        "Показания к применению БТА в зависимости от анатомических и физиологических особенностей",
        "Анатомия лица по зонам. Геометрия точек и дозы для безопасного введения БТА",
        "Созависимость возраста и доз",
        "Техники разведения на разные виды токсинов",
        "Все виды осложнений и методы их коррекции",
        "Условия хранения БТА",
      ],

      practiceTitle: "ПРАКТИКА",

      practice: [
        "Геометрия точек",
        "Техники разведения БТА",
        "Постановка руки",
        "Самостоятельные инъекции под чутким руководством тренера",
      ],

      day2: "2 ДЕНЬ",

      topic2:
        "Тема: Коррекция нижней трети лица, особенности лечения гипергидроза, понятие техники мезоботокса",

      day2Content: [
        "Коррекция нижней трети лица",
        "Особенности лечения гипергидроза",
        "Понятие техники мезоботокса",
        "Разбор практических случаев",
      ],
    },

    UZ: {
      title: "Kurs dasturi",

      day1: "1 KUN",
      topic1:
        "Mavzu: A tipidagi botulotoksin (BTA) yordamida yuzning yuqori va o‘rta uchdan bir qismini korreksiya qilish",

      theoryTitle: "NAZARIYA",

      theory: [
        "Bozordagi toksin turlari. Afzalliklari va xususiyatlari",
        "Yuz tuzilishining o‘ziga xosligiga qarab turli yoshdagi bemorlarda qo‘llash ko‘rsatmalari va qarshi ko‘rsatmalar",
        "Anatomik va fiziologik xususiyatlarga qarab BTA qo‘llash ko‘rsatmalari",
        "Yuz anatomiyasi zonalar bo‘yicha. BTA ni xavfsiz yuborish uchun nuqtalar geometriyasi va dozalar",
        "Yosh va dozalar o‘rtasidagi bog‘liqlik",
        "Turli xil toksinlarni suyultirish texnikalari",
        "Barcha turdagi asoratlar va ularni tuzatish usullari",
        "BTA ni saqlash shartlari",
      ],

      practiceTitle: "AMALIYOT",

      practice: [
        "Nuqtalar geometriyasi",
        "BTA ni suyultirish texnikalari",
        "Qo‘lni to‘g‘ri qo‘yish",
        "Trener nazorati ostida mustaqil inyeksiyalar",
      ],

      day2: "2 KUN",

      topic2:
        "Mavzu: Yuzning pastki uchdan bir qismini korreksiya qilish, giperhidrozni davolash xususiyatlari, mezobotoks texnikasi tushunchasi",

      day2Content: [
        "Yuzning pastki uchdan bir qismini korreksiya qilish",
        "Giperhidrozni davolash xususiyatlari",
        "Mezobotoks texnikasi tushunchasi",
        "Amaliy holatlarni tahlil qilish",
      ],
    },
  };

  const text = content[language];

  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <h2 className="mb-12 text-center text-[36px] font-bold text-[#424242]">
          {text.title}
        </h2>
        <div className="overflow-hidden rounded-[4] bg-white shadow-[0px_4px_10px_0px_#C6C6C64D]">
          <div className="border-b border-[#D4D8DB] px-8 py-6 md:px-10">
            <div className="grid grid-cols-[90px_1fr_auto] items-center gap-5 md:grid-cols-[130px_1fr_auto] md:gap-8">
              <div>
                <h3 className="text-[16px] font-medium uppercase text-[#424242] md:text-[18px]">
                  {text.day1}
                </h3>
              </div>
              <p className="max-w-[850] text-[12px] leading-[1.4] text-[#777777] md:text-[13px]">
                {text.topic1}
              </p>
              <button
                type="button"
                onClick={() => setIsDay1Open(!isDay1Open)}
                className="flex h-[26] w-[26] shrink-0 items-center justify-center rounded-full bg-[#F3F3F3] text-[22px] font-light leading-none text-[#AFAFAF] transition hover:bg-[#55A630] hover:text-white"
                aria-label={isDay1Open ? "Закрыть" : "Открыть"}
              >
                {isDay1Open ? "−" : "+"}
              </button>
            </div>
            {isDay1Open && (
              <div className="mt-8 ml-0 md:ml-[162]">
                <h4 className="mb-4 text-[11px] font-semibold uppercase text-[#55A630]">
                  {text.theoryTitle}
                </h4>
                <div className="space-y-4">
                  {text.theory.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[22px_1fr] gap-2"
                    >
                      <span className="text-[11px] font-semibold text-[#D4D8DB]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[11px] leading-[1.4] text-[#777777] md:text-[12px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <h4 className="mb-4 mt-8 text-[11px] font-semibold uppercase text-[#55A630]">
                  {text.practiceTitle}
                </h4>
                <div className="space-y-4">
                  {text.practice.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[22px_1fr] gap-2"
                    >
                      <span className="text-[11px] font-semibold text-[#D4D8DB]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[11px] leading-[1.4] text-[#777777] md:text-[12px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="px-8 py-6 md:px-10">
            <div className="grid grid-cols-[90px_1fr_auto] items-center gap-5 md:grid-cols-[130px_1fr_auto] md:gap-8">
              <div>
                <h3 className="text-[16px] font-medium uppercase text-[#424242] md:text-[18px]">
                  {text.day2}
                </h3>
              </div>
              <p className="max-w-[850] text-[12px] leading-[1.4] text-[#777777] md:text-[13px]">
                {text.topic2}
              </p>
              <button
                type="button"
                onClick={() => setIsDay2Open(!isDay2Open)}
                className="flex h-[26] w-[26] shrink-0 items-center justify-center rounded-full bg-[#F3F3F3] text-[22px] font-light leading-none text-[#AFAFAF] transition hover:bg-[#55A630] hover:text-white"
                aria-label={isDay2Open ? "Закрыть" : "Открыть"}
              >
                {isDay2Open ? "−" : "+"}
              </button>
            </div>
            {isDay2Open && (
              <div className="mt-8 ml-0 md:ml-[162]">
                <div className="space-y-4">
                  {text.day2Content.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[22px_1fr] gap-2"
                    >
                      <span className="text-[11px] font-semibold text-[#D4D8DB]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[11px] leading-[1.4] text-[#777777] md:text-[12px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
