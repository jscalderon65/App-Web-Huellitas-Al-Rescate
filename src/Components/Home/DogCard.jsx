import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Typography, Divider } from "antd";
import ContentModal from "./ContentModal";

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
    <div className="dog-card izquierda">
      <div className="dog-card-image">
        <img
          style={{
            boxShadow:" 2px 2px 10px rgba(0,0,0,.2)",
            borderRadius: "100%",
            width: "250px",
            height: "250px",
            objectFit: "cover",
          }}
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
              width="auto"
              style={{ background: "rgba(0,0,0,.1)" }}
              bodyStyle={{
                padding: "0px",
                background: "rgba(0,0,0,.1)",
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ContentModal
                src={src}
                name={name}
                showModal={showModal}
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
