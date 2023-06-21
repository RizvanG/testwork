import React from "react";
import News from "./News/News";
import Scenarios from "./Scenarios/Scenarios";
import Events from "./Events/Events";
import style from "./Main.module.css";

export default function Main() {
  return (
    <div className={style.main}>
      <div className={style.main_body}>
        <News title="Новости" />
        <Events title="События" />
        <Scenarios title="Сценарии" />
      </div>
    </div>
  );
}
