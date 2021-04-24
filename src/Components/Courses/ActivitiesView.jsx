import React, { Fragment, useState,useEffect } from "react";
import { useParams } from "react-router";
import { useOnSnapshotCollection } from "my-customhook-collection";
import { firebase } from "../../Firebase/FirebaseConfig";
import { Link } from "react-router-dom";
import { Col, Row, Typography, Tabs, Collapse, Breadcrumb, Spin } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import getYouTubeID from "get-youtube-id";
import { animateScroll as scroll} from "react-scroll";
const { Panel } = Collapse;
const { TabPane } = Tabs;
const { Item } = Breadcrumb;
const ActivitiesView = () => {
  const scrollType = {
    duration: 500,
    delay: 100,
    smooth: true,  
    offset: -10,
  };
  const { id } = useParams();
  const db = firebase.firestore();
  const refColl = db.collection("Cursos");
  const [Data] = useOnSnapshotCollection(refColl);
  const [actividad, setActividad] = useState(0);
  function callback(key) {
    console.log(key);
  }
  const siguiente = () => {
    setActividad(actividad + 1);
  };
  const anterior = () => {
    setActividad(actividad - 1);
  };
  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        event.stopPropagation();
      }}
    />
  );
  useEffect(() => {
    scroll.scrollToTop(scrollType);
  }, []);
  const getCourse = (id) => {
    const [Course] = Data.filter((e) => (e.id === id ? e : false));
    return Course;
  };

  const url = (urlVideo) => {
    var idVideo = getYouTubeID(urlVideo);
    console.log(idVideo);
    return `https://www.youtube.com/embed/${idVideo}?autoplay=1&rel=0&showinfo=0&modestbranding=1`;
  };

  const Course = Data && getCourse(id);
  Course && console.log(Course);
  const { clases, descripcion, fecha, titulo } = Course;
  console.log(clases);
  return (
    Course? (
      <Fragment>
        <Row
          gutter={[0, 0]}
          justify="center"
          className="animate__animated animate__fadeIn"
          style={{ margin: "0px 0px 100px 0px" }}
        >
          <Col xs={24} md={17}>
            <div className="Volver">
              <Breadcrumb>
                <Item className="menu-item-breadcum">
                  <Link className="Volver-link" to={`/inicio`}>
                    <span>
                      <HomeOutlined /> Inicio
                    </span>
                  </Link>
                </Item>
                <Item className="menu-item-breadcum">
                  <Link className="Volver-link" to={`/cursos`}>
                    <span>
                      <UserOutlined /> Cursos
                    </span>
                  </Link>
                </Item>
                <Item className="menu-item-breadcum">
                  <Link className="Volver-link" to={`/cursos/${id}`}>
                    <span>
                      {titulo
                        ? titulo.length >= 22
                          ? `${titulo.substr(0, 22)} ....`
                          : titulo
                        : null}
                    </span>
                  </Link>
                </Item>
              </Breadcrumb>
            </div>
            <div className="video">
              {actividad === 0 ? (
                console.log("hola")
              ) : (
                <CaretLeftOutlined onClick={anterior} className="anterior" />
              )}
              <iframe
                src={url(clases[actividad].YoutubeUrl)}
                title={clases[actividad].titulo}
                frameBorder="0"
                allowFullScreen
              />
              {actividad === clases.length - 1 ? (
                console.log("hola")
              ) : (
                <CaretRightOutlined onClick={siguiente} className="siguiente" />
              )}
            </div>
            <Row justify="center">
              <Col xs={0} md={20}>
                <Tabs defaultActiveKey="3" onChange={callback}>
                  <TabPane tab="Descripcion de Actividad" key="3">
                    <Typography.Title level={3}>
                      {clases[actividad].titulo}
                    </Typography.Title>
                    <Typography.Text>
                      {clases[actividad].description}
                    </Typography.Text>
                  </TabPane>
                  <TabPane tab="Descripcion del Curso" key="2">
                    <Typography.Title level={3}>{titulo}</Typography.Title>
                    <Typography.Text>{descripcion}</Typography.Text>
                    <Typography.Text>
                      {fecha.seconds + "-" + fecha.nanoseconds}
                    </Typography.Text>
                  </TabPane>
                </Tabs>
              </Col>
            </Row>
          </Col>
          <Col xs={0} md={7} style={{ padding: "10px", minHeight: "100vh" }}>
            <br />
            <br />
            <br />
            <Typography.Title align="center" level={3}>
              Lista Actividades
            </Typography.Title>
            <Collapse onChange={callback} expandIconPosition="left">
              {clases &&
                clases.map((elemento, index) => (
                  <Panel
                    header={elemento.titulo}
                    key={index}
                    extra={genExtra()}
                  >
                    <div>{elemento.description}</div>
                  </Panel>
                ))}
            </Collapse>
          </Col>
          <Col xs={24} md={0}>
            <Row justify="center">
              <Col xs={22} md={20}>
                <Tabs defaultActiveKey="5" onChange={callback}>
                  <TabPane tab="Descripcion de Actividad" key="5">
                    <Typography.Title level={3}>
                      {clases[actividad].titulo}
                    </Typography.Title>
                    <Typography.Text>
                      {clases[actividad].description}
                    </Typography.Text>
                  </TabPane>
                  <TabPane tab="Descripcion del Curso" key="6">
                    <Typography.Title level={3}>{titulo}</Typography.Title>
                    <Typography.Text>{descripcion}</Typography.Text>
                  </TabPane>
                  <TabPane tab="Lista Actividades" key="8">
                    <Collapse
                      defaultActiveKey={["1"]}
                      onChange={callback}
                      expandIconPosition="left"
                    >
                      {clases &&
                        clases.map((elemento, index) => (
                          <Panel
                            header={elemento.titulo}
                            key={index}
                            extra={genExtra()}
                          >
                            <div>{elemento.description}</div>
                          </Panel>
                        ))}
                    </Collapse>

                  </TabPane>
                </Tabs>
                <br/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Fragment>
    ):<div className="gallery-wait-courses">
    <Spin size="large" />
  </div>
  );
};

export default ActivitiesView;
