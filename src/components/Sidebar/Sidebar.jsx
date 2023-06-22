import React from "react";
import { Link } from "react-router-dom";
import { BiUserCheck } from 'react-icons/bi'
import { Typography } from "@mui/material";
import style from './Sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={style.sidebar}>
            <div className={style.sidebar_box}>
                <div className={style.logo}>
                    <BiUserCheck className={style.icon_logo}/>
                    <Typography className={style.icon_text}>ChangePlan</Typography>
                </div>
                <Typography className={style.txt}>Единственная инициатива/вид</Typography>
                <div className={style.nav}>
                    <Link to='/' className={style.button}>
                        Главная       
                    </Link>
                    <Link to='/dashboard' className={style.button}>
                        Дашбоард       
                    </Link>
                    <Link to='/users' className={style.button}>
                        Сотрудники       
                    </Link>
                </div>
            </div>
        </div>
    )
}