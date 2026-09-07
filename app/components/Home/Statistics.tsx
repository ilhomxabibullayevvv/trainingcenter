const statistics = [
  ["4000+", "Сертификатов мы выдали"],
  ["3500+", "Моделей в нашей базе"],
  ["1500+", "Специалистов мы обучили"],
  ["5500+", "Довольных клиентов"],
];

export default function Statistics() {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-[1200] p-[50] grid-cols-2 gap-8 px-5 md:grid-cols-4 shadow-[-2px_2px_20px_0px_#42424226]">
        {statistics.map(([number, text]) => (
          <div key={number} className="text-center">
            <div className="mb-2 text-4xl font-bold text-[#55A630]">
              {number}
            </div>
            <p className="text-sm leading-6 text-[#424242]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
