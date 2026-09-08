"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

const items = [
  {
    titleRU: "Удобный формат обучения",
    titleUZ: "Qulay ta’lim formati",
    textRU:
      "Мы стараемся для вас и делаем обучение еще комфортнее!\n\nУ нас вы можете обучаться в формате оффлайн или выбирать онлайн формат обучения. Наши мастер-классы дублируются в двух форматах.",
    textUZ:
      "Biz siz uchun harakat qilamiz va ta’lim olishni yanada qulay qilamiz!\n\nBizda siz oflayn formatda ta’lim olishingiz yoki onlayn ta’lim formatini tanlashingiz mumkin. Master-klasslarimiz ikki xil formatda ham o‘tkaziladi.",
    image: "/rectangle14.jpg",
  },
  {
    titleRU: "Светлые аудитории",
    titleUZ: "Yorug‘ o‘quv xonalari",
    textRU:
      "Мы стараемся для вас и делаем обучение еще комфортнее.\n\nУ нас вы можете обучаться в формате оффлайн или выбирать онлайн формат обучения. Наши мастер-классы дублируются в двух форматах.",
    textUZ:
      "Biz siz uchun harakat qilamiz va ta’lim olishni yanada qulay qilamiz.\n\nBizda siz oflayn formatda ta’lim olishingiz yoki onlayn ta’lim formatini tanlashingiz mumkin. Master-klasslarimiz ikki xil formatda ham o‘tkaziladi.",
    image: "/rectangle15.jpg",
  },
  {
    titleRU: "Обучение в маленьких группах",
    titleUZ: "Kichik guruhlarda ta’lim",
    textRU:
      "Мы стараемся для вас и делаем обучение еще комфортнее!\n\nУ нас вы можете обучаться в формате оффлайн или выбирать онлайн формат обучения. Наши мастер-классы дублируются в двух форматах.",
    textUZ:
      "Biz siz uchun harakat qilamiz va ta’lim olishni yanada qulay qilamiz!\n\nBizda siz oflayn formatda ta’lim olishingiz yoki onlayn ta’lim formatini tanlashingiz mumkin. Master-klasslarimiz ikki xil formatda ham o‘tkaziladi.",
    image: "/rectangle16.jpg",
  },
];

export default function ComfortTraining() {
  const { language } = useLanguage();

  return (
    <section className="py-10 md:py-16">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <h2 className="mb-15 text-center text-[28px] font-bold text-[#55A630] md:text-[32px]">
          {language === "RU"
            ? "Мы - это обучение с комфортом"
            : "Biz — qulay sharoitda ta’lim olish"}
        </h2>
        <div className="space-y-10 md:space-y-14">
          {items.map((item, index) => (
            <div
              key={item.titleRU}
              className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="relative h-[280] w-full md:h-[350]">
                <Image
                  src={item.image}
                  alt={language === "RU" ? item.titleRU : item.titleUZ}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h3 className="mb-5 text-[22px] font-bold leading-7 text-[#424242] md:text-[24px]">
                  {language === "RU" ? item.titleRU : item.titleUZ}
                </h3>
                <div className="whitespace-pre-line text-[15px] leading-6 text-[#424242] md:text-[16px] md:leading-7">
                  {language === "RU" ? item.textRU : item.textUZ}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
