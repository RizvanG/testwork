import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart({ chartData }) {
  return (
    <>
      <Bar
        width={550}
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </>
  );
}
