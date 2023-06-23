import React, { useEffect, useState } from "react";
import { AiFillBulb } from "react-icons/ai";
import { URL } from "../../../constants/constants";
import axios from "axios";
import style from "./Events.module.css";

export default function Events({ title }) {
    const [data, setData] = useState();

    const getListEvents = async () => {
        try {
            const { data } = await axios.get(`${URL}/events`);
            setData(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
      getListEvents();
    }, []);

    return (
        <div className={style.events}>
            <div className={style.events_body}>
                <div className={style.head}>{title}</div>
                <div className={style.content}>
                    {data?.map((item, index) => (
                        <div className={style.event_list} key={index}>
                            <div className={style.event_item}>
                                <div className={style.item}>
                                    <AiFillBulb />
                                    <div className={style.date}>
                                        {item.date}
                                    </div>
                                </div>
                                <div className={style.text}>{item.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
