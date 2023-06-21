import React, { useEffect, useState, useMemo } from "react";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { FaThList, FaDownload } from "react-icons/fa";
import Select from "@mui/material/Select";
import { Switch } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import LineChart from "./BarChart/BarChart";
import style from "./UsersList.module.css";
import TableBox from "./Table/Table";
import axios from "axios";

Chart.register(CategoryScale);

// const Data = [
//   {
//     year: 2016,
//     value: 1,
//   },
//   {
//     year: 2017,
//     value: 5,
//   },
//   {
//     year: 2018,
//     value: 6,
//   },
//   {
//     year: 2019,
//     value: 2,
//   },
//   {
//     year: 2020,
//     value: 4,
//   },
//   {
//     year: 2021,
//     value: 5,
//   },
//   {
//     year: 2022,
//     value: 3,
//   },
// ];

export default function UsersList() {
  const [value, setValue] = useState('');
  const [chartValue, setChartValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const getData = async () => {
      await axios.get('http://localhost:5020/api/values').then(res => {
      const values = res.data;
      setChartValue(values); 
    })
  }

  useEffect(() => {
    getData();
  }, [])

  const memoResult = useMemo(() => ({
    labels: chartValue?.map(item => item.year),
    datasets: [
      {
        label: "Lable Text",
        data: chartValue?.map(item => item.value),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "&quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  }), [chartValue])

  return (
    <>
      <div className="container">
        <div className={style.dashboard}>
          <div className={style.dashboard_head}>
            <div className={style.flex}>
              <FaThList className={style.headIcon} />
              <p className={style.head_txt}>Показатели метрик</p>
            </div>
            <div className={style.flex}>
              <FaDownload className={style.btnIcon} />
              <p className={style.btn_txt}>Узнать больше</p>
            </div>
          </div>
        </div>
        <div className={style.dashboard_body}>
          <div className={style.dashboard_bar}>
            <div className={style.bar_head}>
              <Box sx={{ width: 250, marginRight: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Value</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    onChange={handleChange}
                    label="Value"
                  >
                    <MenuItem value='Value 1'>Value 1</MenuItem>
                    <MenuItem value='Value 2'>Value 2</MenuItem>
                    <MenuItem value='Value 3'>Value 3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <div className={style.flex}>
                <p>Своя группа</p>
                <Switch defaultChecked />
              </div>
            </div>
            <div className={style.bar_body}>
              <LineChart chartData={memoResult} />
            </div>
          </div>
          <div className={style.dashboard_table}>
            <TableBox />
          </div>
        </div>
      </div>
    </>
  );
}
