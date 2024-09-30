
import ReactApexChart from "react-apexcharts";
import AcitivitychartUI from "./configs/AcitivitychartUI";

function Acitivitychart() {

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <span className="activitytext">Activity</span>
        </div>
        <div>
          <span className="weektext">Week</span>
        </div>
      </div>
      <div className="stackedbtn">
        <button className="stacked-button">
          <span className="button-icon">
            Total Patients
          </span>
        </button>
        <button className="stacked-button">
          <span className="button-icon">
            Total Embryo Graded
          </span>
        </button>
      </div>
      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          options={AcitivitychartUI.options}
          series={AcitivitychartUI.series}
          height={410}
          type="bar"
        />
      </div>

    </>
  );
}

export default Acitivitychart;
