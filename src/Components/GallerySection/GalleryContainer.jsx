import React, { useState } from "react";
import { Modal, Button, Spin} from "antd";
import { firebase } from "../../Firebase/FirebaseConfig";
import { useOnSnapshotCollection } from "my-customhook-collection";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const GalleryContainer = () => {
  const db = firebase.firestore();
  const refColl = db.collection("Galería");
  const [Data] = useOnSnapshotCollection(refColl);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ModalData, setModalData]= useState({});

  const showModal = (DataImg) => {
    setIsModalVisible(true);
    setModalData(DataImg);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setModalData({});
  };


  return Data ? (
    <>
    <div className="gallery-container">
      <ResponsiveMasonry
        className="masonry"
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry gutter="15px" columnsCount={3}>
          {Data &&
            Data.map((item) => (
              <>                
              <img
                src={item.img}
                key={item.imgName}
                alt={item.imgName}
                onClick={()=>showModal(item)}
                className="gallery__img animate__animated animate__fadeIn"
              />
              </>
            ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
    <Modal
        title={null}
        closable={false}
        footer={[
            <Button onClick={handleCancel} size="large" danger> Salir</Button>
        ]}
        visible={isModalVisible}
        onCancel={handleCancel}
        centered
        bodyStyle={{ padding: "0px" }}
        width="auto"
      >
        <div className="modal-gallery-content">
        {ModalData.imgName}
        </div>
      </Modal>
    </>
  ) : (
    <div className="gallery-wait">
      <Spin size="large" />
    </div>
  );
};
export default GalleryContainer;
