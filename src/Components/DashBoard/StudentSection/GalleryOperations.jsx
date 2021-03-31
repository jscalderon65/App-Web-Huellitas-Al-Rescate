import React from "react";
import { Button, Typography } from "antd";
import GalleryCard from "./GalleryCard";
import {
    FileAddOutlined,
  } from "@ant-design/icons";
const GalleryOperations = () => {
  const { Title } = Typography;
  return (
    <div className="gallery-operations-container">
      <div className="gallery-operations-creation-zone">
        <Title style={{ textAlign: "center" }} level={3}>
          Configuración de contenido multimedia
        </Title>
        <Button type="primary" size="large"><FileAddOutlined/>Agregar Imagen</Button>
      </div>
      <div className="gallery-operations-cards-container">
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </div>
    </div>
  );
};

export default GalleryOperations;
