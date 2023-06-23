import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { WeekDataContext } from "../../../context/WeekDataContext";
import style from './TabContent.module.css'

export default function TabContent({ currentTab }) {  
  const data = useContext(WeekDataContext);

  return (
    <TableContainer component={Paper}>
      <Table className={style.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Задача</TableCell>
            <TableCell align="right">Время</TableCell>
            <TableCell align="right">Статус</TableCell>
            <TableCell align="right">Значение</TableCell>
            <TableCell align="right">Осталось</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(currentTab == 1 ? data[0]?.prevWeek : currentTab == 2 ? data[0]?.currentWeek : data[0]?.nextWeek)?.map(
            (row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
