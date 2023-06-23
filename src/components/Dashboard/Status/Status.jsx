import React, { useContext, useState } from "react";
import * as xlsx from "xlsx";
import { TABS } from "../../../constants/constants";
import TabContent from "./TabContent";
import { WeekDataContext } from '../../../context/WeekDataContext'
import style from "./Status.module.css";

export default function Status() {
  const [currentTab, setCurrentTab] = useState(2);
  const data = useContext(WeekDataContext);

  const handleChange = (index) => {
    setCurrentTab(index);
  };

  const handleClickExport = () => {
    let ws =
    currentTab == 1
        ? xlsx.utils.json_to_sheet(data[0]?.prevWeek)
        : currentTab == 2
        ? xlsx.utils.json_to_sheet(data[0]?.currentWeek)
        : xlsx.utils.json_to_sheet(data[0]?.nextWeek);
    xlsx.utils.sheet_add_aoa(
      ws,
      [["Задача", "Время", "Статус", "Значение", "Осталось"]],
      { origin: "A1" }
    );
    console.log(ws);
    let wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "MySheet1");
    xlsx.writeFile(wb, "MyExcel.xlsx");
  };

  return (
    <div className={style.status}>
      <div className={style.status_title}>Список задач</div>
      <div className={style.status_body}>
        <div className={style.status_nav}>
          {TABS.map((tab, index) => (
            <div
              className={style.status_tab}
              key={index}
              onClick={() => handleChange(index)}
            >
              {tab.title}
            </div>
          ))}
          <div className={style.status_btn} onClick={handleClickExport}>
            Скачать
          </div>
        </div>
        <div className={style.status_tab_content}>
          <TabContent currentTab={currentTab}/>
        </div>
      </div>
    </div>
  );
}
