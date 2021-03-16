import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Image, Typography, Divider } from "antd";
const { Title } = Typography;
const DogCard = ({src,name,description, description2}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
  return (
    
    <div className="dog-card">
      <div className="dog-card-image">
        <Image
          style={{ borderRadius: "100%", width: "250px", height: "250px"}}
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
        <p
          style={{ textAlign: "center", margin: "auto"}}
        >
          <b>
            {description}
          </b>
        </p>
        <br />
        <div style={{ textAlign: "center", padding: "10px" }}>
          <Button id="profile-buttons" style={{ width: "40%" }}  size="large " onClick={showModal}>
            Ver más
          </Button>
          <Modal style={{margin: "auto", fontWeight:'bold', textAlign:'justify'}}  title="Mi Historia" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}  >
            <p>{description2}</p>
          </Modal>
         
          
        </div>
      </div>
    </div>
    
  );
};

export default DogCard;
