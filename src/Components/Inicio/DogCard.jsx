import React from "react";
import { Image, Typography, Divider, Button } from "antd";
const { Title } = Typography;
const DogCard = ({src,name,description}) => {
  return (
    <div className="dog-card">
      <div className="dog-card-image">
        <Image
          style={{ borderRadius: "100%", width: "250px", height: "250px"}}
          src={src}
          alt="picsum"
        />
      </div>
      <br />
      <div className="dog-card-content">
        <Divider style={{ borderColor: "#423834" }} dashed>
          <Title style={{ color: "#423834" }}>{name}</Title>
        </Divider>
        <br />
        <p
          style={{ textAlign: "center", margin: "auto"}}
        >
          <b>
            {description}
          </b>
        </p>
        <br />
        <div style={{ textAlign: "center", padding: "10px" }}>
          <Button id="profile-buttons" style={{ width: "40%" }}  size="large">
            Ver más
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DogCard;
