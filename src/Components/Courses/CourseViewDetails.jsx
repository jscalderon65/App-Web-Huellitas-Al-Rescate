import React, { Fragment, useEffect, useState } from "react";
import { firebase } from "../../Firebase/FirebaseConfig";
import { UserGoogleAuth, logout } from "../../Firebase/FirebaseAuth";
import { CommentBoxApp } from "my-comment-box-app";
import { animateScroll as scroll} from "react-scroll";
import {
  useFirebaseUser,
  useOnSnapshotCollection,
} from "my-customhook-collection";
import { useParams } from "react-router";
import { Col, Row, Typography, Button, Divider } from "antd";
import BannerCourse from "./CoursesComponents/BannerCourse";
import ClasesLists from "./CoursesComponents/ClasesLists";
import Course404 from "./Course404";

const DetallesCourseView = () => {  
  const scrollType = {
  duration: 500,
  delay: 100,
  smooth: true,  
  offset: -10,
};
  const db = firebase.firestore();
  const refColl = db.collection("Cursos");
  const [Data] = useOnSnapshotCollection(refColl);
  const [curso, setCurso] = useState([]);
  const [isOn] = useFirebaseUser(firebase);
  const { Title } = Typography;
  const { id } = useParams();
  const getCourse = (idCourse) => {
    //Obteniendo curso de los datos
    return Data.filter((e) => (e.id === idCourse ? e : false));
  };
  Data && getCourse(id);
  useEffect(() => {
    Data && setCurso(getCourse(id)[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Data]);
  useEffect(() => {
    scroll.scrollToTop(scrollType);
  }, []);
  console.log(curso);
  return Data && curso ? (
    <Fragment>
      <BannerCourse
        fecha={curso.fecha}
        id={id}
        title={curso.titulo}
        description={curso.descripcion}
        img={curso.img}
        clases={curso.clases}
      />

      <ClasesLists list={curso.clases} />
      <Row
        style={{
          height: "auto",
          display: "flex",
          justifyContent: "center",
          background: "white",
        }}
      >
        <Col md={24}>
          <Title align="center">Sección de comentarios</Title>
          <Divider></Divider>
          {isOn ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                style={{ textAlign: "center" }}
                onClick={logout}
                type="primary"
                size="large"
                danger
              >
                Cerrar sesión
              </Button>
            </div>
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                style={{ margin: "auto" }}
                onClick={UserGoogleAuth}
                type="primary"
                size="large"
                className="btn-primary"
              >
                Entra con Google para comentar
              </Button>
            </div>
          )}
          <div
            style={{
              width: "90vw",
              margin: "auto",
            }}
          >
            {curso.id && (
              <CommentBoxApp
                CollectionName={`${curso.id}`}
                firebase={firebase}
              />
            )}
          </div>
        </Col>
      </Row>
    </Fragment>
  ) : (
    <Course404 />
  );
};
export default DetallesCourseView;
