import React from "react";
import { Image, Typography, Button, Divider } from "antd";
import { ClockCircleOutlined, FacebookFilled } from "@ant-design/icons";
const ModalInfo = ({ Data, onClose }) => {
  const { Title } = Typography;
 
  return (
    <div className="modal-gallery-content">
      <Image
        src={Data.img}
        style={{ height: "300px", objectFit: "cover"}}
        alt={Data.imgName}
      />
      <div className="modal-gallery-info">
        <div className="modal-gallery-date">
          <Title level={4}>
            <ClockCircleOutlined /> {Data.date}
          </Title>
        </div>
        <Divider />
        <div className="modal-gallery-description">
          <Title style={{
            wordBreak: "break-all"
          }} level={4}>{Data.description}</Title>
        </div>
        <br />
        <div className="modal-gallery-buttons">
          <a
            href="https://www.facebook.com/HuellitasalRescatee"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookFilled style={{ fontSize: "30px", color: "black" }} />
          </a>
          <Button onClick={onClose} danger>
            Salir
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ModalInfo;
