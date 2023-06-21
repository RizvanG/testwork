import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Scenarios.module.css";

export default function Scenarios({ title }) {
    const [data, setData] = useState();

    const getListScenarios = async () => {
        try {
            await axios
                .get("http://localhost:5020/api/scenarios")
                .then((res) => {
                    const scenarios = res.data;
                    setData(scenarios);
                });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getListScenarios();
    }, []);

    return (
        <div className={style.scenarios}>
            <div className={style.scenarios_body}>
                <div className={style.head}>{title}</div>
            </div>
            <div className={style.content}>
                {data?.map((item, index) => (
                    <div className={style.event_list} key={index}>
                        <div className={style.event_item}>
                            <div className={style.item}>
                                <div className={style.date}>{item.date}</div>
                            </div>
                            <div className={style.text}>{item.text}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
