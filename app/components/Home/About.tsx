"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import about from "../../data/about.json";

export default function About() {
  const { language } = useLanguage();

  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-[1200] gap-10 px-5 md:grid-cols-2 md:items-center">
        <Image
          src={about.image}
          alt={about.imageAlt[language]}
          width={590}
          height={666}
          className=""
        />
        <div>
          <p className="mb-3 text-sm font-medium text-[#858585]">
            {about.label[language]}
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#55A630]">
            {about.title}
          </h2>
          <h2 className="mb-6 max-w-[452] text-3xl font-bold leading-tight text-[#424242]">
            {about.heading[language]}
          </h2>
          <p className="mb-5 max-w-[452] leading-7 text-[#666]">
            {about.description[language]}
          </p>
          <p className="mb-8 max-w-[452] leading-7 text-[#666]">
            {about.experience[language]}
          </p>
          <h2 className="text-right text-[#55A630]">
            {about.details[language]}
          </h2>
        </div>
      </div>
    </section>
  );
}
