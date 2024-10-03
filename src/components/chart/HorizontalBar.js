import { useState } from 'react';

import ReactApexChart from "react-apexcharts";
import HorizontalBarUI from "./configs/HorizontalBarUI";
import { Typography } from "antd";
import { Tabs } from 'antd';
function HorizontalBar() {
    const { Title } = Typography;
    const [chartSeries, setChartSeries] = useState(HorizontalBarUI.series);

    const onChange = (key) => {
        console.log(key);
        // Update the series based on the selected tab
        const newSeries = {
            1: [
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
            2: [
                { name: "Product C", data: [100, 120, 80, 130, 150, 120], color: "#C7B2F2" },
                { name: "Product D", data: [50, 80, 60, 90, 120, 80], color: "#9E7FE1" },
            ],
            3: [
                { name: "Product E", data: [50, 80, 60, 90, 120, 80], color: "#7C67A8" },
                // Add more products as needed
            ],
            // Add more series data for additional tabs
        };

        setChartSeries(newSeries[key] || HorizontalBarUI.series); // Fallback to default if key is not found
    };

    const items = [
        { key: '1', label: 'Count' },
        { key: '2', label: 'Day' },
        { key: '3', label: 'Age' },
        { key: '4', label: 'Source' },
        { key: '5', label: 'Fertilization' },
        { key: '6', label: 'Protocol' },
    ];

    return (
        <>
            <div id="chart">
                <div className="chart-container">
                    <div style={{display:'flex'}} className={`align-middle align-items-center`}>
                        <div style={{ width: '30%' }}>
                            <Title level={5} className="EmbryoGradingCss mb-0">Embryo Grading</Title>
                        </div>
                        <div style={{ width: '100%' }}>

                            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                        </div>
                    </div>
                    <div className="maindiv2">
                        <div className="innerdiv">
                            <span className="spanmain" style={{ backgroundColor: '#F1EBFF' }}>
                            </span>
                            5AA
                        </div>
                        <div className="innerdiv">
                            <span className="spanmain" style={{ backgroundColor: '#E4D7FF' }}>
                            </span>
                            5AB
                        </div>
                        <div className="innerdiv">
                            <span className="spanmain" style={{ backgroundColor: '#C7B2F2' }}>
                            </span>
                            5BB
                        </div>
                        <div className="innerdiv">
                            <span className="spanmain" style={{ backgroundColor: '#9E7FE1' }}>
                            </span>
                            4AA
                        </div>
                        <div className="innerdiv">
                            <span className="spanmain" style={{ backgroundColor: '#7C67A8' }}>
                            </span>
                            4AB
                        </div>
                    </div>
                </div>
                <ReactApexChart
                    className="bar-chart"
                    options={HorizontalBarUI.options}
                    series={chartSeries} 
                    height={330}
                    type="bar"
                />
            </div>

        </>
    );
}

export default HorizontalBar;
