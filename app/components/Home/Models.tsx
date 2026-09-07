import Image from "next/image";

export default function Models() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-[1200] gap-10 px-5 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="mb-8 text-3xl font-bold text-[#55A630]">
            ВЕДЕМ НАБОР МОДЕЛЕЙ
          </h2>
          <p className="mb-4 leading-7 text-[#666]">
            Мы предлагаем свои услуги для моделей.
          </p>
          <p className="mb-8 leading-7 text-[#666]">
            Выберите процедуру или несколько процедур и наш менеджер
            проконсультирует вас и назовет ближайшую дату, когда вы сможете
            получить эту процедуру.
          </p>
          <button className="rounded-md border border-[#55A630] px-30 py-4 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
            Стать моделью
          </button>
        </div>
        <Image
          src="/rectangle2.jpg"
          alt="Профессия косметолог"
          width={498}
          height={459}
          className=""
        />
      </div>
    </section>
  );
}
