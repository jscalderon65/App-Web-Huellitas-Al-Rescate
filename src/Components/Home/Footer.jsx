import React from "react";
import { googleAuth } from "../../Firebase/FirebaseAuth";
import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  MailOutlined,
  YoutubeOutlined,
  PushpinOutlined,
  GithubOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Typography, Button } from "antd";
const Footer = () => {
  const { Title } = Typography;
  return (
    <div className="footer_container">
      <div>
        <Title level={3} style={{ color: "white", textAlign: "center" }}>
          Huellitas al rescate
        </Title>
        <br />
        <ul>
          <li className="li-styles">
            <Link className="a-styles" to="/inicio">
              Inicio
            </Link>
          </li>
          <li className="li-styles">
            <Link className="a-styles" to="/estudiantes">
              Estudiantes
            </Link>
          </li>
          <li className="li-styles">
            <Link className="a-styles" to="/cursos">
              Cursos
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Title level={3} style={{ color: "white", textAlign: "center" }}>
          Redes sociales
        </Title>
        <br />
        <div className="social-networks">
          <a
            className="a-styles"
            href="https://ant.design/components/icon/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookOutlined style={{ fontSize: "40px" }} />
          </a>
          <a
            className="a-styles"
            href="https://ant.design/components/icon/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramOutlined style={{ fontSize: "40px" }} />
          </a>
          <a
            className="a-styles"
            target="_blank"
            rel="noreferrer"
            href="https://ant.design/components/icon/"
          >
            <YoutubeOutlined style={{ fontSize: "40px" }} />
          </a>
        </div>
      </div>
      <div>
        <Title level={3} style={{ color: "white", textAlign: "center" }}>
          ¿Comó contactarnos?
        </Title>
        <br />
        <div className="contact-item">
          <WhatsAppOutlined style={{ fontSize: "30px" }} />
          +57 322 874 1223
        </div>
        <br />
        <div className="contact-item">
          <MailOutlined style={{ fontSize: "30px" }} />
          ejemplo@ejemplo.com
        </div>
      </div>
      <div>
        <Title level={3} style={{ color: "white", textAlign: "center" }}>
          ¿Dónde nos úbicamos?
        </Title>
        <div className="contact-item">
          <PushpinOutlined style={{ fontSize: "30px" }} />
          calle 80 c sur #78-20
        </div>
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15906.596930896832!2d-74.0652613!3d4.656487499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1615434516632!5m2!1ses!2sco"
          title="maps"
          className="map-styles"
          loading="lazy"
        ></iframe>
      </div>
      <div className="rights-reserved">
        <div>
          © 2021
          <a
            className="a-styles"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/JairPrada"
          >
            <GithubOutlined style={{ fontSize: "20px" }} />
            JairPrada
          </a>
          <a
            className="a-styles"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jscalderon65"
          >
            <GithubOutlined style={{ fontSize: "20px" }} />
            SebastianCalderon
          </a>
          <a
            className="a-styles"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/GeralPinzon"
          >
            <GithubOutlined style={{ fontSize: "20px" }} />
            Geralpinzon
          </a>
          <br/>
          <Button shape="circle" onClick={googleAuth}>
            <SettingOutlined />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
