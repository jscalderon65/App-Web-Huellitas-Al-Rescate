import { Button, Divider, Typography } from 'antd';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router';

const CardCourse = ({ titulo, descripcion, img, id }) => {// limite de titulo 36 caracteres
    const history = useHistory();

    return (
        <Fragment>
            <div className="card-c" style={{ backgroundImage: `url("${img}")` }} >
                <div className="card-course-content">
                    <div className="contente">
                        <Typography.Title level={3} style={{ color: "white" }} align="center">{titulo}</Typography.Title>
                        <Divider />
                        <div className="card-course-button"><Button  onClick={() => history.push(`/cursos/${id}`)} type="primary" >Ver Curso</Button></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default CardCourse;