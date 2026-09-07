export default function CourseHero() {
  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[960] px-5">
        <p className="mb-4 text-[14px] text-[#55A630]">
          Старт курса: 10 января
        </p>
        <h1 className="mb-6 text-[36px] font-bold text-[#424242]">
          Ботулинотерапия для косметологов
        </h1>
        <div className="flex flex-wrap gap-4">
          <button className="rounded bg-[#55A630] px-7 py-3 text-[14px] text-white">
            Зарегистрироваться
          </button>
          <button className="rounded border border-[#55A630] px-7 py-3 text-[14px] text-[#55A630]">
            Узнать подробнее
          </button>
        </div>
      </div>
    </section>
  );
}
