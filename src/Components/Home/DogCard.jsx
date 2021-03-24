import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Image, Typography, Divider } from "antd";
const { Title } = Typography;
const DogCard = ({ 
  src, 
  name, 
  ExternalDescription, 
  InternalDescription 
  }) => {
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className="dog-card">
      <div className="dog-card-image">
        <Image
          style={{borderRadius: "100%", width: "250px", height: "250px" }}
          src={src}
          alt="picsum"
/*        fallback
 */        />
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
        <br/>
          <Button
            id="profile-buttons"
            style={{ width: "40%" }}
            size="large "
            onClick={showModal}
          >
            Ver más
          </Button>
          <Modal
            centered
            title={null}
            footer={null}
            closable={false}
            onCancel={showModal}
            bodyStyle={{ backgroundColor: "white" }}
            visible={isModalVisible}
            width="60vw"
          >
            <div>
              <p>{InternalDescription}</p>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default DogCard;
