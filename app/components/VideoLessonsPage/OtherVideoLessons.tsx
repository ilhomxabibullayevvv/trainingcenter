"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function OtherVideoLessons() {
  const { language } = useLanguage();

  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <h2 className="mb-15 text-center text-[28px] font-bold text-[#424242]">
          {language === "RU" ? "Другие видео-уроки" : "Boshqa video-darslar"}
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-50">
          <article className="overflow-hidden rounded-lg">
            <div className="relative mb-[30] h-[333] w-full max-w-[487] overflow-hidden rounded-lg">
              <iframe
                className="h-full w-full rounded-lg"
                src="https://www.youtube.com/embed/IOMgCWmqjWs"
                title={
                  language === "RU"
                    ? "Мезотерапия лица — видео урок"
                    : "Yuz mezoterapiyasi — video dars"
                }
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div>
              <h3 className="mb-10 max-w-[308] text-[16px] font-medium leading-6 text-[#424242]">
                {language === "RU"
                  ? "Мезотерапия лица — видео урок: теория и практика"
                  : "Yuz mezoterapiyasi — nazariya va amaliyot video darsi"}
              </h3>
              <button className="w-fit rounded-md border border-[#55A630] px-25 py-2 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                {language === "RU" ? "Купить" : "Sotib olish"}
              </button>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg">
            <div className="relative mb-[30] h-[333] w-full max-w-[487] overflow-hidden rounded-lg">
              <iframe
                className="h-full w-full rounded-lg"
                src="https://www.youtube.com/embed/IOMgCWmqjWs"
                title={
                  language === "RU"
                    ? "Мезотерапия — практический видео урок"
                    : "Mezoterapiya — amaliy video dars"
                }
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div>
              <h3 className="mb-10 max-w-[308] text-[16px] font-medium leading-6 text-[#424242]">
                {language === "RU"
                  ? "Мезотерапия — практический видео-урок"
                  : "Mezoterapiya — amaliy video-dars"}
              </h3>
              <button className="w-fit rounded-md border border-[#55A630] px-25 py-2 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                {language === "RU" ? "Купить" : "Sotib olish"}
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
