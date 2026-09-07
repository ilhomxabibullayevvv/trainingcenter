import Image from "next/image";

const trainers = [
  {
    name: "Марина Спивак",
    position: "Главный тренер",
    image: "/rectangle17.jpg",
  },
  {
    name: "Елена Белогурова",
    position: "Тренер",
    image: "/rectangle18.jpg",
  },
  {
    name: "Алина Ядчишина",
    position: "Тренер",
    image: "/rectangle19.jpg",
  },
  {
    name: "Юлия Щукина",
    position: "Руководитель сети клиник LAZERINI",
    image: "/rectangle20.jpg",
  },
];

export default function Trainers() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1200] px-5">
        <h2 className="mb-10 text-center text-[32px] font-bold text-[#424242]">
          Наши тренера
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="mx-auto w-full max-w-[285]">
              <div className="relative mb-4 h-[380] w-full overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[18px] font-bold text-[#424242]">
                {trainer.name}
              </h3>
              <p className="mt-2 text-[14px] text-[#424242]">
                {trainer.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
