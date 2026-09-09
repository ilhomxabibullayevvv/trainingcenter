"use client";

import { useLanguage } from "../../context/LanguageContext";
import videos from "../../data/otherVideoLessons.json";

export default function OtherVideoLessons() {
  const { language } = useLanguage();

  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <h2 className="mb-15 text-center text-[28px] font-bold text-[#424242]">
          {language === "RU" ? "Другие видео-уроки" : "Boshqa video-darslar"}
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-50">
          {videos.map((video) => (
            <article key={video.id} className="overflow-hidden rounded-lg">
              <div className="relative mb-[30] h-[333] w-full max-w-[487] overflow-hidden rounded-lg">
                <iframe
                  className="h-full w-full rounded-lg"
                  src={video.videoUrl}
                  title={video.videoTitle[language]}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div>
                <h3 className="mb-10 max-w-[308] text-[16px] font-medium leading-6 text-[#424242]">
                  {video.title[language]}
                </h3>
                <button
                  type="button"
                  className="w-fit rounded-md border border-[#55A630] px-25 py-2 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white"
                >
                  {video.button[language]}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
