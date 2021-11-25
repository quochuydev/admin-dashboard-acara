import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Widget1 extends Component {
  render() {
    const data = {
      labels: [7, 6, 8, 7, 3, 8, 3, 3, 0],
      datasets: [
        {
          label: "My First dataset",
          data: [0, 5, 4, 5, 4, 5, 4, 5, 4],
          backgroundColor: "rgba(36, 33, 218,.5)",
          borderColor: "rgba(36, 33, 218,1)",
          borderWidth: 2,
          strokeColor: "rgba(36, 33, 218,1)",
          capBezierPoints: !0,
          pointColor: "#fff",
          pointBorderColor: "rgba(36, 33, 218,1)",
          pointBackgroundColor: "rgba(36, 33, 218,1)",
          pointBorderWidth: 2.5,
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
      <div style={{ height: 150 }}>
        <Line data={data} options={options} height={150} />
      </div>
    );
  }
}

export default Widget1;
