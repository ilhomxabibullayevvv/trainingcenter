"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function UsefulMaterials() {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);

  const articles = [
    {
      image: "/rectangle12.jpg",
      ru: "Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук и какие существуют альтернативы?",
      uz: "Bo‘yin, dekolte va qo‘l terisini tuzatishda mezoterapiya dolzarbmi va qanday muqobil usullar mavjud?",
    },
    {
      image: "/rectangle22.jpg",
      ru: "Как правильно ухаживать за кожей лица после косметологических процедур?",
      uz: "Kosmetologik muolajalardan keyin yuz terisini qanday to‘g‘ri parvarish qilish kerak?",
    },
    {
      image: "/rectangle23.jpg",
      ru: "Современные методы омоложения кожи лица",
      uz: "Yuz terisini yoshartirishning zamonaviy usullari",
    },
    {
      image: "/rectangle22.jpg",
      ru: "Какие процедуры подходят для проблемной кожи?",
      uz: "Muammoli teri uchun qanday muolajalar mos keladi?",
    },
    {
      image: "/rectangle23.jpg",
      ru: "Пилинг лица: виды, особенности и рекомендации",
      uz: "Yuz pilingi: turlari, xususiyatlari va tavsiyalar",
    },
    {
      image: "/rectangle12.jpg",
      ru: "Мезотерапия и биоревитализация: в чем разница?",
      uz: "Mezoterapiya va biorevitalizatsiya: farqi nimada?",
    },
    {
      image: "/rectangle23.jpg",
      ru: "Как подготовиться к косметологической процедуре?",
      uz: "Kosmetologik muolajaga qanday tayyorlanish kerak?",
    },
    {
      image: "/rectangle12.jpg",
      ru: "Уход за кожей в зимний период",
      uz: "Qish mavsumida terini parvarish qilish",
    },
    {
      image: "/rectangle22.jpg",
      ru: "Что нужно знать о профессиональной косметике?",
      uz: "Professional kosmetika haqida nimalarni bilish kerak?",
    },
    {
      image: "/rectangle12.jpg",
      ru: "Главные ошибки в уходе за кожей",
      uz: "Teri parvarishidagi asosiy xatolar",
    },
    {
      image: "/rectangle22.jpg",
      ru: "Как выбрать косметологическую процедуру?",
      uz: "Kosmetologik muolajani qanday tanlash kerak?",
    },
    {
      image: "/rectangle23.jpg",
      ru: "Уход за кожей после пилинга",
      uz: "Pilingdan keyin terini parvarish qilish",
    },
    {
      image: "/rectangle22.jpg",
      ru: "Почему важно использовать SPF?",
      uz: "Nima uchun SPF ishlatish muhim?",
    },
    {
      image: "/rectangle23.jpg",
      ru: "Основные этапы профессионального ухода",
      uz: "Professional parvarishning asosiy bosqichlari",
    },
    {
      image: "/rectangle12.jpg",
      ru: "Как сохранить молодость кожи?",
      uz: "Teri yoshligini qanday saqlab qolish mumkin?",
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <h1 className="mb-30 text-center text-[32px] font-bold text-[#424242]">
          {language === "RU" ? "Полезные материалы" : "Foydali materiallar"}
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {currentArticles.map((article, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-lg bg-[#F8F8F8]"
            >
              <Image
                src={article.image}
                alt={
                  language === "RU"
                    ? "Полезные материалы"
                    : "Foydali materiallar"
                }
                width={367}
                height={242}
                className="h-[242] w-full object-cover"
              />
              <div className="p-5">
                <h3 className="mb-6 text-[16px] font-medium leading-6 text-[#424242]">
                  {language === "RU" ? article.ru : article.uz}
                </h3>
                <button
                  type="button"
                  className="block w-full text-right text-[14px] font-medium text-[#55A630]"
                >
                  {language === "RU" ? "Читать полностью" : "To‘liq o‘qish"}
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center gap-5">
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={
                  currentPage === page
                    ? "font-bold text-[#55A630]"
                    : "font-medium text-[#424242]"
                }
              >
                {page}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
