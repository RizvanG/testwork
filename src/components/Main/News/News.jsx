import React from "react";
import { IoMdArrowDropdown } from 'react-icons/io';
import style from './News.module.css';



export default function News ({title}) {
    const dataAccordian = [
        {
            label: 'Добавлен новый шаблон в презентер',
            date: '18.03.2023 16:23',
            content: 'Добавлен новый шаблон "Сравнение с предыдущим годом в презентер"' 
        },
        {
            label: 'Добавлен атрибут Case ID',
            date: '18.03.2023 16:23',
            content: 'Добавлен новый шаблон "Сравнение с предыдущим годом в презентер"' 
        },
        {
            label: 'Обновленный регламент подачи документов',
            date: '18.03.2023 16:23',
            content: 'Добавлен новый шаблон "Сравнение с предыдущим годом в презентер"' 
        },
        {
            label: 'Предпосылки КПРА для нового цикла',
            date: '18.03.2023 16:23',
            content: 'Добавлен новый шаблон "Сравнение с предыдущим годом в презентер"' 
        }
    ]

    return (
        <div className={style.news}>
            <div className={style.news_body}>
                <div className={style.head}>
                    {title}
                </div>
                <div className={style.content}>
                    {dataAccordian.map(({label, date}, index) => (
                        <div className={style.accordian} key={index}>
                            <div className={style.date}>
                                {date}
                                <IoMdArrowDropdown className={style.accordianIcon}/>
                            </div>
                            <div className={style.label}>
                                {label}
                            </div>    
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}