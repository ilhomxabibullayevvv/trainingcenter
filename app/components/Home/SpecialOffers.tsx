"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

const images = ["/rectangle8.jpg", "/rectangle9.jpg", "/rectangle10.jpg"];

export default function SpecialOffers() {
  const { language } = useLanguage();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200] px-5">
        <h2 className="mb-15 text-center text-3xl font-bold text-[#424242]">
          {language === "RU" ? "Специальные предложения" : "Maxsus takliflar"}
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image}
              className="relative h-[380] overflow-hidden rounded-lg"
            >
              <Image
                src={image}
                alt={
                  language === "RU"
                    ? `Специальное предложение ${index + 1}`
                    : `Maxsus taklif ${index + 1}`
                }
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
