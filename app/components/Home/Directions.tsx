"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

const images = [
  "/rectangle3.jpg",
  "/rectangle4.jpg",
  "/rectangle5.jpg",
  "/rectangle6.jpg",
  "/rectangle7.jpg",
];

export default function Directions() {
  const { language } = useLanguage();

  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1200] px-5">
        <h2 className="mb-30 text-center text-3xl font-bold text-[#424242]">
          {language === "RU"
            ? "Обучение косметологов"
            : "Kosmetologlarni o‘qitish"}
        </h2>
        <div className="mb-5 grid grid-cols-2 gap-5">
          {images.slice(0, 2).map((image, index) => (
            <div
              key={image}
              className="relative h-[300] overflow-hidden rounded-lg"
            >
              <Image
                src={image}
                alt={
                  language === "RU"
                    ? `Обучение косметологов ${index + 1}`
                    : `Kosmetologlarni o‘qitish ${index + 1}`
                }
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-5">
          {images.slice(2).map((image, index) => (
            <div
              key={image}
              className="relative h-[250] overflow-hidden rounded-lg"
            >
              <Image
                src={image}
                alt={
                  language === "RU"
                    ? `Обучение косметологов ${index + 3}`
                    : `Kosmetologlarni o‘qitish ${index + 3}`
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
