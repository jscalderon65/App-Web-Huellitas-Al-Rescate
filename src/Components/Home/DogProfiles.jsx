import React from "react";
import DogCard from "./DogCard.jsx";
import { DogsInfo } from "./StaticData/DogsInfo";
import { Typography, Divider } from "antd";
import "antd/dist/antd.css";
const DogProfiles = () => {
  const { Title } = Typography;
  return (
    <div className="dog-profiles-container">
      <div className="dog-profiles-title">
        <Title
          style={{ color: "#423834", textAlign: "center", fontSize: "46px" }}
        >
          ¡Conoce a nuestros mejores amigos!
        </Title>
        <Divider style={{ borderColor: "#423834" }}></Divider>
      </div>
      <br />
      <div className="dog-profiles-cards">
        {DogsInfo.map((DogProfile) => (
          <DogCard key={DogProfile.name} {...DogProfile} />
        ))}
      </div>
    </div>
  );
};

export default DogProfiles;
