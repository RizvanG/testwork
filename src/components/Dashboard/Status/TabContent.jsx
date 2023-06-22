import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TabContent({ currentTab }) {
  const prevWeek = [
    {
      name: "Задача 1",
      calories: 12,
      fat: "Выполнено",
      carbs: 37,
      protein: 4,
    },
    {
      name: "Задача 2",
      calories: 5,
      fat: "Выполнено",
      carbs: 24,
      protein: 4,
    },
    {
      name: "Задача 3",
      calories: 23,
      fat: "В процессе",
      carbs: 24,
      protein: 6,
    },
    {
      name: "Задача 4",
      calories: 7,
      fat: "В процессе",
      carbs: 67,
      protein: 4,
    },
    {
      name: "Задача 5",
      calories: 51,
      fat: "Выполнено",
      carbs: 49,
      protein: 3,
    },
  ];

  const currentWeek = [
    {
      name: "Задача 6",
      calories: 12,
      fat: "В процессе",
      carbs: 37,
      protein: 4,
    },
    {
      name: "Задача 7",
      calories: 5,
      fat: "В процессе",
      carbs: 24,
      protein: 4,
    },
    {
      name: "Задача 8",
      calories: 23,
      fat: "В процессе",
      carbs: 24,
      protein: 6,
    },
    {
      name: "Задача 9",
      calories: 7,
      fat: "В процессе",
      carbs: 67,
      protein: 4,
    },
    {
      name: "Задача 10",
      calories: 51,
      fat: "В процессе",
      carbs: 49,
      protein: 3,
    },
  ];

  const nextWeek = [
    {
      name: "Задача 11",
      calories: 12,
      fat: "Не активно",
      carbs: 37,
      protein: 4,
    },
    {
      name: "Задача 12",
      calories: 5,
      fat: "Не активно",
      carbs: 24,
      protein: 4,
    },
    {
      name: "Задача 13",
      calories: 23,
      fat: "Не активно",
      carbs: 24,
      protein: 6,
    },
    {
      name: "Задача 14",
      calories: 7,
      fat: "Не активно",
      carbs: 67,
      protein: 4,
    },
    {
      name: "Задача 15",
      calories: 51,
      fat: "Не активно",
      carbs: 49,
      protein: 3,
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
          {(currentTab == 1 ? prevWeek : currentTab == 2 ? currentWeek : nextWeek).map(
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
