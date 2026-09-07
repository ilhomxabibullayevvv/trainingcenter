import Link from "next/link";

export default function Courses() {
  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[960] px-5">
        <div className="mb-8">
          <h1 className="mb-3 text-[32px] font-bold text-[#424242] text-center">
            КУРСЫ ОБУЧЕНИЯ
          </h1>
          <p className="text-[14px] text-[#55A630] text-center">
            - курсы с возможностью ранней регистрации
          </p>
        </div>
        <div className="mb-10">
          <div className="mb-5 flex flex-wrap ">
            <button className="rounded border border-[#C7F8C2] px-13 py-3 text-[14px] text-[#55A630] hover:bg-[#C7F8C2] hover:text-[#424242]">
              Все направления
            </button>
            <button className="rounded border border-[#C7F8C2] px-13 py-3 text-[14px] text-[#55A630] hover:bg-[#C7F8C2] hover:text-[#424242]">
              Курсы по косметологии
            </button>
            <button className="rounded border border-[#C7F8C2] px-13 py-3 text-[14px] text-[#55A630] hover:bg-[#C7F8C2] hover:text-[#424242]">
              Онлайн обучение
            </button>
            <button className="rounded border border-[#C7F8C2] px-13 py-3 text-[14px] text-[#55A630] hover:bg-[#C7F8C2] hover:text-[#424242]">
              Мастер-классы
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-lg bg-white shadow-[0_2px_15px_rgba(0,0,0,0.08)]">
            <div className="relative h-[220] bg-[#DDE8D7]">
              <span className="absolute left-4 top-4 rounded bg-white px-3 py-2 text-[12px] text-[#55A630]">
                Оффлайн
              </span>
            </div>
            <div className="p-5">
              <h2 className="mb-3 text-[22px] font-bold text-[#424242]">
                Курс для медиков
              </h2>
              <p className="mb-3 text-[14px] text-[#55A630]">
                Канюльные техники
              </p>
              <div className="mb-4 flex justify-between text-[13px] text-[#424242]">
                <span>1 - 4 мая</span>
                <button className="text-[#55A630]">Смотреть трейлер</button>
              </div>
              <div className="mb-5 text-[14px] leading-6 text-[#666]">
                <p>Краткое описание</p>
                <p>Что-то о курсе</p>
                <p>Пару фактов</p>
              </div>
              <p className="mb-5 text-[14px] font-medium text-[#55A630]">
                Свободно 2 из 15 мест
              </p>
              <div className="flex flex-col gap-3">
                <button className="w-full rounded-md border border-[#55A630] px-7 py-4 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                  Зарегистрироваться
                </button>
                <Link
                  href="/CourseDetailPage"
                  className="block w-full text-center rounded-md border border-[#55A630] px-7 py-4 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg bg-white shadow-[0_2px_15px_rgba(0,0,0,0.08)]">
            <div className="relative h-[220] bg-[#DDE8D7]">
              <span className="absolute left-4 top-4 rounded bg-white px-3 py-2 text-[12px] text-[#55A630]">
                Онлайн
              </span>
            </div>
            <div className="p-5">
              <h2 className="mb-3 text-[22px] font-bold text-[#424242]">
                Мезотерапия и Биоревителизация
              </h2>
              <p className="mb-3 text-[14px] text-[#55A630]">
                Курс для медиков
              </p>
              <div className="mb-4 flex justify-between text-[13px] text-[#424242]">
                <span>15 - 20 мая</span>
                <button className="text-[#55A630]">Смотреть трейлер</button>
              </div>
              <div className="mb-5 text-[14px] leading-6 text-[#666]">
                <p>Краткое описание</p>
                <p>Что-то о курсе</p>
                <p>Пару фактов</p>
              </div>
              <p className="mb-5 text-[14px] font-medium text-[#55A630]">
                Свободно 2 из 15 мест
              </p>
              <div className="flex flex-col gap-3">
                <button className="w-full rounded-md border border-[#55A630] px-7 py-4 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                  Зарегистрироваться
                </button>
                <Link
                  href="/CourseDetailPage"
                  className="block w-full text-center rounded-md border border-[#55A630] px-7 py-4 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg bg-white shadow-[0_2px_15px_rgba(0,0,0,0.08)]">
            <div className="relative h-[220] bg-[#DDE8D7]">
              <span className="absolute left-4 top-4 rounded bg-white px-3 py-2 text-[12px] text-[#55A630]">
                Мастер-класс
              </span>
            </div>
            <div className="p-5">
              <h2 className="mb-3 text-[22px] font-bold text-[#424242]">
                Биогель - новое в косметологии
              </h2>
              <p className="mb-3 text-[14px] text-[#55A630]">
                Курс для медиков
              </p>
              <div className="mb-4 flex justify-between text-[13px] text-[#424242]">
                <span>2 - 5 августа</span>
                <button className="text-[#55A630]">Смотреть трейлер</button>
              </div>
              <div className="mb-5 text-[14px] leading-6 text-[#666]">
                <p>Краткое описание</p>
                <p>Что-то о курсе</p>
                <p>Пару фактов</p>
              </div>
              <p className="mb-5 text-[14px] font-medium text-[#55A630]">
                Свободно 2 из 15 мест
              </p>
              <div className="flex flex-col gap-3">
                <button className="w-full rounded-md border border-[#55A630] px-7 py-4 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                  Зарегистрироваться
                </button>
                <Link
                  href="/CourseDetailPage"
                  className="block w-full text-center rounded-md border border-[#55A630] px-7 py-4 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </article>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-lg bg-white p-5 shadow-[0_2px_15px_rgba(0,0,0,0.08)]">
            <h2 className="mb-4 text-[20px] font-bold text-[#424242]">
              Видео урок: Массаж лица
            </h2>
            <p className="mb-2 text-[14px] text-[#666]">Краткое описание</p>
            <p className="mb-2 text-[14px] text-[#666]">Что-то о курсе</p>
            <p className="mb-5 text-[14px] text-[#666]">Пару фактов</p>
            <button className="rounded-md border border-[#55A630] px-7 py-4 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
              Купить
            </button>
          </article>
          <article className="rounded-lg bg-white p-5 shadow-[0_2px_15px_rgba(0,0,0,0.08)]">
            <h2 className="mb-4 text-[20px] font-bold text-[#424242]">
              Вебинар: Актуальна ли мезотерапия в коррекции шеи, декольте,
              кистей рук и какие существуют альтернативы?
            </h2>
            <p className="mb-2 text-[14px] text-[#424242]">
              Спикер: Елена Белогурова
            </p>
            <p className="mb-5 text-[14px] text-[#424242]">
              Тренер: Марина Спивак
            </p>
            <p className="mb-5 text-[14px] font-medium text-[#55A630]">
              Свободно 2 из 15 мест
            </p>
            <button className="rounded-md border border-[#55A630] px-7 py-4 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
              Купить
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
