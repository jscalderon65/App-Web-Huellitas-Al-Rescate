import React, { Fragment, useEffect, useState } from "react";
import { firebase } from "../../Firebase/FirebaseConfig";
import { UserGoogleAuth, logout } from "../../Firebase/FirebaseAuth";
/* import { CommentBoxApp } from "../CommentSection";*/
import { CommentBoxApp } from "my-comment-box-app";
import {
  useFirebaseUser,
  useOnSnapshotCollection,
} from "my-customhook-collection";
import { useParams } from "react-router";
import { Col, Row, Typography, Button, Divider } from "antd";
import BannerCourse from "./CoursesComponents/BannerCourse";
import ClasesLists from "./CoursesComponents/ClasesLists";
/* import data from "./data"; */

const DetallesCourseView = () => {
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

  return (
    Data && (
      <Fragment>
        <BannerCourse
          id={id}
          title={curso.titulo}
          description={curso.descripcion}
          img={curso.img}
        />
        <ClasesLists list={curso.clases} />
        <Row
          justify="center"
          gutter={[48, 48]}
          style={{
            height: "auto",
            padding: "0px 50px 50px",
            background: "white",
          }}
        >
          <Col md={20}>
            <Title>Sección de comentarios</Title>
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
                >
                  Entra con Google para comentar
                </Button>
              </div>
            )}
            <div>
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
    )
  );
};
export default DetallesCourseView;
