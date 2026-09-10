"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const images = [
  "/rectangle8.jpg",
  "/rectangle9.jpg",
  "/rectangle10.jpg",
  "/rectangle9.jpg",
  "/rectangle10.jpg",
  "/rectangle8.jpg",
  "/rectangle10.jpg",
  "/rectangle8.jpg",
  "/rectangle9.jpg",
  "/rectangle8.jpg",
  "/rectangle9.jpg",
  "/rectangle10.jpg",
  "/rectangle9.jpg",
  "/rectangle10.jpg",
  "/rectangle8.jpg",
];

export default function SpecialOffers() {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentImages = images.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => {
        if (prevPage === totalPages - 1) {
          return 0;
        }

        return prevPage + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200] px-5">
        <h2 className="mb-15 text-center text-3xl font-bold text-[#424242]">
          {language === "RU" ? "Специальные предложения" : "Maxsus takliflar"}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {currentImages.map((image, index) => (
            <div
              key={`${image}-${startIndex + index}`}
              className="relative h-[380] overflow-hidden rounded-lg"
            >
              <Image
                src={image}
                alt={
                  language === "RU"
                    ? `Специальное предложение ${startIndex + index + 1}`
                    : `Maxsus taklif ${startIndex + index + 1}`
                }
                fill
                className="object-cover"
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
