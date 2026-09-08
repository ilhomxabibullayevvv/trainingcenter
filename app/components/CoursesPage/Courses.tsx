"use client";

import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function Courses() {
  const { language } = useLanguage();

  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <div className="mb-8">
          <h1 className="mb-3 text-center text-[32px] font-bold text-[#424242]">
            {language === "RU" ? "КУРСЫ ОБУЧЕНИЯ" : "TA’LIM KURSLARI"}
          </h1>
          <p className="text-center text-[14px] text-[#55A630]">
            {language === "RU"
              ? "- курсы с возможностью ранней регистрации"
              : "- erta ro‘yxatdan o‘tish imkoniyati mavjud kurslar"}
          </p>
        </div>
        <div className="mb-10">
          <div className="mb-5 flex flex-wrap">
            <button className="rounded border border-[#C7F8C2] px-13 py-3 text-[14px] text-[#55A630] hover:bg-[#C7F8C2] hover:text-[#424242]">
              {language === "RU" ? "Все направления" : "Barcha yo‘nalishlar"}
            </button>
            <button className="rounded border border-[#C7F8C2] px-13 py-3 text-[14px] text-[#55A630] hover:bg-[#C7F8C2] hover:text-[#424242]">
              {language === "RU"
                ? "Курсы по косметологии"
                : "Kosmetologiya kurslari"}
            </button>
            <button className="rounded border border-[#C7F8C2] px-13 py-3 text-[14px] text-[#55A630] hover:bg-[#C7F8C2] hover:text-[#424242]">
              {language === "RU" ? "Онлайн обучение" : "Onlayn ta’lim"}
            </button>
            <button className="rounded border border-[#C7F8C2] px-13 py-3 text-[14px] text-[#55A630] hover:bg-[#C7F8C2] hover:text-[#424242]">
              {language === "RU" ? "Мастер-классы" : "Master-klasslar"}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-lg bg-white shadow-[0_2px_15px_rgba(0,0,0,0.08)]">
            <div className="relative h-[220] bg-[#DDE8D7]">
              <span className="absolute left-4 top-4 rounded bg-white px-3 py-2 text-[12px] text-[#55A630]">
                {language === "RU" ? "Оффлайн" : "Oflayn"}
              </span>
            </div>
            <div className="p-5">
              <h2 className="mb-3 text-[22px] font-bold text-[#424242]">
                {language === "RU"
                  ? "Курс для медиков"
                  : "Tibbiyot xodimlari uchun kurs"}
              </h2>
              <p className="mb-3 text-[14px] text-[#55A630]">
                {language === "RU"
                  ? "Канюльные техники"
                  : "Kanulali texnikalar"}
              </p>
              <div className="mb-4 flex justify-between text-[13px] text-[#424242]">
                <span>1 - 4 мая</span>
                <button className="text-[#55A630]">
                  {language === "RU" ? "Смотреть трейлер" : "Treylеrni ko‘rish"}
                </button>
              </div>
              <div className="mb-5 text-[14px] leading-6 text-[#666]">
                <p>
                  {language === "RU" ? "Краткое описание" : "Qisqacha tavsif"}
                </p>
                <p>{language === "RU" ? "Что-то о курсе" : "Kurs haqida"}</p>
                <p>{language === "RU" ? "Пару фактов" : "Bir nechta fakt"}</p>
              </div>
              <p className="mb-5 text-[14px] font-medium text-[#55A630]">
                {language === "RU"
                  ? "Свободно 2 из 15 мест"
                  : "15 ta joydan 2 tasi bo‘sh"}
              </p>
              <div className="flex flex-col gap-3">
                <button className="w-full rounded-md border border-[#55A630] px-7 py-4 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                  {language === "RU"
                    ? "Зарегистрироваться"
                    : "Ro‘yxatdan o‘tish"}
                </button>
                <Link
                  href="/CourseDetailPage"
                  className="block w-full rounded-md border border-[#55A630] px-7 py-4 text-center font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white"
                >
                  {language === "RU" ? "Подробнее" : "Batafsil"}
                </Link>
              </div>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg bg-white shadow-[0_2px_15px_rgba(0,0,0,0.08)]">
            <div className="relative h-[220] bg-[#DDE8D7]">
              <span className="absolute left-4 top-4 rounded bg-white px-3 py-2 text-[12px] text-[#55A630]">
                {language === "RU" ? "Онлайн" : "Onlayn"}
              </span>
            </div>
            <div className="p-5">
              <h2 className="mb-3 text-[22px] font-bold text-[#424242]">
                {language === "RU"
                  ? "Мезотерапия и Биоревителизация"
                  : "Mezoterapiya va biorevitalizatsiya"}
              </h2>
              <p className="mb-3 text-[14px] text-[#55A630]">
                {language === "RU"
                  ? "Курс для медиков"
                  : "Tibbiyot xodimlari uchun kurs"}
              </p>
              <div className="mb-4 flex justify-between text-[13px] text-[#424242]">
                <span>15 - 20 мая</span>
                <button className="text-[#55A630]">
                  {language === "RU" ? "Смотреть трейлер" : "Treylеrni ko‘rish"}
                </button>
              </div>
              <div className="mb-5 text-[14px] leading-6 text-[#666]">
                <p>
                  {language === "RU" ? "Краткое описание" : "Qisqacha tavsif"}
                </p>
                <p>{language === "RU" ? "Что-то о курсе" : "Kurs haqida"}</p>
                <p>{language === "RU" ? "Пару фактов" : "Bir nechta fakt"}</p>
              </div>
              <p className="mb-5 text-[14px] font-medium text-[#55A630]">
                {language === "RU"
                  ? "Свободно 2 из 15 мест"
                  : "15 ta joydan 2 tasi bo‘sh"}
              </p>
              <div className="flex flex-col gap-3">
                <button className="w-full rounded-md border border-[#55A630] px-7 py-4 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                  {language === "RU"
                    ? "Зарегистрироваться"
                    : "Ro‘yxatdan o‘tish"}
                </button>
                <Link
                  href="/CourseDetailPage"
                  className="block w-full rounded-md border border-[#55A630] px-7 py-4 text-center font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white"
                >
                  {language === "RU" ? "Подробнее" : "Batafsil"}
                </Link>
              </div>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg bg-white shadow-[0_2px_15px_rgba(0,0,0,0.08)]">
            <div className="relative h-[220] bg-[#DDE8D7]">
              <span className="absolute left-4 top-4 rounded bg-white px-3 py-2 text-[12px] text-[#55A630]">
                {language === "RU" ? "Мастер-класс" : "Master-klass"}
              </span>
            </div>
            <div className="p-5">
              <h2 className="mb-3 text-[22px] font-bold text-[#424242]">
                {language === "RU"
                  ? "Биогель - новое в косметологии"
                  : "Biogel — kosmetologiyada yangi yo‘nalish"}
              </h2>
              <p className="mb-3 text-[14px] text-[#55A630]">
                {language === "RU"
                  ? "Курс для медиков"
                  : "Tibbiyot xodimlari uchun kurs"}
              </p>
              <div className="mb-4 flex justify-between text-[13px] text-[#424242]">
                <span>2 - 5 августа</span>
                <button className="text-[#55A630]">
                  {language === "RU" ? "Смотреть трейлер" : "Treylеrni ko‘rish"}
                </button>
              </div>
              <div className="mb-5 text-[14px] leading-6 text-[#666]">
                <p>
                  {language === "RU" ? "Краткое описание" : "Qisqacha tavsif"}
                </p>
                <p>{language === "RU" ? "Что-то о курсе" : "Kurs haqida"}</p>
                <p>{language === "RU" ? "Пару фактов" : "Bir nechta fakt"}</p>
              </div>
              <p className="mb-5 text-[14px] font-medium text-[#55A630]">
                {language === "RU"
                  ? "Свободно 2 из 15 мест"
                  : "15 ta joydan 2 tasi bo‘sh"}
              </p>
              <div className="flex flex-col gap-3">
                <button className="w-full rounded-md border border-[#55A630] px-7 py-4 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                  {language === "RU"
                    ? "Зарегистрироваться"
                    : "Ro‘yxatdan o‘tish"}
                </button>
                <Link
                  href="/CourseDetailPage"
                  className="block w-full rounded-md border border-[#55A630] px-7 py-4 text-center font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white"
                >
                  {language === "RU" ? "Подробнее" : "Batafsil"}
                </Link>
              </div>
            </div>
          </article>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-lg bg-white p-5 shadow-[0_2px_15px_rgba(0,0,0,0.08)]">
            <h2 className="mb-4 text-[20px] font-bold text-[#424242]">
              {language === "RU"
                ? "Видео урок: Массаж лица"
                : "Video dars: Yuz massaji"}
            </h2>
            <p className="mb-2 text-[14px] text-[#666]">
              {language === "RU" ? "Краткое описание" : "Qisqacha tavsif"}
            </p>
            <p className="mb-2 text-[14px] text-[#666]">
              {language === "RU" ? "Что-то о курсе" : "Kurs haqida"}
            </p>
            <p className="mb-5 text-[14px] text-[#666]">
              {language === "RU" ? "Пару фактов" : "Bir nechta fakt"}
            </p>
            <button className="rounded-md border border-[#55A630] px-7 py-4 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
              {language === "RU" ? "Купить" : "Sotib olish"}
            </button>
          </article>
          <article className="rounded-lg bg-white p-5 shadow-[0_2px_15px_rgba(0,0,0,0.08)]">
            <h2 className="mb-4 text-[20px] font-bold text-[#424242]">
              {language === "RU"
                ? "Вебинар: Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук и какие существуют альтернативы?"
                : "Vebinar: Bo‘yin, dekolte va qo‘l terisini tuzatishda mezoterapiya dolzarbmi va qanday muqobil usullar mavjud?"}
            </h2>
            <p className="mb-2 text-[14px] text-[#424242]">
              {language === "RU"
                ? "Спикер: Елена Белогурова"
                : "Spiker: Elena Belogurova"}
            </p>
            <p className="mb-5 text-[14px] text-[#424242]">
              {language === "RU"
                ? "Тренер: Марина Спивак"
                : "Trener: Marina Spivak"}
            </p>
            <p className="mb-5 text-[14px] font-medium text-[#55A630]">
              {language === "RU"
                ? "Свободно 2 из 15 мест"
                : "15 ta joydan 2 tasi bo‘sh"}
            </p>
            <button className="rounded-md border border-[#55A630] px-7 py-4 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
              {language === "RU" ? "Купить" : "Sotib olish"}
            </button>
          </article>
        </div>
        <div className="mt-10 flex justify-center gap-4">
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
