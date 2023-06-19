import React from "react";
import style from './TabContent.module.css';

export default function TabContent ({title}) {
    return (
        <div className={style.text}>
            {title}
        </div>
    )
}