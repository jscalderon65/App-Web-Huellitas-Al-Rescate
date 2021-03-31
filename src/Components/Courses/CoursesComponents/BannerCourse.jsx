import React, { Fragment } from "react";
import { Button, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import {ClockCircleOutlined} from '@ant-design/icons'
const BannerCourse = ({
  id,
  title = "Titulo",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos non consequuntur quidem consectetur deserunt dolores ab numquam, pariatur adipisci!",
  img = "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?cs=srgb&dl=pexels-pixabay-207691.jpg&fm=jpg",
  fecha,
}) => {
  const { Title, Text } = Typography;
  return (
    <Fragment>
      <Row
        justify="center"
        className="bg-secondary"
        gutter={[48, 48]}
        style={{ height: "auto", padding: "100px 50px" }}
      >
        <Col xs={20} md={12}>
          <Title level={1} style={{ color: "white" }}>
            {title}
          </Title>
          <Text style={{ color: "white" }}>{description}</Text>
          <br />
          <br />
          <Title level={5} style={{ color: "white" }}><ClockCircleOutlined/>{" "}{fecha}</Title>
          <Link to="/cursos">
            <Button type="primary" style={{ marginTop: "20px" }} danger>
              Volver
            </Button>
          </Link>
          <br />
          <Link to={`/actividades/${id}`}>
            <Button type="primary" style={{ marginTop: "20px" }}>
              Ir al curso
            </Button>
          </Link>
        </Col>
        <Col xs={20} md={8}>
          <img src={img} width="100%" alt="" />
        </Col>
      </Row>
    </Fragment>
  );
};
export default BannerCourse;
