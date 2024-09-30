
import ReactApexChart from "react-apexcharts";
import HorizontalBarUI from "./configs/HorizontalBarUI";
import { Typography } from "antd";
import { Tabs } from 'antd';
function HorizontalBar() {
    const { Title } = Typography;
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: 'Count',
        },
        {
            key: '2',
            label: 'Day',
        },
        {
            key: '3',
            label: 'Age',
        },
        {
            key: '4',
            label: 'Source',
        },
        {
            key: '5',
            label: 'Fertilization',
        },
        {
            key: '6',
            label: 'Protocol',
        },
    ];

    return (
        <>
            <div id="chart">
                <div className="chart-container">
                    <div style={{display:'flex'}}>
                        <div style={{ width: '30%' }}>
                            <Title level={5} className="header-name">Source</Title>
                        </div>
                        <div style={{ width: '70%' }}>

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
                    series={HorizontalBarUI.series}
                    height={330}
                    type="bar"
                />
            </div>

        </>
    );
}

export default HorizontalBar;
