const HorizontalBarUI = {
    series: [
      {
        name: "Product A",
        data: [150, 200, 100, 220, 300, 100],
        color: "#F1EBFF",
      },
      {
        name: "Product B",
        data: [200, 150, 150, 180, 250, 200],
        color: "#E4D7FF",
      },
      {
        name: "Product C",
        data: [100, 120, 80, 130, 150, 120],
        color: "#C7B2F2",
      },
      {
        name: "Product D",
        data: [50, 80, 60, 90, 120, 80],
        color: "#9E7FE1",
      },
      {
        name: "Product E",
        data: [50, 80, 60, 90, 120, 80],
        color: "#7C67A8",
      },
    ],
  
    options: {
      chart: {
        type: "bar",
        width: "100%",
        height: "auto",
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "30%",
          borderRadius: 10,
          borderRadiusApplication: "end",
          barHeight: "70%",
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["#fff"],
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ccc",
        strokeDashArray: 2,
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        labels: {
          show: false,
        },
        axisBorder: {
          show: true,
          color: "#f2f2f3",
        },
      },
      yaxis: {
        labels: {
          show: true,
          align: "right",
          minWidth: 0,
          maxWidth: 160,
          style: {
            colors: ["#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157"],
          },
        },
        axisBorder: {
          show: true,
          color: "#f2f2f3",
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
      legend: {
        show: false, // Hide the legend
      },
    },
  };
  
  export default HorizontalBarUI;
  