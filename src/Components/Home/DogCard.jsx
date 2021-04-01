import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Image, Typography, Divider, Carousel } from "antd";
const DogCard = ({
  src,
  name,
  ExternalDescription,
  InternalDescription,
  galeryArray,
}) => {
  const { Title } = Typography;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <div className="dog-card">
      <div className="dog-card-image">
        <Image
          style={{ borderRadius: "100%", width: "250px", height: "250px" }}
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
        <div style={{ textAlign: "center" }}>
          <p style={{ textAlign: "center", margin: "auto" }}>
            <b>{ExternalDescription}</b>
          </p>
          <br />
          <Button
            id="profile-buttons"
            style={{ width: "40%" }}
            size="large "
            onClick={showModal}
          >
            Ver más
          </Button>
          <div>
            <Modal
              centered
              title={null}
              footer={null}
              closable={false}
              onCancel={showModal}
              visible={isModalVisible}
              width="80vw"
            >
              <div className="dog-card-modal">
                <Carousel autoplay>
                  <div>
                    <Image
                      preview={false}
                      className="dog-card-modal-image"
                      src={galeryArray[0]}
                      alt="picsum"
                    />
                  </div>
                  <div>
                    <Image
                      preview={false}
                      className="dog-card-modal-image"
                      src={galeryArray[1]}
                      alt="picsum"
                    />
                  </div>
                </Carousel>
                <div className="dog-card-modal-description">
                  <p>{InternalDescription}</p>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogCard;
