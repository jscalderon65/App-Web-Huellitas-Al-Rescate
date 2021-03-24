import React, { Fragment } from "react";
import { firebase } from "../../Firebase/FirebaseConfig";
import { UserGoogleAuth, logout } from "../../Firebase/FirebaseAuth";
import { CommentBoxApp } from "../CommentSection/Components";
import { useFirebaseUser } from "my-customhook-collection";
import { useParams } from "react-router";
import { Col, Row, Typography, Button, Divider } from "antd";
import BannerCourse from "./CoursesComponents/BannerCourse";
import ClasesLists from "./CoursesComponents/ClasesLists";
import data from "./data";

const DetallesCourseView = (props) => {
  const [isOn] = useFirebaseUser(firebase);
  const { Title } = Typography;
  const { id } = useParams();
  const getCourse = (idCourse) => {
    //Obteniendo curso de los datos
    return data.filter((e) => (e.id === idCourse ? e : false));
  };
  const [curso] = getCourse(id);

  return (
    <Fragment>
      <BannerCourse
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
        <Col xs={20}>
          <Title>Sección de comentarios</Title>
          <Divider></Divider>
          <div>
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
            <CommentBoxApp
              CollectionName={`Comments of ${curso.id}`}
              firebase={firebase}
            />
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};
export default DetallesCourseView;
