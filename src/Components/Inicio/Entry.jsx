import { Col, Image, Row, Typography } from "antd";
import React from "react";
const Entry = ({
  color,
  title = "Titulo",
  description = "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi minus ipsa iure laboriosam soluta sint itaque unde voluptatum recusandae. Soluta voluptatem maxime laudantium nam aspernatur sunt cumque consequuntur corrupti, voluptate recusandae id velit magni totam aperiam exercitationem reprehenderit, eveniet laborum repellendus quo, accusantium vel. Saepe possimus laborum quas eius perspiciatis",
  image = "https://images.pexels.com/photos/545063/pexels-photo-545063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
}) => {
  const {Title}=Typography;
  return (
    <div className={`entry ${color}`}>
      <Row spacing={[48, 48]} align="middle">
        <Col xs={24} md={12}>
          <Row align="center">
            <Col md={24}>
              <strong>
                <Title
                  style={{
                    color: color === "white" ? "#423834" : "white",
                    textAlign: "center",fontSize:"46px"
                  }}
                >
                  {title}
                </Title>
              </strong>
            </Col>
            <Col md={18}>
              <p>{description}</p>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12}>
          <div className="marco">
            <Image src={image} width="100%" alt={title} />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Entry;
