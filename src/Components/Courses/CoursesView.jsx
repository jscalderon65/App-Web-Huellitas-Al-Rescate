import { Col, Row, Typography,Spin,BackTop } from 'antd';
import { firebase } from "../../Firebase/FirebaseConfig";
import React, { Fragment } from 'react';
import {useOnSnapshotCollection} from "my-customhook-collection";
import CarrouselCourses from './CoursesComponents/CarrouselCourses';
import CardCourse from './CoursesComponents/CardCourse';


const CoursesView = () => {
    const db = firebase.firestore();
    const refColl = db.collection("Cursos");
    const [Data] = useOnSnapshotCollection(refColl);

    return (
        <Fragment>
            <BackTop/>
            <CarrouselCourses />
           {Data&&<Typography.Title style={{ marginTop: "50px" }} align="center">Cursos Disponibles ({Data.length})</Typography.Title>}
            <div style={{ margin: "50px 40px" }}>
                <Row gutter={[48, 48]} justify="center" align="middle">
                    {Data?Data.map((elemento) => {
                        return (
                            <Col key={elemento.id} xs={24} sm={15} md={12} lg={8}>
                                <CardCourse titulo={elemento.titulo} img={elemento.img} id={elemento.id} descripcion={elemento.descripcion} />
                            </Col>
                        )
                    }):<Spin size="large"/>}
                </Row>
            </div>
        </Fragment>
    )
}
export default CoursesView;