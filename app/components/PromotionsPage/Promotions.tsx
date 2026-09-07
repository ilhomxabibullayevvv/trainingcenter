import Image from "next/image";
import Link from "next/link";

export default function Promotions() {
  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1200]">
        <h1 className="mb-10 text-center text-[32px] font-bold text-[#424242]">
          Акционные предложения
        </h1>
        <div className="overflow-hidden rounded-lg bg-white">
          <div className="w-full">
            <Image
              src="/rectangle4.png"
              alt="Акция 2+1 в честь Черной пятницы"
              width={1438}
              height={415}
              className="h-auto w-full object-cover mb-[15]"
            />
          </div>
          <div className="">
            <h2 className="text-right mb-3 text-[14px] font-medium text-[#424242]">
              Акция 2+1 в честь Черной пятницы
            </h2>
            <div className="flex justify-end">
              <Link
                href="/SpecialOffersPage"
                className="text-[14px] font-medium text-[#478F29]"
              >
                Подробнее про акцию
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
