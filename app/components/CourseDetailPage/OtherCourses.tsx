const courses = [
  {
    title: "Курс для медиков",
    category: "Канюльные техники",
    type: "Оффлайн",
    date: "1 - 4 мая",
  },
  {
    title: "Мезотерапия и Биоревителизация",
    category: "Курс для медиков",
    type: "Онлайн",
    date: "15 - 20 мая",
  },
  {
    title: "Биогель - новое в косметологии",
    category: "Курс для медиков",
    type: "Мастер-класс",
    date: "2 - 5 августа",
  },
];

export default function OtherCourses() {
  return (
    <section className="py-12">
      <div className="mx-auto w-full max-w-[960] px-5">
        <h2 className="mb-8 text-[30px] font-bold text-[#424242]">
          Как это было в прошлый раз
        </h2>
        <div className="mb-14 h-[300] rounded-lg bg-[#DDE8D7]" />
        <h2 className="mb-8 text-[30px] font-bold text-[#424242]">
          Другие курсы
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {courses.map((course, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-lg bg-white shadow-[0_2px_15px_rgba(0,0,0,0.08)]"
            >
              <div className="relative h-[180] bg-[#DDE8D7]">
                <span className="absolute left-4 top-4 rounded bg-white px-3 py-2 text-[12px] text-[#55A630]">
                  {course.type}
                </span>
              </div>
              <div className="p-5">
                <h3 className="mb-3 text-[18px] font-bold text-[#424242]">
                  {course.title}
                </h3>
                <p className="mb-3 text-[14px] text-[#55A630]">
                  {course.category}
                </p>
                <div className="mb-5 flex justify-between text-[13px] text-[#424242]">
                  <span>{course.date}</span>
                  <button className="text-[#55A630]">Смотреть трейлер</button>
                </div>
                <div className="mb-5 space-y-1 text-[14px] leading-6 text-[#666]">
                  <p>Краткое описание</p>
                  <p>Что-то о курсе</p>
                  <p>Пару фактов</p>
                </div>
                <p className="mb-5 text-[14px] font-medium text-[#55A630]">
                  Свободно 2 из 15 мест
                </p>
                <div className="flex flex-col gap-3">
                  <button className="w-full rounded bg-[#55A630] py-3 text-white">
                    Зарегистрироваться
                  </button>
                  <button className="w-full rounded border border-[#55A630] py-3 text-[#55A630]">
                    Подробнее
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button className="rounded border border-[#55A630] px-8 py-3 text-[#55A630]">
            Смотреть все курсы
          </button>
        </div>
      </div>
    </section>
  );
}
