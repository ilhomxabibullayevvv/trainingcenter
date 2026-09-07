import Image from "next/image";

const items = [
  {
    title: "Удобный формат обучения",
    text: "Мы стараемся для вас и делаем обучение еще комфортнее!\n\nУ нас вы можете обучаться в формате оффлайн или выбирать онлайн формат обучения. Наши мастер-классы дублируются в двух форматах.",
    image: "/rectangle14.jpg",
  },
  {
    title: "Светлые аудитории",
    text: "Мы стараемся для вас и делаем обучение еще комфортнее.\n\nУ нас вы можете обучаться в формате оффлайн или выбирать онлайн формат обучения. Наши мастер-классы дублируются в двух форматах.",
    image: "/rectangle15.jpg",
  },
  {
    title: "Обучение в маленьких группах",
    text: "Мы стараемся для вас и делаем обучение еще комфортнее!\n\nУ нас вы можете обучаться в формате оффлайн или выбирать онлайн формат обучения. Наши мастер-классы дублируются в двух форматах.",
    image: "/rectangle16.jpg",
  },
];

export default function ComfortTraining() {
  return (
    <section className="py-10 md:py-16">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <h2 className="text-center mb-15 text-[28px] font-bold text-[#55A630] md: md:text-[32px]">
          Мы - это обучение с комфортом
        </h2>
        <div className="space-y-10 md:space-y-14">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="relative h-[280] w-full md:h-[350]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h3 className="mb-5 text-[22px] font-bold leading-7 text-[#424242] md:text-[24px]">
                  {item.title}
                </h3>

                <div className="whitespace-pre-line text-[15px] leading-6 text-[#424242] md:text-[16px] md:leading-7">
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
