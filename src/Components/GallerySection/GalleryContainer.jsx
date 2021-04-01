import React from "react";
import {Spin} from 'antd';
import { firebase } from "../../Firebase/FirebaseConfig";
import { useOnSnapshotCollection } from "my-customhook-collection";
import ModalInfo from './ModalInfo';
const GalleryContainer = () => {
  const db = firebase.firestore();
  const refColl = db.collection("Galería");
  const [Data] = useOnSnapshotCollection(refColl);
  return Data ? (
    <div className="gallery-container">
      {Data &&
        Data.map((item) => (
          <div key={item.id} className="gallery__item animate__animated animate__fadeIn">
            <img src={item.img} alt={item.imgName} className="gallery__img" />
            <ModalInfo Data={item}/>
          </div>
        ))}
    </div>
  ) : (
    <div className="gallery-wait">
        <Spin size="large"/>
    </div>
  );
};
export default GalleryContainer;
