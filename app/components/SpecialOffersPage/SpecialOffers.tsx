"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function SpecialOffers() {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);

  const offers = [
    {
      image: "/rectangle21.jpg",
      ru: "Выгодная комбинация",
      uz: "Foydali kombinatsiya",
    },
    {
      image: "/rectangle24.jpg",
      ru: "Выгодная комбинация",
      uz: "Foydali kombinatsiya",
    },
    {
      image: "/rectangle25.jpg",
      ru: "Выгодная комбинация",
      uz: "Foydali kombinatsiya",
    },
    {
      image: "/rectangle24.jpg",
      ru: "Выгодная комбинация",
      uz: "Foydali kombinatsiya",
    },
    {
      image: "/rectangle25.jpg",
      ru: "Выгодная комбинация",
      uz: "Foydali kombinatsiya",
    },
    {
      image: "/rectangle21.jpg",
      ru: "Выгодная комбинация",
      uz: "Foydali kombinatsiya",
    },
    {
      image: "/rectangle25.jpg",
      ru: "Выгодная комбинация",
      uz: "Foydali kombinatsiya",
    },
    {
      image: "/rectangle21.jpg",
      ru: "Выгодная комбинация",
      uz: "Foydali kombinatsiya",
    },
    {
      image: "/rectangle24.jpg",
      ru: "Выгодная комбинация",
      uz: "Foydali kombinatsiya",
    },
    {
      image: "/rectangle21.jpg",
      ru: "Выгодная комбинация",
      uz: "Foydali kombinatsiya",
    },
    {
      image: "/rectangle24.jpg",
      ru: "Выгодная комбинация",
      uz: "Foydali kombinatsiya",
    },
    {
      image: "/rectangle25.jpg",
      ru: "Выгодная комбинация",
      uz: "Foydali kombinatsiya",
    },
    {
      image: "/rectangle24.jpg",
      ru: "Выгодная комбинация",
      uz: "Foydali kombinatsiya",
    },
    {
      image: "/rectangle25.jpg",
      ru: "Выгодная комбинация",
      uz: "Foydali kombinatsiya",
    },
    {
      image: "/rectangle21.jpg",
      ru: "Выгодная комбинация",
      uz: "Foydali kombinatsiya",
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(offers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOffers = offers.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <h1 className="mb-10 text-center text-[32px] font-bold text-[#424242]">
          {language === "RU" ? "Специальные предложения" : "Maxsus takliflar"}
        </h1>
        <div className="grid grid-cols-1 gap-8">
          {currentOffers.map((offer, index) => (
            <div
              key={index}
              className="grid grid-cols-1 overflow-hidden rounded-lg md:grid-cols-2"
            >
              <div className="relative h-[485] w-full md:max-w-[485]">
                <Image
                  src={offer.image}
                  alt={
                    language === "RU"
                      ? "Специальное предложение"
                      : "Maxsus taklif"
                  }
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8">
                <h2 className="mb-6 text-[26px] font-bold text-[#55A630]">
                  {language === "RU" ? offer.ru : offer.uz}
                </h2>
                <p className="mb-5 text-[16px] leading-6 text-[#424242]">
                  {language === "RU"
                    ? "При покупке препаратов ТМ + ботулотоксин типа А = 1 флакон препарата ТМ в подарок."
                    : "TM preparatlari + A turdagi botulotoksin xarid qilganda = 1 flakon TM preparati sovg‘a sifatida."}
                </p>
                <p className="mb-5 text-[16px] leading-6 text-[#424242]">
                  {language === "RU"
                    ? "Акция действует до 08 июля, поспешите воспользоваться выгодным предложением!"
                    : "Aksiya 8-iyulgacha amal qiladi, foydali taklifdan foydalanishga shoshiling!"}
                </p>
                <p className="mb-6 text-[16px] leading-6 text-[#424242]">
                  {language === "RU"
                    ? "Чтобы узнать условия акции оставляйте заявку или звоните по номеру 0(800)-50-86-22"
                    : "Aksiya shartlarini bilish uchun ariza qoldiring yoki 0(800)-50-86-22 raqamiga qo‘ng‘iroq qiling."}
                </p>
                <button
                  type="button"
                  className="w-fit rounded-md border border-[#55A630] px-15 py-2 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white"
                >
                  {language === "RU" ? "Оставить заявку" : "Ariza qoldirish"}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center gap-5">
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                type="button"
                onClick={() => {
                  setCurrentPage(page);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
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
