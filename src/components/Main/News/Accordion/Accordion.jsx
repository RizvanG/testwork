import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import style from "./Accordion.module.css";

export default function Accordion({ data }) {
  const [isActive, setActive] = useState(false);
  const { label, content, date } = data;

  const handleToggleClick = () => {
    setActive(!isActive);
  }

  return (
    <div>
      <div className={style.accordian} onClick={handleToggleClick}>
        <div className={style.date}>
          {date}
          <IoMdArrowDropdown className={style.accordian_icon} />
        </div>
        <div className={style.label}>{label}</div>
      </div>
      {isActive && <div className={style.content}>{content}</div>}
    </div>
  );
}
