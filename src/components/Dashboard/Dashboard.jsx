import React from "react";
import { FaThList } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import Status from "./Status/Status";
import CardList from "./CardList/CardList";
import style from "./Dashboard.module.css";

export default function Dashboard() {
    return (
        <>
            <div className={style.dashboard}>
                <div className={style.dashboard_box}>
                    <div className={style.dashboard_head}>
                        <div className={style.flex}>
                            <FaThList className={style.headIcon} />
                            <p className={style.head_txt}>Дашбоард</p>
                        </div>
                        <div className={style.flex}>
                            <FiUsers className={style.btnIcon} />
                            <p className={style.btn_txt}>Узнать больше</p>
                        </div>
                    </div>
                </div>
                <CardList />
                <Status />
            </div>
        </>
    );
}
