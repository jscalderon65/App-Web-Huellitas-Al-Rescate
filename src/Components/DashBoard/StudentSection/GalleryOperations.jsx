import React from "react";
import { Typography, Spin, BackTop } from "antd";
import { firebase } from "../../../Firebase/FirebaseConfig";
import { useOnSnapshotCollection } from "my-customhook-collection";
import GalleryCard from "./GalleryCard";
import AddImageModal from "./AddImageModal";
const GalleryOperations = () => {
  const { Title } = Typography;
  const db = firebase.firestore();
  const refColl = db.collection("Galería");
  const [Data] = useOnSnapshotCollection(refColl);
  return (
    <>
    <BackTop/>
    <div className="gallery-operations-container animate__animated animate__fadeIn" >
      <div className="gallery-operations-creation-zone"  style={{background:"white"}}>
        <Title style={{ textAlign: "center" }} level={3}>
          Configuración de contenido multimedia
        </Title>
        <AddImageModal />
        <Title level={3}>Imágenes {Data&&`(${Data.length})`}</Title>
      </div>
      {Data ? (
        <div className="gallery-operations-cards-container"  style={{background:"white"}}>
          {Data.map((item) => (
            <GalleryCard key={item.id} Data={item} />
          ))}
        </div>
      ) : (
        <div className="courses-dashboard-spin">
          <Spin size="large" />
        </div>
      )}
    </div>
    </>
  );
};

export default GalleryOperations;
