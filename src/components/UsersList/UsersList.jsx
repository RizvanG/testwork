import React, { useEffect, useState, useMemo } from "react";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { FaThList, FaDownload } from "react-icons/fa";
import Select from "@mui/material/Select";
import { Switch, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import LineChart from "./BarChart/BarChart";
import TableBox from "./TableBox/TableBox";
import { URL } from "../../constants/constants";
import axios from "axios";
import style from "./UsersList.module.css";

Chart.register(CategoryScale);

export default function UsersList() {
  const initialValue = [{
    year: 0,
    value: 0,
  }];

  const [selectValue, setSelectValue] = useState("");
  const [chartValue, setChartValue] = useState(initialValue);

  const getData = async () => {
    try {
      await axios.get(`${URL}/values`).then((res) => {
        const values = res.data;
        setChartValue(values);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  const chartData = useMemo(
    () => ({
      labels: chartValue?.map((item) => item.year),
      datasets: [
        {
          label: "Lable Text",
          data: chartValue?.map((item) => item.value),
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
    }),
    [chartValue]
  );

  return (
    <div className={style.dashboard}>
      <div className={style.dashboard_box}>
        <div className={style.dashboard_head}>
          <div className={style.flex}>
            <FaThList className={style.head_icon} />
            <Typography className={style.head_txt}>Показатели метрик</Typography>
          </div>
          <div className={style.flex}>
            <FaDownload className={style.btn_icon} />
            <Typography className={style.btn_txt}>Узнать больше</Typography>
          </div>
        </div>
      </div>
      <div className={style.dashboard_body}>
        <div className={style.bar}>
          <div className={style.bar_head}>
            <Box sx={{ width: 250, marginRight: 2 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Value</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectValue}
                  onChange={handleChange}
                  label="Value"
                >
                  <MenuItem value="Value 1">Value 1</MenuItem>
                  <MenuItem value="Value 2">Value 2</MenuItem>
                  <MenuItem value="Value 3">Value 3</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <div className={style.flex}>
              <Typography>Своя группа</Typography>
              <Switch />
            </div>
          </div>
          <div className={style.bar_body}>
            <LineChart chartData={chartData} />
          </div>
        </div>
        <div className={style.table}>
          <TableBox />
        </div>
      </div>
    </div>
  );
}
