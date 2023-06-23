import React, { useState, useEffect, createContext } from 'react';
import { URL } from '../constants/constants';
import axios from "axios";

const WeekDataContext = createContext();

const WeekDataProvider = ({ children }) => {
    const [data, setData] = useState({});

    const getWeekData = async () => {
        try {
          const res = await axios.get(`${URL}/week`);
          const weekData = res.data;
          setData(weekData);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getWeekData();
      }, [])

    return (
        <WeekDataContext.Provider value={data}>
            {children}
        </WeekDataContext.Provider>
    )
}

export { WeekDataContext, WeekDataProvider }; 