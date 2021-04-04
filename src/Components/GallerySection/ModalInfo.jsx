import React, { useState } from "react";
import { Modal, Image, Typography,Button } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
const ModalInfo = ({ Data }) => {
  const { Title, Text } = Typography;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal} className="gallery-info">
        Ver más
      </Button>
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
          <Image
            style={{ width: "200px", height: "100%", objectFit: "cover" }}
            src={Data.img}
          />

          <div>
            <Title level={5}>
              <Text keyboard>
                <ClockCircleOutlined /> {Data.date}
              </Text>
            </Title>
          </div>
          <div>
            <Title level={5}>
              <Text strong>{Data.description}</Text>
            </Title>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalInfo;
