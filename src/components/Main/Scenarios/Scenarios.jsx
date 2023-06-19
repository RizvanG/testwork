import React from "react";
import style from './Scenarios.module.css'

export default function Scenarios ({title}) {
    const scenariosList = [
        {
            date: 'ГПН-ННГ',
            text: 'Старт процесса КПРА'        
        },
        {
            date: '16 февраля 2022',
            text: 'Некий процесс с длинным названием, который переноситься на следующую строку'       
        },
        {
            date: '17 февраля 2022',
            text: 'Некий процесс с длинным названием, который переноситься на следующую строку'     
        },
        {
            date: '10 мая 2022',
            text: 'Крайний срок загрузки данных'        
        },
        {
            date: '19 июня 2022',
            text: 'Некий процесс с длинным названием, который переноситься на следующую строку'        
        },
        {
            date: '25 июля 2022',
            text: 'Защита УК БРД',        
        },
        {
            date: '11 августа 2022',
            text: 'Некий процесс с длинным названием, который переноситься на следующую строку'        
        },
        {
            date: '15 августа 2022',
            text: 'Защита УК БРД'        
        }
    ]


    return (
        <div className={style.scenarios}>
            <div className={style.scenarios_body}>
                <div className={style.head}>
                    {title}
                </div>
            </div>
            <div className={style.content}>
                    {scenariosList.map((item, index) => (
                        <div className={style.event_list} key={index}>
                            <div className={style.event_item}>
                                <div className={style.item}>
                                    <div className={style.date}>
                                        {item.date}
                                    </div>
                                </div>
                                <div className={style.text}>
                                    {item.text}
                                </div>    
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}