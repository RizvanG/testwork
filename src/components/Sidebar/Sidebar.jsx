import React from "react";
import style from './Sidebar.module.css';
import { Link } from "react-router-dom";
import { BiUserCheck } from 'react-icons/bi'


export default function Sidebar() {
    return (
        <div className={style.sidebar}>
            <div className={style.sidebar_box}>
                <div className={style.logo}>
                    <BiUserCheck className={style.iconLogo}/>
                    <p className={style.iconText}>ChangePlan</p>
                </div>
                <p className={style.txt}>Единственная инициатива/вид</p>
                <div className={style.nav}>
                    <Link to='/' className={style.button}>
                        Главная       
                    </Link>
                    <Link to='/dashboard' className={style.button}>
                        Дашбоард       
                    </Link>
                    <Link to='/main' className={style.button}>
                        Сотрудники       
                    </Link>
                </div>
            </div>
        </div>
    )
}