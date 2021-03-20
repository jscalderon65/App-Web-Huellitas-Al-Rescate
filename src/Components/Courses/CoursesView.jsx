import { Col, Row, Typography } from 'antd';
import React, { Fragment } from 'react';
import CarrouselCourses from './CoursesComponents/CarrouselCourses';
import CardCourse from './CoursesComponents/CardCourse';

import data from './data';

const CoursesView = (props) => {

    return (
        <Fragment>
            <CarrouselCourses />
            <Typography.Title level={1} style={{ marginTop: "50px" }} align="center">Cursos Disponibles</Typography.Title>
            <div style={{ margin: "50px 40px" }}>
                <Row gutter={[48, 48]} justify="center" align="middle">
                    {data.map((elemento) => {
                        return (
                            <Col key={elemento.id} xs={24} sm={15} md={12} lg={8}>
                                <CardCourse titulo={elemento.titulo} img={elemento.img} id={elemento.id} descripcion={elemento.descripcion} />
                            </Col>
                        )
                    })}

                </Row>
            </div>

        </Fragment>
    )
}
export default CoursesView;