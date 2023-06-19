import React from "react";
import style from './Sidebar.module.css';
import {BiUserCheck} from 'react-icons/bi'

const arr = ['Главная', 'Дашбоард', 'Сотрудники'];


export default function Sidebar() {
    return (
        <div className={style.sidebar}>
            <div className={style.sidebar_box}>
                <div className={style.logo}>
                    <BiUserCheck className={style.logoIcon}/>
                    <p className={style.iconText}>ChangePlan</p>
                </div>
                <p className={style.txt}>Единственная инициатива/вид</p>
                <div className={style.nav}>
                    {arr.map((item, index) => (
                        <div className={style.button} key={index}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}