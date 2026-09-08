"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

export default function VideoLessons() {
  const { language } = useLanguage();

  return (
    <>
      <section className="py-10">
        <div className="mx-auto w-full max-w-[1200] px-5">
          <p className="mb-10 text-center text-[28px] font-medium text-[#424242]">
            {language === "RU" ? "ВИДЕО-УРОК" : "VIDEO-DARS"}
          </p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-[14px] text-[#55A630]">
                {language === "RU"
                  ? "Спикер: Марина Спивак"
                  : "Spiker: Marina Spivak"}
              </p>
              <h1 className="mb-15 max-w-[466] text-[28px] font-bold leading-9 text-[#424242]">
                {language === "RU" ? (
                  <>
                    Как безопасно работать
                    <br />в зоне носослезной борозды канюлей?
                  </>
                ) : (
                  <>
                    Burun-ko‘z yosh yo‘li sohasida
                    <br />
                    kanyula bilan qanday xavfsiz ishlash kerak?
                  </>
                )}
              </h1>
              <p className="mb-5 text-[16px] text-[#55A630]">
                {language === "RU" ? "Стоимость: 500 грн" : "Narxi: 500 grn"}
              </p>
              <button className="w-fit rounded-md border border-[#55A630] px-23 py-2 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                {language === "RU" ? "Купить" : "Sotib olish"}
              </button>
            </div>
            <div className="relative h-[350] overflow-hidden rounded-lg">
              <Image
                src="/rectangle11.jpg"
                alt={language === "RU" ? "Видео-урок" : "Video-dars"}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="mx-auto w-full max-w-[1200] px-5">
          <h2 className="mb-15 text-center text-[28px] font-bold text-[#424242]">
            {language === "RU" ? "Другие видео-уроки" : "Boshqa video-darslar"}
          </h2>
          <div className="grid grid-cols-1 gap-50 md:grid-cols-2">
            <article className="overflow-hidden rounded-lg">
              <div className="relative h-[333] w-[487]">
                <Image
                  src="/rectangle2.png"
                  alt={language === "RU" ? "Видео-урок" : "Video-dars"}
                  fill
                  className="object-cover pb-[30]"
                />
              </div>
              <div>
                <h3 className="mb-10 max-w-[308] text-[16px] font-medium leading-6 text-[#424242]">
                  {language === "RU"
                    ? "Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук и какие существуют альтернативы?"
                    : "Bo‘yin, dekolte va qo‘l panjalarini tuzatishda mezoterapiya dolzarbmi va qanday muqobil usullar mavjud?"}
                </h3>
                <button className="w-fit rounded-md border border-[#55A630] px-25 py-2 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                  {language === "RU" ? "Купить" : "Sotib olish"}
                </button>
              </div>
            </article>
            <article className="overflow-hidden rounded-lg">
              <div className="relative h-[333] w-[487]">
                <Image
                  src="/rectangle2.png"
                  alt={language === "RU" ? "Видео-урок" : "Video-dars"}
                  fill
                  className="object-cover pb-[30]"
                />
              </div>
              <div>
                <h3 className="mb-10 max-w-[308] text-[16px] font-medium leading-6 text-[#424242]">
                  {language === "RU"
                    ? "Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук и какие существуют альтернативы?"
                    : "Bo‘yin, dekolte va qo‘l panjalarini tuzatishda mezoterapiya dolzarbmi va qanday muqobil usullar mavjud?"}
                </h3>
                <button className="w-fit rounded-md border border-[#55A630] px-25 py-2 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                  {language === "RU" ? "Купить" : "Sotib olish"}
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
