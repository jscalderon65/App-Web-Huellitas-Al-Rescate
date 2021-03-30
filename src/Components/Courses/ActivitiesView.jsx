import React, { Fragment, useState } from "react";
import { useParams } from "react-router";
import { useOnSnapshotCollection } from "my-customhook-collection";
import { firebase } from "../../Firebase/FirebaseConfig";
import { Col, Row, Typography, Tabs, Collapse } from "antd";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import getYouTubeID from "get-youtube-id";
const { Panel } = Collapse;
const { TabPane } = Tabs;

const ActivitiesView = () => {
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
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
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
  return (
    Course && (
      <Fragment>
        <Row
          gutter={[0, 0]}
          justify="center"
          style={{ margin: "0px 0px 0px 0px" }}
        >
          <Col xs={24} md={17}>
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
                allowFullscreen
              />
              {actividad === clases.length - 1 ? (
                console.log("hola")
              ) : (
                <CaretRightOutlined onClick={siguiente} className="siguiente" />
              )}
            </div>
            <Row justify="center">
              <Col xs={0} md={20}>
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="Descripcion del Curso" key="1">
                    <Typography.Title level={3}>{titulo}</Typography.Title>
                    <Typography.Text>{descripcion}</Typography.Text>
                    <Typography.Text>
                      {fecha.seconds + "-" + fecha.nanoseconds}
                    </Typography.Text>
                  </TabPane>
                  <TabPane tab="Descripcion de Actividad" key="2">
                    <Typography.Title level={3}>
                      {clases[actividad].titulo}
                    </Typography.Title>
                    <Typography.Text>
                      {clases[actividad].description}
                    </Typography.Text>
                  </TabPane>
                </Tabs>
              </Col>
            </Row>
          </Col>
          <Col
            xs={0}
            md={7}
            style={{ padding: "10px", background: "#29303B", minHeight: "100vh" }}
          >
            <br />
            <Typography.Title align="start" level={3}>
              Lista Actividades
            </Typography.Title>
            <Collapse onChange={callback} expandIconPosition="left">
              {clases &&
                clases.map((elemento) => (
                  <Panel
                    header={elemento.titulo}
                    key={elemento.titulo}
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
                <Tabs defaultActiveKey="3" onChange={callback}>
                  <TabPane tab="Descripcion del Curso" key="1">
                    <Typography.Title level={3}>{titulo}</Typography.Title>
                    <Typography.Text>{descripcion}</Typography.Text>
                  </TabPane>
                  <TabPane tab="Descripcion de Actividad" key="2">
                    <Typography.Title level={3}>
                      {clases[actividad].titulo}
                    </Typography.Title>
                    <Typography.Text>
                      {clases[actividad].description}
                    </Typography.Text>
                  </TabPane>
                  <TabPane tab="Lista Actividades" key="3">
                    <Collapse
                      defaultActiveKey={["1"]}
                      onChange={callback}
                      expandIconPosition="left"
                    >
                      {clases &&
                        clases.map((elemento) => (
                          <Panel
                            header={elemento.titulo}
                            key={elemento.titulo}
                            extra={genExtra()}
                          >
                            <div>{elemento.description}</div>
                          </Panel>
                        ))}
                    </Collapse>
                  </TabPane>
                </Tabs>
              </Col>
            </Row>
          </Col>
        </Row>
      </Fragment>
    )
  );
};

export default ActivitiesView;
