import Image from "next/image";

export default function VideoLessons() {
  return (
    <>
      <section className="py-10">
        <div className="mx-auto w-full max-w-[1200] px-5">
          <p className="text-center mb-10 text-[28px] font-medium text-[#424242]">
            ВИДЕО-УРОК
          </p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-[14px] text-[#55A630]">
                Спикер: Марина Спивак
              </p>
              <h1 className="mb-15 max-w-[466] text-[28px] font-bold leading-9 text-[#424242]">
                Как безопасно работать
                <br />в зоне носослезной борозды канюлей?
              </h1>
              <p className="mb-5 text-[16px] text-[#55A630]">
                Стоимость: 500 грн
              </p>
              <button className="w-fit rounded-md border border-[#55A630] px-23 py-2 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                Купить
              </button>
            </div>
            <div className="relative h-[350] overflow-hidden rounded-lg">
              <Image
                src="/rectangle11.jpg"
                alt="Видео-урок"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto w-full max-w-[1200] px-5">
          <h2 className="text-center mb-15 text-[28px] font-bold text-[#424242]">
            Другие видео-уроки
          </h2>
          <div className="grid grid-cols-1 gap-50 md:grid-cols-2">
            <article className="overflow-hidden rounded-lg">
              <div className="relative w-[487] h-[333]">
                <Image
                  src="/rectangle2.png"
                  alt="Видео-урок"
                  fill
                  className="object-cover pb-[30]"
                />
              </div>
              <div className="">
                <h3 className="mb-10 max-w-[308] text-[16px] font-medium leading-6 text-[#424242]">
                  Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук
                  и какие существуют альтернативы?
                </h3>
                <button className="w-fit rounded-md border border-[#55A630] px-25 py-2 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                  Купить
                </button>
              </div>
            </article>
            <article className="overflow-hidden rounded-lg">
              <div className="relative w-[487] h-[333]">
                <Image
                  src="/rectangle2.png"
                  alt="Видео-урок"
                  fill
                  className="object-cover pb-[30]"
                />
              </div>
              <div className="">
                <h3 className="mb-10 max-w-[308] text-[16px] font-medium leading-6 text-[#424242]">
                  Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук
                  и какие существуют альтернативы?
                </h3>
                <button className="w-fit rounded-md border border-[#55A630] px-25 py-2 font-medium text-[#55A630] transition hover:bg-[#55A630] hover:text-white">
                  Купить
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
