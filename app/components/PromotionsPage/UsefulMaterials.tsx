import Image from "next/image";

export default function UsefulMaterials() {
  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <h1 className="mb-30 text-center text-[32px] font-bold text-[#424242]">
          Полезные материалы
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <article className="overflow-hidden rounded-lg bg-white">
            <Image
              src="/rectangle12.jpg"
              alt="Полезные материалы"
              width={367.0008239746094}
              height={242}
              className="h-[200] w-full object-cover"
            />
            <div className="p-5">
              <h3 className="mb-6 text-[16px] font-medium leading-6 text-[#424242]">
                Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук и
                какие существуют альтернативы?
              </h3>
              <h3 className="text-right text-[14px] font-medium text-[#55A630]">
                Читать полностью
              </h3>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg bg-white">
            <Image
              src="/rectangle12.jpg"
              alt="Полезные материалы"
              width={380}
              height={200}
              className="h-[200] w-full object-cover"
            />
            <div className="p-5">
              <h3 className="mb-6 text-[16px] font-medium leading-6 text-[#424242]">
                Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук и
                какие существуют альтернативы?
              </h3>
              <h2 className="text-right text-[14px] font-medium text-[#55A630]">
                Читать полностью
              </h2>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg bg-white">
            <Image
              src="/rectangle12.jpg"
              alt="Полезные материалы"
              width={380}
              height={200}
              className="h-[200] w-full object-cover"
            />
            <div className="p-5">
              <h3 className="mb-6 text-[16px] font-medium leading-6 text-[#424242]">
                Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук и
                какие существуют альтернативы?
              </h3>
              <h3 className="text-right text-[14px] font-medium text-[#55A630]">
                Читать полностью
              </h3>
            </div>
          </article>
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
