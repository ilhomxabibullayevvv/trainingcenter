export default function Trainer() {
  return (
    <section className="py-12">
      <div className="mx-auto w-full max-w-[1200] px-5">
        <h2 className="mb-8 text-[30px] font-bold text-[#424242]">Тренер</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="h-[400] rounded-lg bg-[#DDE8D7]" />
          <div>
            <h3 className="mb-5 text-[26px] font-bold text-[#55A630]">
              Марина Спивак
            </h3>
            <ul className="space-y-3 text-[15px] leading-6 text-[#424242]">
              <li>— врач дерматовенеролог</li>
              <li>
                — соосновательница центра эстетической косметологии ValMari
              </li>
              <li>— ведущий специалист косметолог-инъекционист</li>
              <li>— главный тренер учебного центра ValMari</li>
              <li>— более 10 лет опыта работы врачом-инъекционистом</li>
              <li>— более 8-ми лет опыта работы тренером</li>
              <li>— в 2016 году вошла в пятерку лучших косметологов Украины</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
