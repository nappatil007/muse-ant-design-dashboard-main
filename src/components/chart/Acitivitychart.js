import { useState } from 'react';
import ReactApexChart from "react-apexcharts";
import AcitivitychartUI from "./configs/AcitivitychartUI";
import SquareArrow from '../../assets/images/arrow-square-down.svg';


function Acitivitychart() {

  // Define initial state for the chart's series
  const [chartData, setChartData] = useState(AcitivitychartUI.series);
  const [activeButton, setActiveButton] = useState('patients'); // Track active button
  const [dropdownVisible, setDropdownVisible] = useState(false); // Track dropdown visibility
  // const [selectedTimeframe, setSelectedTimeframe] = useState('Week');

  // Event handler to update chart for "Total Patients"
  const handleTotalPatients = () => {
    setChartData([
      {
        name: 'Total Patients',
        data: [450, 300, 400, 500, 600, 700, 800],
        color: '#F7F3FF',
      },
    ]);
    setActiveButton('patients'); // Set active button
  };

  // Event handler to update chart for "Total Embryo Graded"
  const handleTotalEmbryoGraded = () => {
    setChartData([
      {
        name: 'Total Embryo Graded',
        data: [100, 200, 300, 400, 500, 600, 700],
        color: '#F7F3FF',
      },
    ]);
    setActiveButton('embryo'); // Set active button
  };

  // Function to determine button style based on active state
  const getButtonStyle = (buttonType) => {
    return activeButton === buttonType
    ? {
        boxShadow: '2px 2px 4px 0px #0000000D',
        backgroundColor: '#fff',
        border: '1px solid #f2f3f3',
        color: '#000',
      }
    : {};
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    
  };

  // Handle selection from the dropdown
  // const handleSelection = (timeframe) => {
  //   setSelectedTimeframe(timeframe); // Update the selected timeframe (Day/Week)
  //   setDropdownVisible(false); // Close the dropdown
  // };


  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <span className="activitytext">Activity</span>
        </div>
        <div className="align-middle position-relative">
          <span className="weektext p-1" onClick={toggleDropdown}>
            Week
            <img className="selectedIcon ms-2 mb-1" src={SquareArrow} alt="SquareArrow" />
          </span>
        
        </div>
      </div>
      <div className="stackedbtn">
        <button className="stacked-button" style={getButtonStyle('patients')} onClick={handleTotalPatients}>
          <span className="button-icon">Total Patients</span>
        </button>
        <button className="stacked-button" style={getButtonStyle('embryo')} onClick={handleTotalEmbryoGraded}>
          <span className="button-icon">Total Embryo Graded</span>
        </button>
      </div>
      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          options={AcitivitychartUI.options}
          series={chartData}
          height={392}
          type="bar"
        />
      </div>

    </>
  );
}

export default Acitivitychart;
