"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import blogArticle from "../../data/blogArticle.json";

export default function BlogArticle() {
  const { language } = useLanguage();

  return (
    <section className="py-15">
      <div className="mx-auto w-full max-w-[1200]">
        <article>
          <div className="grid grid-cols-1 items-center gap-30 md:grid-cols-2">
            <div className="flex justify-center">
              <h1 className="max-w-[465] text-[32px] font-bold leading-10 text-[#424242]">
                {blogArticle.title[language]}
              </h1>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[547] w-full max-w-[590] rounded-lg">
                <Image
                  src={blogArticle.image}
                  alt={blogArticle.imageAlt[language]}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-15 max-w-[850] rounded-lg bg-[#DDE8D7] p-8">
            <div className="space-y-6 text-[16px] leading-7 text-[#424242]">
              {blogArticle.content.map((paragraph, index) => (
                <p key={index}>{paragraph[language]}</p>
              ))}
            </div>
          </div>
          <div className="mt-15 flex justify-center">
            <button
              type="button"
              className="text-[14px] font-medium text-[#424242] transition hover:text-[#55A630]"
            >
              {blogArticle.backButton[language]}
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
