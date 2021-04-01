import React, { Fragment, useEffect } from "react";
import { Button, Col, Row, Typography, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { ClockCircleOutlined, HomeOutlined, UserOutlined, CopyOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import mostrar from "../../../Animated";

const BannerCourse = ({
  id,
  title = "Titulo",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos non consequuntur quidem consectetur deserunt dolores ab numquam, pariatur adipisci!",
  img = "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?cs=srgb&dl=pexels-pixabay-207691.jpg&fm=jpg",
  fecha,
}) => {
  const { Title, Text } = Typography;

  useEffect(() => {
    window.addEventListener("scroll", mostrar)
  }, [])

  return (
    <Fragment>
      <Row
        justify="center"
        className="bg-secondary"
        gutter={[48, 48]}
        style={{ height: "auto", padding: "100px 50px" }}
      >
        <Col xs={24} md={12} className="izquierda" >
          <Breadcrumb>
            <Breadcrumb.Item className="menu-item-breadcum" href="/inicio">
              <HomeOutlined />
              <span>  Inicio</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="menu-item-breadcum" href="/cursos">
              <UserOutlined />
              <span>  Cursos</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="menu-item-breadcum">{title}</Breadcrumb.Item>
          </Breadcrumb>
          <br />
          <Title level={1} style={{ color: "white" }}>
            {title}
          </Title>
          <Text style={{ color: "white" }}>{description}</Text>
          <br />
          <br />
          <Title level={5} style={{ color: "white" }}><ClockCircleOutlined />{"  "}{fecha}</Title>
          <Link to="/cursos">
            <Button type="primary" className="btn-secondary" style={{ marginTop: "20px" }} icon={<ArrowLeftOutlined />} danger>
              Volver
            </Button>
          </Link>
          <Link to="/cursos" style={{ marginLeft: "10px" }}>
            <Button type="primary" className="btn-secondary" icon={<CopyOutlined />} style={{ marginTop: "20px" }} danger>
              Compartir
            </Button>
          </Link>
          <Link to={`/actividades/${id}`} style={{ marginLeft: "10px" }}>
            <Button type="primary" className="btn-primary" style={{ marginTop: "20px" }} >
              Ir al curso
              <ArrowRightOutlined />
            </Button>
          </Link>
        </Col>
        <Col xs={24} md={8} >
          <div style={{ height: "300px", background: "white" }}>
            <div style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "300px"
            }}
            ></div>
          </div>

        </Col>
      </Row>
    </Fragment>
  );
};
export default BannerCourse;
