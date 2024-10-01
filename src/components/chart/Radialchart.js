import { useState } from 'react';

import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import radialChart from "./configs/radialChart"; // Import radialChart instead of lineChart
import { Tabs } from 'antd';
function RadialChart() {
    const { Title } = Typography;
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: 'Tab 1',
        },
        {
            key: '2',
            label: 'Tab 2',
        },
        {
            key: '3',
            label: 'Tab 3',
        },
    ];
    return (
        <>
            <div className="chart-container">
                <div>
                    <Title level={5} className="header-name">Source</Title>
                </div>
                <div style={{ width: '100%' }}>

                            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                 </div>

                {/* <Tabs defaultActiveKey="1" items={items} onChange={onChange} /> */}
                <div className="maindiv">
                    <div className="innerdiv">
                        <span className="spanmain" style={{backgroundColor:'rgb(55, 197, 119)'}}>
                        </span>
                        Fresh Self
                    </div>
                    <div className="innerdiv">
                        <span className="spanmain" style={{backgroundColor:'rgb(55, 104, 197)'}}>
                        </span>
                        Frozen Self
                    </div>
                    <div className="innerdiv">
                        <span className="spanmain" style={{backgroundColor:'rgb(236, 157, 62)'}}>
                        </span>
                        Fresh Donor
                    </div>
                    <div className="innerdiv">
                        <span className="spanmain" style={{backgroundColor:'rgb(197, 176, 55)'}}>
                        </span>
                        Frozen Donor
                    </div>
                </div>
            </div>


            <ReactApexChart
                className="full-width"
                options={radialChart.options} // Use radialChart options
                series={radialChart.series}   // Use radialChart series
                type="radialBar"              // Change chart type to 'radialBar'
                height={350}
                width={"100%"}
            />
        </>
    );
}

export default RadialChart;
