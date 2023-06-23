import React, { useContext, useState } from "react";
import { FaThList } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { Typography } from "@mui/material";
import Status from "./Status/Status";
import CardList from "./CardList/CardList";
import style from "./Dashboard.module.css";
import { ShowModalContext } from "../../context/ShowModalContext";

export default function Dashboard() {
  const { showModal, setShowModal } = useContext(ShowModalContext);

  const handleClick = () => {
    setShowModal(!showModal);
  }

  return (
    <div className={style.dashboard}>
      <div className={style.dashboard_box}>
        <div className={style.dashboard_head}>
          <div className={style.flex}>
            <FaThList className={style.head_icon} />
            <Typography variant="p" className={style.head_txt}>
              Дашбоард
            </Typography>
          </div>
          <div className={style.head_btn} onClick={handleClick}>
            <FiUsers className={style.btn_icon} />
            <Typography variant="p"  className={style.btn_txt}>
              Узнать больше
            </Typography>
          </div>
        </div>
      </div>
      <CardList />
      <Status />
    </div>
  );
}
