"use client";

import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function Schedule() {
  const { language } = useLanguage();

  const [currentDate, setCurrentDate] = useState(new Date(2020, 10, 1));

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const today = () => {
    setCurrentDate(new Date(2020, 10, 1));
  };

  const monthNamesRU = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];

  const monthNamesUZ = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentabr",
    "oktabr",
    "noyabr",
    "dekabr",
  ];

  const weekDaysRU = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const weekDaysUZ = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"];

  const monthName =
    language === "RU"
      ? monthNamesRU[currentDate.getMonth()]
      : monthNamesUZ[currentDate.getMonth()];

  const weekDays = language === "RU" ? weekDaysRU : weekDaysUZ;

  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  );

  let startDay = firstDay.getDay();

  if (startDay === 0) {
    startDay = 6;
  } else {
    startDay = startDay - 1;
  }

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();

  const previousMonthDays = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0,
  ).getDate();

  const calendarDays = [];

  for (let i = startDay - 1; i >= 0; i--) {
    calendarDays.push({
      day: previousMonthDays - i,
      currentMonth: false,
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({
      day: i,
      currentMonth: true,
    });
  }

  let nextDay = 1;

  while (calendarDays.length < 42) {
    calendarDays.push({
      day: nextDay,
      currentMonth: false,
    });

    nextDay++;
  }

  const events: {
    day: number;
    title: string;
  }[] =
    currentDate.getFullYear() === 2020 && currentDate.getMonth() === 10
      ? [
          {
            day: 1,
            title: "Эстетическая косметология - улица Клочковская, 3",
          },
          {
            day: 2,
            title: "Мезотерапия. - г. Харьков",
          },
          {
            day: 3,
            title: "Мезотерапия. - г. Харьков",
          },
          {
            day: 4,
            title: "Лазерная шлифовка кожи, постакне",
          },
          {
            day: 5,
            title: "Аппаратная косметология",
          },
          {
            day: 6,
            title: "Биоревитализация",
          },
          {
            day: 9,
            title: "Эстетическая косметология - улица Клочковская, 3",
          },
          {
            day: 9,
            title: "Контурная пластика",
          },
          {
            day: 10,
            title: "Лазерная эпиляция диодным лазером",
          },
          {
            day: 11,
            title: "Мастер-класс",
          },
          {
            day: 12,
            title: "Ботулинотерапия",
          },
          {
            day: 13,
            title: "Биоревитализация",
          },
          {
            day: 16,
            title: "Эстетическая косметология - улица Клочковская, 3",
          },
          {
            day: 16,
            title: "Контурная пластика",
          },
          {
            day: 17,
            title: "Контурная пластика",
          },
          {
            day: 18,
            title: "Ботулинотерапия",
          },
          {
            day: 19,
            title: "Ботулинотерапия",
          },
          {
            day: 20,
            title: "Мастер-класс",
          },
          {
            day: 23,
            title: "Эстетическая косметология",
          },
          {
            day: 23,
            title: "Биоармирование",
          },
          {
            day: 24,
            title: "Канюльная техника",
          },
          {
            day: 25,
            title: "Канюльная техника",
          },
          {
            day: 26,
            title: "Канюльная техника",
          },
          {
            day: 27,
            title: "Мк Поверхностные",
          },
          {
            day: 28,
            title: "Интимная контурная пластика",
          },
          {
            day: 30,
            title: "Лазерный пилинг, удаление тату/татуаж",
          },
        ]
      : [];

  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1200] px-4 sm:px-5">
        <h1 className="mb-[40] text-center text-[26px] font-bold text-[#424242] sm:mb-[60] sm:text-[32px]">
          {language === "RU" ? "Расписание" : "Dars jadvali"}
        </h1>
        <div className="mb-8 flex flex-wrap">
          <button
            type="button"
            className="w-1/2 rounded-md border border-[#D4D8DB] px-3 py-3 text-[14px] font-medium text-[#1C1E23] transition hover:bg-[#B7ECB1] sm:w-auto sm:px-[80] sm:py-4"
          >
            {language === "RU" ? "Курсы обучения" : "Ta’lim kurslari"}
          </button>
          <button
            type="button"
            className="w-1/2 rounded-md border border-[#D4D8DB] px-3 py-3 text-[14px] font-medium text-[#1C1E23] transition hover:bg-[#B7ECB1] sm:w-auto sm:px-[80] sm:py-4"
          >
            {language === "RU" ? "Вебинары" : "Vebinarlar"}
          </button>
        </div>
        <div className="mb-8 flex flex-wrap">
          {[
            ["Харьков", "Xarkov"],
            ["Полтава", "Poltava"],
            ["Днепр", "Dnipro"],
            ["Львов", "Lvov"],
            ["Херсон", "Xerson"],
            ["Сумы", "Sumi"],
          ].map(([ru, uz]) => (
            <button
              key={ru}
              type="button"
              className="w-1/2 rounded-md border border-[#D4D8DB] px-3 py-3 text-[14px] font-medium text-[#1C1E23] transition hover:bg-[#B7ECB1] sm:w-auto sm:px-[72] sm:py-4"
            >
              {language === "RU" ? ru : uz}
            </button>
          ))}
        </div>
        <div className="w-full overflow-x-auto">
          <div className="min-w-[900] overflow-hidden rounded-md border border-[#D4D8DB] bg-white">
            <div className="flex items-center justify-between border-b border-[#D4D8DB] bg-[#eeeaff] px-2 py-1">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={today}
                  className="rounded border border-[#D4D8DB] bg-white px-3 py-1 text-[13px] text-[#424242]"
                >
                  {language === "RU" ? "Сегодня" : "Bugun"}
                </button>
                <button
                  type="button"
                  onClick={previousMonth}
                  className="rounded bg-[#6f8ee8] px-3 py-1 text-white transition hover:opacity-80"
                >
                  ◀
                </button>
                <button
                  type="button"
                  onClick={nextMonth}
                  className="rounded bg-[#6f8ee8] px-3 py-1 text-white transition hover:opacity-80"
                >
                  ▶
                </button>
              </div>
              <div className="text-[18px] font-bold text-[#424242]">
                {monthName} {currentDate.getFullYear()}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="px-2 text-[14px] text-[#55A630]"
                >
                  {language === "RU" ? "Неделя" : "Hafta"}
                </button>
                <button
                  type="button"
                  className="bg-white px-2 py-1 text-[14px] font-bold text-[#424242]"
                >
                  {language === "RU" ? "Месяц" : "Oy"}
                </button>
                <button
                  type="button"
                  className="px-2 text-[14px] text-[#55A630]"
                >
                  {language === "RU" ? "Расписание" : "Jadval"}
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 border-b border-[#D4D8DB] bg-[#f5f7ff]">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="border-r border-[#D4D8DB] py-2 text-center text-[13px] font-medium text-[#3030b0]"
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {calendarDays.map((date, index) => {
                const dayEvents = date.currentMonth
                  ? events.filter((event) => event.day === date.day)
                  : [];
                return (
                  <div
                    key={index}
                    className={`relative min-h-[115] border-b border-r border-[#D4D8DB] p-1 ${
                      date.currentMonth ? "bg-white" : "bg-[#f8f8fb]"
                    }`}
                  >
                    <div
                      className={`mb-1 text-right text-[13px] ${
                        date.currentMonth ? "text-[#555]" : "text-[#aaa]"
                      }`}
                    >
                      {date.day}
                    </div>
                    <div className="space-y-1">
                      {dayEvents.map((event, eventIndex) => (
                        <button
                          key={eventIndex}
                          type="button"
                          className="block w-full overflow-hidden rounded-[5px] border border-[#3caaa0] bg-[#59b9ae] px-1 py-[2] text-left text-[13px] leading-5 text-white transition hover:bg-[#478F29]"
                          title={event.title}
                        >
                          <span className="block truncate">{event.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
