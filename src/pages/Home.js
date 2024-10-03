

import {
  Card,
  Col,
  Row,
  Typography,

} from "antd";


import BarGraph from "../components/chart/BarGraph";
import RadialChart from "../components/chart/Radialchart";
import Acitivitychart from "../components/chart/Acitivitychart";
import HorizontalBar from "../components/chart/HorizontalBar";
import Overview from "../components/chart/Overview";
import Patient from "../assets/images/profile-2user.svg";
import Group from "../assets/images/Group 92262 (1).svg";
import Useradd from "../assets/images/user-add.svg";
import Clock from "../assets/images/clock.svg";
function Home() {
  const { Title } = Typography;

 
  const count = [
    {
      today: "Total Patients",
      title: "1000",
      persent: "+30%",
      icon: Patient,
      bnb: "bnb2",
    },
    {
      today: "Total Embryo Graded",
      title: "3000",
      persent: "+20%",
      icon: Group,
      bnb: "bnb2",
    },
    {
      today: "Avg #Emb Graded/Patient",
      title: "06",
      persent: "-20%",
      icon: Useradd,
      bnb: "redtext",
    },
    {
      today: "Avg Turnaround Time",
      title: "123 Hrs",
      persent: "10%",
      icon: Clock,
      bnb: "bnb2",
    },
  ];

 

  return (
    <>
      <div className="layout-content">
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {count.map((c, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              xxl={6}
              className="mb-24"
            >
              <Card bordered={false} className="criclebox ">
                <div className="number">
                  <Row align="middle" gutter={[24, 0]}>
                    <Col xs={5}>
                      <div className="icon-box"><img src={c.icon} alt=''/></div>
                    </Col>
                    <Col xs={18}>
                      <Title level={3}>
                        {c.title} <small className={c.bnb}></small>
                      </Title>
                      <span>{c.today}</span>

                    </Col>

                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[24, 0]}>
          {/* Left column for Echart and LineChart */}
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={6} className="">
            <Card bordered={false} className="criclebox">
            <Overview/>

              {/* Echart component */}
            </Card>
            <Card bordered={false} className="criclebox" style={{ marginTop: '12px' }}>
              {/* LineChart component */}
              <Acitivitychart />
            </Card>
          </Col>

          {/* Right column for the two cards */}
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={18} className="" >
            {/* First card - shown twice */}
            <div className="d-flex w-100">
              <Card bordered={false} className="criclebox cardbody h-full" style={{ width: '50%',marginRight: '12px', paddingLeft:'12px', height:'500px' }}>
              <BarGraph />
              </Card>

              {/* RadialChart */}
              <Card bordered={false} className="criclebox cardbody h-full" style={{ width: '50%' , height:'500px' }}>
              <RadialChart />
               
              </Card>
            </div>


            {/* Second card */}
            <Card bordered={false} className="criclebox" style={{ marginTop: '12px', }}>
            <HorizontalBar />
              
            </Card>
          </Col>
        </Row>

      </div>
    </>
  );
}

export default Home;
