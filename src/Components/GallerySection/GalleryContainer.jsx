import React, { useState } from "react";
import ModalInfo from "./ModalInfo";
import { Modal, Spin, Typography, BackTop, Empty } from "antd";
import { firebase } from "../../Firebase/FirebaseConfig";
import { useOnSnapshotCollection } from "my-customhook-collection";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import BannerGallery from "./BannerGallery";
const GalleryContainer = () => {
  const { Title } = Typography;
  const db = firebase.firestore();
  const refColl = db.collection("Galería");
  const [Data] = useOnSnapshotCollection(refColl);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ModalData, setModalData] = useState({});

  const showModal = (DataImg) => {
    setIsModalVisible(true);
    setModalData(DataImg);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setModalData({});
  };

  return (
    <>
      <BackTop />
      <BannerGallery />
      <br />
      {Data ? (
        Data.length > 0 ? (
          <>
            <div className="gallery-container">
              <Title
                style={{ marginTop: "50px", marginBottom: "40px" }}
                align="center"
              >
                Contenido destacado
              </Title>
              <ResponsiveMasonry
                className="masonry"
                columnsCountBreakPoints={{ 350: 1,500:2, 750: 3, 900: 4 }}
              >
                <Masonry gutter="15px" columnsCount={4}>
                  {Data &&
                    Data.reverse().map((item) => (
                      <img
                        loading="lazy"
                        src={item.img}
                        key={item.imgName}
                        alt={item.imgName}
                        onClick={() => showModal(item)}
                        className="gallery__img animate__animated animate__fadeIn"
                      />
                    ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
            <Modal
              title={null}
              closable={false}
              footer={null}
              visible={isModalVisible}
              onCancel={handleCancel}
              centered
              bodyStyle={{ padding: "0px" }}
              width="auto"
            >
              <ModalInfo Data={ModalData} onClose={handleCancel} />
            </Modal>
          </>
        ) : (
          <div style={{ background: "white", margin: "20px", padding: "20px",boxShadow:"2px 2px 10px rgba(0,0,0,.2)" }}>
            <Title
              style={{ marginTop: "30px", marginBottom: "40px" }}
              align="center"
            >
              Contenido destacado
            </Title>
            <Empty />
          </div>
        )
      ) : (
        <div className="gallery-wait">
          <Spin size="large" />
        </div>
      )}
    </>
  );
};
export default GalleryContainer;
