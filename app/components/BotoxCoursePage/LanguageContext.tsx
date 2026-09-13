"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const images = [
  "/rectangle28.jpg",
  "/rectangle29.jpg",
  "/rectangle30.jpg",
  "/rectangle29.jpg",
  "/rectangle30.jpg",
  "/rectangle28.jpg",
  "/rectangle30.jpg",
  "/rectangle28.jpg",
  "/rectangle29.jpg",
];

export default function HowItWas() {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentImages = images.slice(startIndex, startIndex + itemsPerPage);

  const title =
    language === "RU"
      ? "Как это было в прошлый раз"
      : "O‘tgan safar qanday bo‘lgan edi";

  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <h2 className="mb-8 text-center text-[26px] font-bold text-[#424242] sm:mb-12 sm:text-[32px]">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {currentImages.map((image, index) => (
            <div
              key={`${image}-${startIndex + index}`}
              className="relative h-[300] overflow-hidden rounded-[8]"
            >
              <Image
                src={image}
                alt={
                  language === "RU"
                    ? "Как это было в прошлый раз"
                    : "O‘tgan safar qanday bo‘lgan"
                }
                width={350}
                height={300}
                className="h-[300] w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentPage(index)}
              aria-label={`Page ${index + 1}`}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentPage === index ? "bg-[#55A630]" : "bg-[#B7ECB1]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
