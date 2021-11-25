import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class SalesAnalysis extends Component {
  render() {
    const data = {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
      datasets: [
        {
          label: "My First dataset",
          data: [4, 5, 1.5, 6, 7, 5.5, 5.8, 4.6],
          backgroundColor: "#fff",
          borderColor: "rgba(36, 33, 218,1)",
          borderWidth: 2,
          strokeColor: "rgba(36, 33, 218,1)",
          capBezierPoints: !0,
          pointColor: "#fff",
          pointBorderColor: "rgba(36, 33, 218,1)",
          pointBackgroundColor: "rgba(36, 33, 218,1)",
          pointBorderWidth: 1,
          pointRadius: 1.5,
          pointHoverBackgroundColor: "rgba(36, 33, 218,1)",
          pointHoverBorderColor: "rgba(36, 33, 218,1)",
          pointHoverRadius: 0,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
        labels: {
          usePointStyle: false,
        },
      },
      scales: {
        xAxes: [
          {
            display: false,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            scaleLabel: {
              display: false,
              labelString: "Month",
            },
          },
        ],
        yAxes: [
          {
            display: false,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            scaleLabel: {
              display: true,
              labelString: "Value",
            },
          },
        ],
      },
      elements: {
        line: {
          tension: 0,
        },
        point: {
          radius: 0,
          borderWidth: 0,
        },
      },
      title: {
        display: false,
      },
    };
    return (
      <div style={{ height: 255 }}>
        <Line data={data} options={options} height={255} />
      </div>
    );
  }
}

export default SalesAnalysis;
