import React, { useEffect, useState } from "react";
import { AiFillBulb } from "react-icons/ai";
import style from "./Events.module.css";
import axios from "axios";

export default function Events({ title }) {
  const [data, setData] = useState();

  const getData = async () => {
    axios.get('http://localhost:5020/api/events').then(res => {
        const events = res.data;
        setData(events);
    });
  };
  
  useEffect(() => {
    getData();
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
                  <div className={style.date}>{item.date}</div>
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
