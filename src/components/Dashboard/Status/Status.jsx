import React, { useState } from "react";
import style from './Status.module.css'; 
import TabContent from "./TabContent";

export default function Status () {
    const [value, setValue] = useState(2);

    const tabs = [
        {
            id: 1,
            title: 'Прошлая неделя',
        },
        {
            id: 2,
            title: 'Текущая неделя',
        },
        {
            id: 3,
            title: 'Следующая неделя',
        },
    ];

    function handleChange (e) {
        setValue(e.target.id);
    }


    return (
        <div className={style.status}>
            <div className={style.status_title}>
                Status
            </div>
            <div className={style.status_body}>
                <div className={style.status_nav}>
                    {tabs.map((tab, index) => (
                        <div className={style.status_tab} key={index} id={tab.id} onClick={handleChange}> 
                            {tab.title}
                        </div>
                    ))}
                </div>
                <div className={style.status_tab_content}>
                    {value == 1 ? 
                        <TabContent title='prevWeek' />
                        :
                        value == 2 ? <TabContent title='currentWeek' />
                        :
                        <TabContent title='nextWeek' /> 
                    }
                </div>
            </div>
        </div>
    )
}