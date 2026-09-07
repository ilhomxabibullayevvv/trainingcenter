const items = [
  {
    title: "Преподаватели",
    text: "Наши преподаватели имеют многолетний опыт в сфере косметологии и совмещают преподавательскую деятельность с практической работой.",
  },
  {
    title: "Сертификаты",
    text: "Удостоверение, сертификат и свидетельство полученные у нас по окончанию курсов работают как лучшая рекомендация при приеме на работу.",
  },
  {
    title: "Повышение квалификации",
    text: "Ежегодно больше 2000 косметологов повышают квалификацию и уровень профессионализма.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200] px-5">
        <h2 className="mb-15 text-center text-3xl font-bold text-[#424242]">
          Почему мы
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="h-[315] max-w-[380.95px] p-[50] shadow-[-2px_2px_20px_0px_#42424226] hover:bg-[#B7ECB1]"
            >
              <h3 className="mb-4 max-w-[334.91px] text-xl font-bold text-[#424242]">
                {item.title}
              </h3>
              <p className="leading-7 text-[#666]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
