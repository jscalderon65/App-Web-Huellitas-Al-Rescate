import React, { Fragment } from 'react';
import { Button, Col, Rate, Row, Typography } from 'antd';
const BannerCourse = ({ title = "Titulo", description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos non consequuntur quidem consectetur deserunt dolores ab numquam, pariatur adipisci!", img="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?cs=srgb&dl=pexels-pixabay-207691.jpg&fm=jpg" }) => {
    const { Title, Text } = Typography;
    return (
        <Fragment>
            <Row justify="center" gutter={[48, 48]} style={{ height: "auto", padding: "100px 50px", background: "#423834" }}>
                <Col xs={20} md={12}>
                    <Title level={1} style={{ color: "white" }}>{title}</Title>
                    <Text style={{ color: "white" }}>{description}</Text>
                    <div style={{ marginTop: "20px" }}>
                        <Text style={{ color: "white", marginTop: "20px" }}>Calificacion : </Text>
                        <br />
                        <Rate disabled defaultValue={4.5} />
                        <br />
                    </div>
                    <Button type="primary" style={{ marginTop: "20px" }}>Empezar el Curso</Button>
                </Col>
                <Col xs={20} md={8}>
                    <img src={img} width="100%" alt="" />
                </Col>
            </Row>
        </Fragment>
    )
}
export default BannerCourse;