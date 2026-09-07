const theory = [
  "Виды токсинов на рынке. Преимущества и особенности",
  "Показания, противопоказания применения для разных возрастов, в зависимости от особенностей строения лица",
  "Показания к применению БТА в зависимости от анатомических и физиологических особенностей",
  "Анатомия лица по зонам. Геометрия точек и дозы для безопасного введения БТА",
  "Созависимость возраста и доз",
  "Техники разведения на разные виды токсинов",
  "Все виды осложнений и методы их коррекции",
  "Условия хранения БТА",
];

const practice = [
  "Геометрия точек",
  "Техники разведения БТА",
  "Постановка руки",
  "Самостоятельные инъекции под чутким руководством тренера",
];

export default function CourseProgram() {
  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[960] px-5">
        <h2 className="mb-8 text-[30px] font-bold text-[#424242]">
          Программа курса
        </h2>
        <div className="mb-10">
          <h3 className="mb-3 text-[22px] font-bold text-[#424242]">1 день</h3>
          <p className="mb-7 text-[15px] leading-7 text-[#424242]">
            Тема: Коррекция ботулотоксином типа А (БТА) верхней и средней трети
            лица
          </p>
          <h4 className="mb-5 text-[20px] font-bold text-[#55A630]">Теория</h4>
          <div className="space-y-5">
            {theory.map((item, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-[18px] font-bold text-[#55A630]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-6 text-[#424242]">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-10">
          <h4 className="mb-5 text-[20px] font-bold text-[#55A630]">
            Практика
          </h4>
          <div className="space-y-5">
            {practice.map((item, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-[18px] font-bold text-[#55A630]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-6 text-[#424242]">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-[22px] font-bold text-[#424242]">2 день</h3>
          <p className="text-[15px] leading-7 text-[#424242]">
            Тема: Коррекция нижней трети лица, особенности лечения гипергидроза,
            понятие техники мезоботокса
          </p>
        </div>
      </div>
    </section>
  );
}
