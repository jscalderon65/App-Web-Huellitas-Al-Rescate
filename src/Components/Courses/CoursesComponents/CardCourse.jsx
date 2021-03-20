import { Button, Divider, Typography } from 'antd';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router';

const CardCourse = ({ titulo, descripcion, img,id }) => {
    const history = useHistory();

    return (
        <Fragment>
            <Divider orientation="left">
                <Typography.Title level={3}>{titulo}</Typography.Title>
            </Divider>

            <div className="card-c" style={{ backgroundImage: `url("${img}")` }} >
                <div className="card-course-content">
                    <div className="contente">
                        <Typography.Title level={2} style={{ color: "white" }} align="center">{titulo}</Typography.Title>
                        <Typography.Text style={{ color: "white" }}>{descripcion} </Typography.Text>
                        <br />
                        <Button className="button" onClick={() => history.push(`/cursos/${id}`)} type="primary" >Ver Curso</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default CardCourse;