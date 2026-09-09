"use client";

import { useLanguage } from "../../context/LanguageContext";
import videoLesson from "../../data/videoLesson.json";

export default function VideoLesson() {
  const { language } = useLanguage();

  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <p className="mb-10 text-center text-[28px] font-medium text-[#424242]">
          {language === "RU" ? "ВИДЕО-УРОК" : "VIDEO-DARS"}
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-[14px] text-[#55A630]">
              {videoLesson.speaker[language]}
            </p>
            <h1 className="mb-15 max-w-[466] text-[28px] font-bold leading-9 text-[#424242]">
              {videoLesson.title[language]}
            </h1>
            <p className="mb-5 text-[16px] text-[#55A630]">
              {videoLesson.price[language]}
            </p>
            <button
              type="button"
              className="w-fit rounded-md border border-[#55A630] px-23 py-2 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white"
            >
              {videoLesson.button[language]}
            </button>
          </div>
          <div className="relative h-[350] overflow-hidden rounded-lg">
            <iframe
              className="h-full w-full rounded-lg"
              src={videoLesson.videoUrl}
              title={videoLesson.videoTitle[language]}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
