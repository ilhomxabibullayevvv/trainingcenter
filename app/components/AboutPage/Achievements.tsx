const achievements = [
  { number: "4000+", text: "Сертификатов мы выдали" },
  { number: "3500+", text: "Моделей в нашей базе" },
  { number: "1500+", text: "Специалистов мы обучили" },
  { number: "5500+", text: "Довольных клиентов" },
];

export default function Achievements() {
  return (
    <section className="py-16 bg-[#ECF9EB]">
      <div className="mx-auto max-w-[1200] px-5">
        <h2 className="text-center mb-10 text-[32px] font-bold text-[#55A630]">
          Наши достижения
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 rounded-lg bg-white p-5 shadow-[-2px_2px_5px_0px_#43566420,-1px_1px_2px_0px_#43464A00]">
          {achievements.map((item) => (
            <div key={item.number}>
              <div className="text-center text-[40px] font-bold text-[#55A630]">
                {item.number}
              </div>
              <p className="text-center mt-2 text-[15px] text-[#424242]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
