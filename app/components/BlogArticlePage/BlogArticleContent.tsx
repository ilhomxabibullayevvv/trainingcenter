"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function BlogArticleContent() {
  const { language } = useLanguage();

  return (
    <section className="pb-15">
      <div className="mx-auto w-full max-w-[1200]">
        <div className="mx-auto max-w-[850] rounded-lg bg-[#DDE8D7] p-8">
          <div className="space-y-6 text-[16px] leading-7 text-[#424242]">
            <p>
              {language === "RU"
                ? "Можно написать любое количество текста, лирического описания компании."
                : "Bu yerda kompaniya haqida istalgan hajmdagi batafsil va mazmunli matn yozish mumkin."}
            </p>
            <p>
              {language === "RU"
                ? "Ведущий учебный центр эстетической косметологии. Более 5 лет мы проводим сертифицированные курсы профессионального образования в области косметологии и индустрии красоты."
                : "Estetik kosmetologiya bo‘yicha yetakchi o‘quv markazi. 5 yildan ortiq vaqt davomida kosmetologiya va go‘zallik sanoati sohasida sertifikatlangan professional ta’lim kurslarini o‘tkazib kelmoqdamiz."}
            </p>
            <p>
              {language === "RU"
                ? "В данный момент в Харькове нет аналогов нашего учебного центра по уровню подготовки и разнообразию читаемых курсов. Все выпускники нашего учебного центра востребованы в: институтах омоложения и здоровья, Спа-центрах, салонах красоты, частных клиниках и других организация в сфере."
                : "Hozirgi vaqtda Xarkovda tayyorgarlik darajasi va o‘qitiladigan kurslarning xilma-xilligi bo‘yicha bizning o‘quv markazimizga teng keladigan markaz yo‘q. Markazimizning barcha bitiruvchilariga yoshartirish va salomatlik institutlari, SPA-markazlar, go‘zallik salonlari, xususiy klinikalar va boshqa tashkilotlarda talab mavjud."}
            </p>
            <p>
              {language === "RU"
                ? "Мы проводим повышения квалификации, уникальные мастер классы. Курсы косметолог Харьков - это хорошее вложение, инвестиция в будущий заработок специалиста получившего наши документы, окончив обучение, и получив практические знания."
                : "Biz malaka oshirish kurslari va noyob mahorat darslarini o‘tkazamiz. Xarkovdagi kosmetologiya kurslari — bizning hujjatlarimizni olgan, ta’limni tamomlagan va amaliy bilimlarga ega bo‘lgan mutaxassisning kelajakdagi daromadiga yaxshi sarmoyadir."}
            </p>
            <p>
              {language === "RU"
                ? "В данный момент в Харькове нет аналогов нашего учебного центра по уровню подготовки и разнообразию читаемых курсов. Все выпускники нашего учебного центра востребованы в: институтах омоложения и здоровья, Спа-центрах, салонах красоты, частных клиниках и других организация в сфере."
                : "Hozirgi vaqtda Xarkovda tayyorgarlik darajasi va o‘qitiladigan kurslarning xilma-xilligi bo‘yicha bizning o‘quv markazimizga teng keladigan markaz yo‘q. Markazimizning barcha bitiruvchilariga yoshartirish va salomatlik institutlari, SPA-markazlar, go‘zallik salonlari, xususiy klinikalar va boshqa tashkilotlarda talab mavjud."}
            </p>
            <p>
              {language === "RU"
                ? "Мы проводим повышения квалификации, уникальные мастер классы. Курсы косметолог Харьков - это хорошее вложение, инвестиция в будущий заработок специалиста получившего наши документы, окончив обучение, и получив практические знания."
                : "Biz malaka oshirish kurslari va noyob mahorat darslarini o‘tkazamiz. Xarkovdagi kosmetologiya kurslari — bizning hujjatlarimizni olgan, ta’limni tamomlagan va amaliy bilimlarga ega bo‘lgan mutaxassisning kelajakdagi daromadiga yaxshi sarmoyadir."}
            </p>
          </div>
        </div>
        <div className="mt-15 flex justify-center">
          <button className="text-[14px] font-medium text-[#55A630]">
            {language === "RU"
              ? "Вернуться ко всем статьям"
              : "Barcha maqolalarga qaytish"}
          </button>
        </div>
      </div>
    </section>
  );
}
