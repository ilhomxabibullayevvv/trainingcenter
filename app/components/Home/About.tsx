import Image from "next/image";

export default function About() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-[1200] gap-10 px-5 md:grid-cols-2 md:items-center">
        <Image
          src="/rectangle.jpg"
          alt="Профессия косметолог"
          width={590}
          height={666}
          className=""
        />
        <div>
          <p className="mb-3 text-sm font-medium text-[#858585]">О нас</p>
          <h2 className="text-3xl font-bold leading-tight text-[#55A630]">
            VALMARI
          </h2>
          <h2 className="max-w-[452] mb-6 text-3xl font-bold leading-tight text-[#424242]">
            ВЕДУЩИЙ УЧЕБНЫЙ ЦЕНТР ЭСТЕТИЧЕСКОЙ КОСМЕТОЛОГИИ
          </h2>
          <p className="max-w-[452] mb-5 leading-7 text-[#666]">
            Описание может быть любое. Ведущий учебный центр эстетической
            косметологии.
          </p>
          <p className="max-w-[452] mb-8 leading-7 text-[#666]">
            Более 5 лет мы проводим сертифицированные курсы профессионального
            образования в области косметологии и индустрии красоты, здоровья и
            молодости.
          </p>
          <h2 className="text-right text-[#55A630]">Подробнее</h2>
        </div>
      </div>
    </section>
  );
}
