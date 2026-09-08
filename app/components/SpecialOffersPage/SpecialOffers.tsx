"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

export default function SpecialOffers() {
  const { language } = useLanguage();

  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <h1 className="mb-10 text-center text-[32px] font-bold text-[#424242]">
          {language === "RU" ? "Специальные предложения" : "Maxsus takliflar"}
        </h1>
        <div className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-1 overflow-hidden rounded-lg md:grid-cols-2">
            <div className="relative h-[485] max-w-[485]">
              <Image
                src="/rectangle21.jpg"
                alt={
                  language === "RU"
                    ? "Специальное предложение"
                    : "Maxsus taklif"
                }
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <h2 className="mb-6 text-[26px] font-bold text-[#55A630]">
                {language === "RU"
                  ? "Выгодная комбинация"
                  : "Foydali kombinatsiya"}
              </h2>
              <p className="mb-5 text-[16px] leading-6 text-[#424242]">
                {language === "RU"
                  ? "При покупке препаратов ТМ + ботулотоксин типа А = 1 флакон препарата ТМ в подарок."
                  : "TM preparatlari + A turdagi botulotoksin xarid qilganda = 1 flakon TM preparati sovg‘a sifatida."}
              </p>
              <p className="mb-5 text-[16px] leading-6 text-[#424242]">
                {language === "RU"
                  ? "Акция действует до 08 июля, поспешите воспользоваться выгодным предложением!"
                  : "Aksiya 8-iyulgacha amal qiladi, foydali taklifdan foydalanishga shoshiling!"}
              </p>
              <p className="mb-6 text-[16px] leading-6 text-[#424242]">
                {language === "RU"
                  ? "Чтобы узнать условия акции оставляйте заявку или звоните по номеру 0(800)-50-86-22"
                  : "Aksiya shartlarini bilish uchun ariza qoldiring yoki 0(800)-50-86-22 raqamiga qo‘ng‘iroq qiling."}
              </p>
              <button className="w-fit rounded-md border border-[#55A630] px-15 py-2 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                {language === "RU" ? "Оставить заявку" : "Ariza qoldirish"}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 overflow-hidden rounded-lg md:grid-cols-2">
            <div className="relative h-[485] max-w-[485]">
              <Image
                src="/rectangle21.jpg"
                alt={
                  language === "RU"
                    ? "Специальное предложение"
                    : "Maxsus taklif"
                }
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <h2 className="mb-6 text-[26px] font-bold text-[#55A630]">
                {language === "RU"
                  ? "Выгодная комбинация"
                  : "Foydali kombinatsiya"}
              </h2>
              <p className="mb-5 text-[16px] leading-6 text-[#424242]">
                {language === "RU"
                  ? "При покупке препаратов ТМ + ботулотоксин типа А = 1 флакон препарата ТМ в подарок."
                  : "TM preparatlari + A turdagi botulotoksin xarid qilganda = 1 flakon TM preparati sovg‘a sifatida."}
              </p>
              <p className="mb-5 text-[16px] leading-6 text-[#424242]">
                {language === "RU"
                  ? "Акция действует до 08 июля, поспешите воспользоваться выгодным предложением!"
                  : "Aksiya 8-iyulgacha amal qiladi, foydali taklifdan foydalanishga shoshiling!"}
              </p>
              <p className="mb-6 text-[16px] leading-6 text-[#424242]">
                {language === "RU"
                  ? "Чтобы узнать условия акции оставляйте заявку или звоните по номеру 0(800)-50-86-22"
                  : "Aksiya shartlarini bilish uchun ariza qoldiring yoki 0(800)-50-86-22 raqamiga qo‘ng‘iroq qiling."}
              </p>
              <button className="w-fit rounded-md border border-[#55A630] px-15 py-2 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                {language === "RU" ? "Оставить заявку" : "Ariza qoldirish"}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 overflow-hidden rounded-lg md:grid-cols-2">
            <div className="relative h-[485] max-w-[485]">
              <Image
                src="/rectangle21.jpg"
                alt={
                  language === "RU"
                    ? "Специальное предложение"
                    : "Maxsus taklif"
                }
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <h2 className="mb-6 text-[26px] font-bold text-[#55A630]">
                {language === "RU"
                  ? "Выгодная комбинация"
                  : "Foydali kombinatsiya"}
              </h2>
              <p className="mb-5 text-[16px] leading-6 text-[#424242]">
                {language === "RU"
                  ? "При покупке препаратов ТМ + ботулотоксин типа А = 1 флакон препарата ТМ в подарок."
                  : "TM preparatlari + A turdagi botulotoksin xarid qilganda = 1 flakon TM preparati sovg‘a sifatida."}
              </p>
              <p className="mb-5 text-[16px] leading-6 text-[#424242]">
                {language === "RU"
                  ? "Акция действует до 08 июля, поспешите воспользоваться выгодным предложением!"
                  : "Aksiya 8-iyulgacha amal qiladi, foydali taklifdan foydalanishga shoshiling!"}
              </p>
              <p className="mb-6 text-[16px] leading-6 text-[#424242]">
                {language === "RU"
                  ? "Чтобы узнать условия акции оставляйте заявку или звоните по номеру 0(800)-50-86-22"
                  : "Aksiya shartlarini bilish uchun ariza qoldiring yoki 0(800)-50-86-22 raqamiga qo‘ng‘iroq qiling."}
              </p>
              <button className="w-fit rounded-md border border-[#55A630] px-15 py-2 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                {language === "RU" ? "Оставить заявку" : "Ariza qoldirish"}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 overflow-hidden rounded-lg md:grid-cols-2">
            <div className="relative h-[485] max-w-[485]">
              <Image
                src="/rectangle21.jpg"
                alt={
                  language === "RU"
                    ? "Специальное предложение"
                    : "Maxsus taklif"
                }
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <h2 className="mb-6 text-[26px] font-bold text-[#55A630]">
                {language === "RU"
                  ? "Выгодная комбинация"
                  : "Foydali kombinatsiya"}
              </h2>
              <p className="mb-5 text-[16px] leading-6 text-[#424242]">
                {language === "RU"
                  ? "При покупке препаратов ТМ + ботулотоксин типа А = 1 флакон препарата ТМ в подарок."
                  : "TM preparatlari + A turdagi botulotoksin xarid qilganda = 1 flakon TM preparati sovg‘a sifatida."}
              </p>
              <p className="mb-5 text-[16px] leading-6 text-[#424242]">
                {language === "RU"
                  ? "Акция действует до 08 июля, поспешите воспользоваться выгодным предложением!"
                  : "Aksiya 8-iyulgacha amal qiladi, foydali taklifdan foydalanishga shoshiling!"}
              </p>
              <p className="mb-6 text-[16px] leading-6 text-[#424242]">
                {language === "RU"
                  ? "Чтобы узнать условия акции оставляйте заявку или звоните по номеру 0(800)-50-86-22"
                  : "Aksiya shartlarini bilish uchun ariza qoldiring yoki 0(800)-50-86-22 raqamiga qo‘ng‘iroq qiling."}
              </p>
              <button className="w-fit rounded-md border border-[#55A630] px-15 py-2 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                {language === "RU" ? "Оставить заявку" : "Ariza qoldirish"}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 overflow-hidden rounded-lg md:grid-cols-2">
            <div className="relative h-[485] max-w-[485]">
              <Image
                src="/rectangle21.jpg"
                alt={
                  language === "RU"
                    ? "Специальное предложение"
                    : "Maxsus taklif"
                }
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <h2 className="mb-6 text-[26px] font-bold text-[#55A630]">
                {language === "RU"
                  ? "Выгодная комбинация"
                  : "Foydali kombinatsiya"}
              </h2>
              <p className="mb-5 text-[16px] leading-6 text-[#424242]">
                {language === "RU"
                  ? "При покупке препаратов ТМ + ботулотоксин типа А = 1 флакон препарата ТМ в подарок."
                  : "TM preparatlari + A turdagi botulotoksin xarid qilganda = 1 flakon TM preparati sovg‘a sifatida."}
              </p>
              <p className="mb-5 text-[16px] leading-6 text-[#424242]">
                {language === "RU"
                  ? "Акция действует до 08 июля, поспешите воспользоваться выгодным предложением!"
                  : "Aksiya 8-iyulgacha amal qiladi, foydali taklifdan foydalanishga shoshiling!"}
              </p>
              <p className="mb-6 text-[16px] leading-6 text-[#424242]">
                {language === "RU"
                  ? "Чтобы узнать условия акции оставляйте заявку или звоните по номеру 0(800)-50-86-22"
                  : "Aksiya shartlarini bilish uchun ariza qoldiring yoki 0(800)-50-86-22 raqamiga qo‘ng‘iroq qiling."}
              </p>
              <button className="w-fit rounded-md border border-[#55A630] px-15 py-2 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                {language === "RU" ? "Оставить заявку" : "Ariza qoldirish"}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center gap-5">
          <button className="font-bold text-[#55A630]">1</button>
          <button className="text-[#424242]">2</button>
          <button className="text-[#424242]">3</button>
          <button className="text-[#424242]">4</button>
          <button className="text-[#424242]">5</button>
        </div>
      </div>
    </section>
  );
}
