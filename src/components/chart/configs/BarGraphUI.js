const BarGraphUI = {
  series: [
    {
      name: "Sales",
      data: [750, 400, 500, 220],
      color: "#F7F3FF",
    },
  ],

  options: {
    chart: {
      type: "bar",
      width: "100%",
      height: "auto",

      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: 10, 
        borderRadiusApplication: "end", 
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
      show: true,
      borderColor: "#D9D9D9", // Color for dashed lines
      strokeDashArray: 3, // Dashed effect
      xaxis: {
        lines: {
          show: false, // Disable x-axis lines
        },
      },
      yaxis: {
        lines: {
          show: true, // Enable y-axis lines
        },
      },
    },
    xaxis: {
      categories: ["30", "35 - 37", "38 - 40", "41 - 42"],
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
      min: 100, // Set minimum to 100k
      max: 1000, // Set maximum to 800k
      tickAmount: 5,
      labels: {
        show: true,
        align: "right",
        minWidth: 0,
        maxWidth: 160,
        formatter: function (value) {
          return value + "k"; // Display values in 'k'
        },
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

export default BarGraphUI;
