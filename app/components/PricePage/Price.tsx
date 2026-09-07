export default function PriceTable() {
  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <h1 className="mb-10 text-center text-[32px] font-bold text-[#424242]">
          Стоимость обучения
        </h1>
        <div className="overflow-x-auto bg-[#F8F8F8]">
          <table className="w-full min-w-[700] border-collapse text-[13px] text-[#424242]">
            <thead>
              <tr className="border-b border-[#D9D9D9] text-left">
                <th className="px-3 py-4 font-medium">Курс обучения</th>
                <th className="px-3 py-4 text-center font-medium">Дни</th>
                <th className="px-3 py-4 text-center font-medium">Часы</th>
                <th className="px-3 py-4 text-center font-medium">
                  Ранняя регистрация
                </th>
                <th className="px-3 py-4 text-center font-medium">
                  Поздняя регистрация
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E5E5E5]">
                <td className="px-3 py-4 font-bold text-[#424242]">
                  1.0&nbsp;&nbsp; Мезотерапия в эстетической косметологии
                </td>
                <td className="px-3 py-4 text-center font-bold">5</td>
                <td className="px-3 py-4 text-center font-bold">40</td>
                <td className="px-3 py-4 text-center font-bold">10800 грн</td>
                <td className="px-3 py-4 text-center font-bold">14700 грн</td>
              </tr>
              <tr className="border-b border-[#E5E5E5]">
                <td className="px-3 py-3 pl-8">
                  1.1&nbsp;&nbsp; Техники мезотерапии
                </td>
                <td className="px-3 py-3 text-center">1</td>
                <td className="px-3 py-3 text-center">8</td>
                <td className="px-3 py-3 text-center">2900 грн</td>
                <td className="px-3 py-3 text-center">3950 грн</td>
              </tr>
              <tr className="border-b border-[#E5E5E5]">
                <td className="px-3 py-3 pl-8">
                  1.2&nbsp;&nbsp; Мезотерапия лица
                </td>
                <td className="px-3 py-3 text-center">1</td>
                <td className="px-3 py-3 text-center">8</td>
                <td className="px-3 py-3 text-center">2900 грн</td>
                <td className="px-3 py-3 text-center">3950 грн</td>
              </tr>
              <tr className="border-b border-[#E5E5E5]">
                <td className="px-3 py-3 pl-8">
                  1.3&nbsp;&nbsp; Липоскульптура тела
                </td>
                <td className="px-3 py-3 text-center">1</td>
                <td className="px-3 py-3 text-center">8</td>
                <td className="px-3 py-3 text-center">2900 грн</td>
                <td className="px-3 py-3 text-center">3950 грн</td>
              </tr>
              <tr className="border-b border-[#E5E5E5]">
                <td className="px-3 py-3 pl-8">
                  1.4&nbsp;&nbsp; Мезотерапия в трихологии
                </td>
                <td className="px-3 py-3 text-center">1</td>
                <td className="px-3 py-3 text-center">8</td>
                <td className="px-3 py-3 text-center">2900 грн</td>
                <td className="px-3 py-3 text-center">3950 грн</td>
              </tr>
              <tr className="border-b border-[#E5E5E5]">
                <td className="px-3 py-3 pl-8">
                  1.5&nbsp;&nbsp; Биоревитализация
                </td>
                <td className="px-3 py-3 text-center">1</td>
                <td className="px-3 py-3 text-center">8</td>
                <td className="px-3 py-3 text-center">2900 грн</td>
                <td className="px-3 py-3 text-center">3950 грн</td>
              </tr>
              <tr className="border-b border-[#E5E5E5]">
                <td className="px-3 py-4 font-bold text-[#424242]">
                  2.0&nbsp;&nbsp; Контурная пластика иглой
                </td>
                <td className="px-3 py-4 text-center font-bold">2</td>
                <td className="px-3 py-4 text-center font-bold">16</td>
                <td className="px-3 py-4 text-center font-bold">7900 грн</td>
                <td className="px-3 py-4 text-center font-bold">11900 грн</td>
              </tr>
              <tr className="border-b border-[#E5E5E5]">
                <td className="px-3 py-3 pl-8">
                  2.1&nbsp;&nbsp; Базовый уровень
                </td>
                <td className="px-3 py-3 text-center">1</td>
                <td className="px-3 py-3 text-center">8</td>
                <td className="px-3 py-3 text-center">4500 грн</td>
                <td className="px-3 py-3 text-center">6450 грн</td>
              </tr>
              <tr className="border-b border-[#E5E5E5]">
                <td className="px-3 py-3 pl-8">
                  2.2&nbsp;&nbsp; Моделирование губ
                </td>
                <td className="px-3 py-3 text-center">1</td>
                <td className="px-3 py-3 text-center">8</td>
                <td className="px-3 py-3 text-center">4500 грн</td>
                <td className="px-3 py-3 text-center">6450 грн</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 bg-[#ECF9EB] p-1 text-center text-[13px] text-[#666]">
          * Вы можете пройти обучение полностью или выбрать 1-й или 2-й день
        </p>
      </div>
    </section>
  );
}
