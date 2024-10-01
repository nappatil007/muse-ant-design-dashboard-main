

import { useState, useEffect } from "react";
import message from '../../assets/images/message.svg'
import Notifications from '../../assets/images/Notifications.svg';
import ProfileImg from '../../assets/images/team-3.jpg';
import Logo1 from '../../assets/images/LOGO 5 1.svg'
import Logo2 from '../../assets/images/LOGO 2 1.svg'
import Logo3 from '../../assets/images/LOGO 3 1.svg'
import Logo4 from '../../assets/images/LOGO 4 1.svg'
import Logo5 from '../../assets/images/LOGO 6 1.svg'

import {
  Row,
  Col,
  Button,
  Drawer,
  Typography,
} from "antd";


const toggler = [
  <svg
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    key={0}
  >
    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
  </svg>,
];



function Header({
  placement,
  name,
  subName,
  onPress,
  handleSidenavColor,
  handleSidenavType,
  handleFixedNavbar,
}) {
  const { Title, Text } = Typography;

  const [visible, setVisible] = useState(false);

  useEffect(() => window.scrollTo(0, 0));

  const showDrawer = () => setVisible(true);
  const hideDrawer = () => setVisible(false);

  // Utility function to format subName
  const formatSubName = (name) => {
    // Remove "/" and insert space before each capital letter except the first one
    return name.replace("/", "").replace(/([a-z])([A-Z])/g, '$1 $2');
  };

  return (
    <>
      <Row gutter={[24, 0]} style={{ borderBottom: '1px solid #EFEDF2', paddingBottom: '20px' }}>
        <Col span={24} md={6} className="align-middle">
          <div className="ant-page-header-heading">
            <span
              className="ant-page-header-heading-title"
              style={{ textTransform: "capitalize" }}
            >
              {formatSubName(subName)}
              {/* {subName.replace("/", "")} */}
            </span>
          </div>
        </Col>
        <Col span={24} md={18} className="header-control" style={{ paddingRight: '0' }}>
          <Button type="link" style={{ paddingRight: '0', paddingLeft: '0',marginLeft: '7px',height: '45px',width: '45px' }} onClick={showDrawer}>
            <img style={{ paddingRight: '0', paddingLeft: '0',height: '42px',width: '42px', borderRadius:'12px', border: '2px solid #FFF' }} src={ProfileImg} alt="" />
          </Button>
          <Button type="link" style={{ paddingRight: '0' }} onClick={showDrawer}>
            <img src={message} alt="" />
          </Button>
          <Button
            type="link"
            className="sidebar-toggler"
            onClick={() => onPress()}
          >
            {toggler}
          </Button>
          <Drawer
            className="settings-drawer"
            mask={true}
            width={360}
            onClose={hideDrawer}
            placement={placement}
            visible={visible}
          >
            <div layout="vertical">
              <div className="header-top">
                <Title level={4}>
                  Notifications
                  <Text className="subtitle">See our dashboard options.</Text>
                </Title>
              </div>
            </div>
          </Drawer>
          <Button type="link" style={{ paddingRight: '0' }} onClick={showDrawer}>
            <img src={Notifications} alt="" />
          </Button>
          <Button
            type="link"
            className="sidebar-toggler"
            onClick={() => onPress()}
          >
            {toggler}
          </Button>
          <Drawer
            className="settings-drawer"
            mask={true}
            width={360}
            onClose={hideDrawer}
            placement={placement}
            visible={visible}
          >
            <div layout="vertical">
              <div className="header-top">
                <Title level={4}>
                  Notifications
                  <Text className="subtitle">See our dashboard options.</Text>
                </Title>
              </div>
            </div>
          </Drawer>
          <div style={{
            width: '1px',
            height: '20px',
            backgroundColor: '#C6CAD1',
            marginLeft: '1rem'
          }}></div>
          <div className="d-flex gap-4">
            <img src={Logo1} alt="" />
            <img src={Logo2} alt="" />
            <img src={Logo3} alt="" />
            <img src={Logo4} alt="" />
            <img src={Logo5} alt="" />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Header;
