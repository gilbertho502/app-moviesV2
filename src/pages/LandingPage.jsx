import { Card, Col, Row } from "antd";
import camera from "../assets/camera.png"
import series from "../assets/television.png"
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
  <Row gutter={24} 
        justify="center" 
        style={{ marginTop: 20 }}>
    <Col span={9}>
      <Card title="Movies" variant="borderless">
         <Link to = {'/movies'}>
        <img src={camera} alt="camera" width={300} />
        </Link>
      </Card>
    </Col>
    <Col span={9}>
      <Card title="Series Tv" variant="borderless">
        <Link to = {'/tv'}>
        <img src={series} alt="series" width={300} />
        </Link>
      </Card>
    </Col>
  </Row>
    </div>
  );
};

export { LandingPage };
