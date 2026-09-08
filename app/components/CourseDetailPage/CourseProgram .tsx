"use client";

import { useLanguage } from "../../context/LanguageContext";

const theoryRU = [
  "Виды токсинов на рынке. Преимущества и особенности",
  "Показания, противопоказания применения для разных возрастов, в зависимости от особенностей строения лица",
  "Показания к применению БТА в зависимости от анатомических и физиологических особенностей",
  "Анатомия лица по зонам. Геометрия точек и дозы для безопасного введения БТА",
  "Созависимость возраста и доз",
  "Техники разведения на разные виды токсинов",
  "Все виды осложнений и методы их коррекции",
  "Условия хранения БТА",
];

const theoryUZ = [
  "Bozordagi toksin turlari. Afzalliklari va o‘ziga xos xususiyatlari",
  "Yuz tuzilishining xususiyatlariga qarab, turli yoshdagi bemorlarda qo‘llash ko‘rsatmalari va qarshi ko‘rsatmalar",
  "Anatomik va fiziologik xususiyatlarga qarab BTA qo‘llash ko‘rsatmalari",
  "Yuz anatomiyasi zonalar bo‘yicha. BTA ni xavfsiz yuborish uchun nuqtalar geometriyasi va dozalar",
  "Yosh va dozaning o‘zaro bog‘liqligi",
  "Turli xil toksinlarni suyultirish texnikalari",
  "Asoratlarning barcha turlari va ularni tuzatish usullari",
  "BTA ni saqlash shartlari",
];

const practiceRU = [
  "Геометрия точек",
  "Техники разведения БТА",
  "Постановка руки",
  "Самостоятельные инъекции под чутким руководством тренера",
];

const practiceUZ = [
  "Nuqtalar geometriyasi",
  "BTA ni suyultirish texnikalari",
  "Qo‘lni to‘g‘ri qo‘yish texnikasi",
  "Trenerning diqqatli nazorati ostida mustaqil inyeksiyalar",
];

export default function CourseProgram() {
  const { language } = useLanguage();

  const theory = language === "RU" ? theoryRU : theoryUZ;
  const practice = language === "RU" ? practiceRU : practiceUZ;

  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <h2 className="mb-8 text-[30px] font-bold text-[#424242]">
          {language === "RU" ? "Программа курса" : "Kurs dasturi"}
        </h2>
        <div className="mb-10">
          <h3 className="mb-3 text-[22px] font-bold text-[#424242]">
            {language === "RU" ? "1 день" : "1-kun"}
          </h3>
          <p className="mb-7 text-[15px] leading-7 text-[#424242]">
            {language === "RU"
              ? "Тема: Коррекция ботулотоксином типа А (БТА) верхней и средней трети лица"
              : "Mavzu: Yuzning yuqori va o‘rta uchdan bir qismini A turdagi botulotoksin (BTA) yordamida korreksiya qilish"}
          </p>
          <h4 className="mb-5 text-[20px] font-bold text-[#55A630]">
            {language === "RU" ? "Теория" : "Nazariya"}
          </h4>
          <div className="space-y-5">
            {theory.map((item, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-[18px] font-bold text-[#55A630]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-6 text-[#424242]">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-10">
          <h4 className="mb-5 text-[20px] font-bold text-[#55A630]">
            {language === "RU" ? "Практика" : "Amaliyot"}
          </h4>
          <div className="space-y-5">
            {practice.map((item, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-[18px] font-bold text-[#55A630]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-6 text-[#424242]">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-[22px] font-bold text-[#424242]">
            {language === "RU" ? "2 день" : "2-kun"}
          </h3>
          <p className="text-[15px] leading-7 text-[#424242]">
            {language === "RU"
              ? "Тема: Коррекция нижней трети лица, особенности лечения гипергидроза, понятие техники мезоботокса"
              : "Mavzu: Yuzning pastki uchdan bir qismini korreksiya qilish, giperhidrozni davolash xususiyatlari, mezobotoks texnikasi tushunchasi"}
          </p>
        </div>
      </div>
    </section>
  );
}
