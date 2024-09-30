

import ReactApexChart from "react-apexcharts";
import BarGraphUI from "./configs/BarGraphUI";
import { Typography } from "antd";

function BarGraph() {
  const { Title } = Typography;
 

  return (
    <>
      <div id="chart">
      <div>
                    <Title level={5} className="header-name">Age Distribution</Title>
                </div>
        <ReactApexChart
          className="bar-chart"
          options={BarGraphUI.options}
          series={BarGraphUI.series}
          height={450}
          type="bar"
        />
      </div>
   
    </>
  );
}

export default BarGraph;
