
import { Typography } from "antd";
import { Tabs } from 'antd';
function Overview() {
    const { Title } = Typography;
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: 'Fertilization',
        },
        {
            key: '2',
            label: 'Protocol',
        },
        {
            key: '3',
            label: 'Diagnosis',
        },
    ];
    return (
        <>
            <div className="chart-container">
                <div>
                    <Title level={5} className="header-name">Source</Title>
                </div>

                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '95%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: '40%', height: '5px', backgroundColor: '#3768C5', borderRadius: '5px', marginRight: '5px' }}>
                            {/* <span style={{ marginTop: '10px' }}>40%</span> */}
                        </div>
                        <div style={{ width: '60%', height: '5px', backgroundColor: '#37C577', borderRadius: '5px' }}>
                            {/* <span style={{ paddingTop: '10px' }}>60%</span> */}
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '95%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: '40%', height: '5px',  marginRight: '5px' }}>
                            <span style={{ marginTop: '10px' }}>40%</span>
                        </div>
                        <div style={{ width: '60%', height: '5px' }}>
                            <span style={{ paddingTop: '10px' }}>60%</span>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '95%', display: 'grid', justifyContent: 'center', alignItems: 'center' , height:'150px', backgroundColor:'#FAF8FF', marginTop:'2rem' }}>
                    <span className="text-overview" style={{borderLeft:'5px solid #3768C5'}}>intracytoplasmic sperm injectio</span>
                    <span className="text-overview" style={{borderLeft:'5px solid #37C577'}}>In-Vitro Fertilization</span>


                    </div>
                </div>
            </div>



        </>
    );
}

export default Overview;
