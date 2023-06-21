import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
import style from "./News.module.css";

export default function News({ title }) {
    const [isActive, setActive] = useState();
    const [data, setData] = useState();

    const getListNews = async () => {
        try {
            await axios.get("http://localhost:5020/api/news").then((res) => {
                const news = res.data;
                setData(news);
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getListNews();
    }, []);

    const handleClick = (e) => {
        if (isActive == e) {
            return setActive(null);
        }
        setActive(e);
    };

    return (
        <div className={style.news}>
            <div className={style.news_body}>
                <div className={style.head}>{title}</div>
                <div className={style.content}>
                    {data?.map(({ label, date, content }, index) => (
                        <>
                            <div
                                className={style.accordian}
                                key={index}
                                index={index}
                                onClick={() => handleClick(index)}
                            >
                                <div className={style.date}>
                                    {date}
                                    <IoMdArrowDropdown
                                        className={style.accordianIcon}
                                    />
                                </div>
                                <div className={style.label}>{label}</div>
                            </div>
                            <div
                                className={
                                    isActive == index
                                        ? "content_active"
                                        : "content"
                                }
                            >
                                {content}
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}
