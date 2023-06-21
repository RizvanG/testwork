import React, { useEffect, useState } from "react";
import * as xlsx from "xlsx";
import TabContent from "./TabContent";
import style from "./Status.module.css";

export default function Status() {
  const [value, setValue] = useState(2);

  const tabs = [
    {
      id: 1,
      title: "Прошлая неделя",
    },
    {
      id: 2,
      title: "Текущая неделя",
    },
    {
      id: 3,
      title: "Следующая неделя",
    },
  ];

  const prevWeek = [
    {
      name: "Задача 1",
      calories: 12,
      fat: "Выполнено",
      carbs: 37,
      protein: 4,
    },
    {
      name: "Задача 2",
      calories: 5,
      fat: "Выполнено",
      carbs: 24,
      protein: 4,
    },
    {
      name: "Задача 3",
      calories: 23,
      fat: "В процессе",
      carbs: 24,
      protein: 6,
    },
    {
      name: "Задача 4",
      calories: 7,
      fat: "В процессе",
      carbs: 67,
      protein: 4,
    },
    {
      name: "Задача 5",
      calories: 51,
      fat: "Выполнено",
      carbs: 49,
      protein: 3,
    },
  ];

  const currentWeek = [
    {
      name: "Задача 6",
      calories: 12,
      fat: "В процессе",
      carbs: 37,
      protein: 4,
    },
    {
      name: "Задача 7",
      calories: 5,
      fat: "В процессе",
      carbs: 24,
      protein: 4,
    },
    {
      name: "Задача 8",
      calories: 23,
      fat: "В процессе",
      carbs: 24,
      protein: 6,
    },
    {
      name: "Задача 9",
      calories: 7,
      fat: "В процессе",
      carbs: 67,
      protein: 4,
    },
    {
      name: "Задача 10",
      calories: 51,
      fat: "В процессе",
      carbs: 49,
      protein: 3,
    },
  ];

  const nextWeek = [
    {
      name: "Задача 11",
      calories: 12,
      fat: "Не активно",
      carbs: 37,
      protein: 4,
    },
    {
      name: "Задача 12",
      calories: 5,
      fat: "Не активно",
      carbs: 24,
      protein: 4,
    },
    {
      name: "Задача 13",
      calories: 23,
      fat: "Не активно",
      carbs: 24,
      protein: 6,
    },
    {
      name: "Задача 14",
      calories: 7,
      fat: "Не активно",
      carbs: 67,
      protein: 4,
    },
    {
      name: "Задача 15",
      calories: 51,
      fat: "Не активно",
      carbs: 49,
      protein: 3,
    },
  ];

  function handleChange(e) {
    setValue(e.target.id);
  }

  function handleClickExport() {
    let ws =
      value == 1
        ? xlsx.utils.json_to_sheet(prevWeek)
        : value == 2
        ? xlsx.utils.json_to_sheet(currentWeek)
        : xlsx.utils.json_to_sheet(nextWeek);
        xlsx.utils.sheet_add_aoa(ws, [["Задача", "Время", "Статус", "Значение", "Осталось"]], {origin: "A1"});
    let wb = xlsx.utils.book_new()
    xlsx.utils.book_append_sheet(wb, ws, "MySheet1");
    xlsx.writeFile(wb, "MyExcel.xlsx");
  }

  return (
    <div className={style.status}>
      <div className={style.status_title}>Список задач</div>
      <div className={style.status_body}>
        <div className={style.status_nav}>
          {tabs.map((tab, index) => (
            <div
              className={style.status_tab}
              key={index}
              id={tab.id}
              onClick={handleChange}
            >
              {tab.title}
            </div>
          ))}
          <div className={style.status_btn} onClick={handleClickExport}>
            Скачать
          </div>
        </div>
        <div className={style.status_tab_content}>
          {value == 1 ? (
            <TabContent rows={prevWeek} />
          ) : value == 2 ? (
            <TabContent rows={currentWeek} />
          ) : (
            <TabContent rows={nextWeek} />
          )}
        </div>
      </div>
    </div>
  );
}
