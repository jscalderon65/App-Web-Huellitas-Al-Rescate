import React, { Fragment } from 'react';
import { Col, Row, Timeline, Typography } from 'antd';
const ClasesLists = ({ list }) => {
    const { Title } = Typography;
    const { Item } = Timeline;
    return (
        <Fragment>
            <Row justify="center" gutter={[48, 48]} style={{ height: "auto", padding: "50px 50px", background: "white" }}>
                <Col xs={20}>
                    <Title >Lista de Clases</Title>
                    <div style={{ marginTop: "50px" }}>
                        <Timeline>
                            {
                                list.map((e) => (
                                    <Item key={e} >{e}</Item>
                                ))
                            }
                        </Timeline>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}
export default ClasesLists;