import React, { Fragment } from "react";
import { firebase } from "../../Firebase/FirebaseConfig";
import { UserGoogleAuth } from "../../Firebase/FirebaseAuth";
import { CommentBoxApp, Login } from "my-comment-box-app";
import { useParams } from "react-router";
import { Col, Row, Typography, Button } from "antd";
import BannerCourse from "./CoursesComponents/BannerCourse";
import ClasesLists from "./CoursesComponents/ClasesLists";
import data from "./data";

const DetallesCourseView = (props) => {
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
          <div style={{ marginTop: "20px" }}>
            <Button onClick={UserGoogleAuth} type="primary" size="large">
              Entra con Google para comentar
            </Button>
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
