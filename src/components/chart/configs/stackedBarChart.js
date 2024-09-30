const stackedBarChart = {
    series: [
      {
        name: "Product A",
        data: [150, 200, 100, 220, 300, 100],
        color: "#FF4560", // Color for Product A
      },
      {
        name: "Product B",
        data: [200, 150, 150, 180, 250, 200],
        color: "#008FFB", // Color for Product B
      },
      {
        name: "Product C",
        data: [100, 120, 80, 130, 150, 120],
        color: "#00E396", // Color for Product C
      },
      {
        name: "Product D",
        data: [50, 80, 60, 90, 120, 80],
        color: "#775DD0", // Color for Product D
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
          borderRadius: 10,               // Border radius applied
          borderRadiusApplication: "end", // Applies the radius only at the top
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["transparent"],
      },
      grid: {
        show: false,
        borderColor: "#ccc",
        strokeDashArray: 2,
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
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
          color: '#f2f2f3',
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
          color: '#f2f2f3',
        },
      },
  
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  };
  
  export default stackedBarChart;
  