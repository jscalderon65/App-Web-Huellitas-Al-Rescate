import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Image, Typography, Divider } from "antd";
import ContentModal from "./ContentModal";

const DogCard = ({
  src,
  name,
  ExternalDescription,
  InternalDescription,
  galeryArray
}) => {
  const { Title } = Typography;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <div className="dog-card izquierda" >
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
              width="100%"
              style={{borderRadius:"50%"}}
              bodyStyle={{ padding: "0px",background:"rgba(0,0,0,.2)" }}
            >
              <ContentModal src={src}
                name={name}
                ExternalDescription={ExternalDescription}
                InternalDescription={InternalDescription}
                galeryArray={galeryArray}
                />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogCard;