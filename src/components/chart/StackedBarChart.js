import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import stackedBarChart from "./configs/stackedBarChart"; // Import your stacked bar chart configuration

function StackedBarChart() {
  const { Title } = Typography;

  return (
    <>
      <div className="stacked-bar-chart">
        <div>
          <Title level={5}>Stacked Bar Chart</Title>
        </div>
      </div>

      <ReactApexChart
        className="full-width"
        options={stackedBarChart.options}
        series={stackedBarChart.series}
        type="bar" // Set the type to bar
        height={350}
        width={"100%"}
      />
    </>
  );
}

export default StackedBarChart;