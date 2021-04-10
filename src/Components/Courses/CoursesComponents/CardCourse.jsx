import { Button, Divider, Typography } from "antd";
import React, { Fragment } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";

const CardCourse = ({ titulo, img, id }) => {
  // limite de titulo 36 caracteres
  const history = useHistory();

  return (
    <Fragment>
      <div className="card-c" style={{ backgroundImage: `url("${img}")` }}>
        <div className="card-course-content">
          <div className="contente">
            <Typography.Title
              level={4}
              style={{ color: "white" }}
              align="center"
            >
              {titulo}
            </Typography.Title>
            <Divider />
            <div className="card-course-button">
              <Button
                className="btn-primary"
                onClick={() => history.push(`/cursos/${id}`)}
                type="primary"
              >
                Ver Curso <ArrowRightOutlined />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default CardCourse;
