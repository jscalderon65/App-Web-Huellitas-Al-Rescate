import React from "react";
import { googleAuth } from "../../Firebase/FirebaseAuth";
import { Link } from "react-router-dom";
import {
  FacebookOutlined,
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
            href="https://www.facebook.com/HuellitasalRescatee"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookOutlined style={{ fontSize: "40px" }} />
          </a>
          <a
            className="a-styles"
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UClKOpjDAxpXgxnNEyaO2adw"
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
          <MailOutlined style={{ fontSize: "30px", marginRight:"20px"}} />
          {"  "}
          huellitasalrescateprae@gmail.com
        </div>
      </div>
      <div>
        <Title level={3} style={{ color: "white", textAlign: "center" }}>
          ¿Dónde nos úbicamos?
        </Title>
        <br />
        <div className="contact-item">
          <PushpinOutlined style={{ fontSize: "30px",marginRight:"20px" }} />
          Cl. 81a Sur #6 Este40, Bogotá
        </div>
        <br />
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.4863325411843!2d-74.10510848523846!3d4.505982896725914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3fa3cafb0a19f9%3A0x8ca4c6c77e58d3ab!2sColegio%20Ofelia%20Uribe%20de%20Acosta!5e0!3m2!1ses-419!2sco!4v1618180171690!5m2!1ses-419!2sco"
          title="maps"
          className="map-styles"
          loading="lazy"
        ></iframe>
      </div>
      <div className="rights-reserved">
        <div>
        <p>© 2021</p>
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
