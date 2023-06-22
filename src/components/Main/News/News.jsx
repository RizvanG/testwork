import React, { useEffect, useState } from "react";
import Accordion from "./Accordion/Accordion";
import { URL } from "../../constants/constants";
import axios from "axios";
import style from "./News.module.css";


export default function News({ title }) {
    const [data, setData] = useState();

    const getListNews = async () => {
        try {
            const { data } = await axios.get(`${URL}/news`);
            setData(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getListNews();
    }, []);

    return (
        <div className={style.news}>
            <div className={style.news_body}>
                <div className={style.title}>{title}</div>
                {data?.map((item, index) => (
                    <Accordion data={item} key={index} />
                ))}
            </div>
        </div>
    );
}
