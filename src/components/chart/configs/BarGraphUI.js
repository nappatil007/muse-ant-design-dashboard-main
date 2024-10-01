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
        // borderRadiusApplication: "end", 
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
      title: {
        text: 'SART Age',
        margin: 10,
        offsetX: 0,
        offsetY: -10,
        style: {
          fontSize:  '12px',
          fontWeight:  '400',
          color:  '#4A5157'
        },
      },
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
      title: {
        text: 'Patients',
        margin: 10,
        offsetX: 0,
        offsetY: -10,
        style: {
          fontSize:  '12px',
          fontWeight:  '400',
          color:  '#4A5157'
        },
      },
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
