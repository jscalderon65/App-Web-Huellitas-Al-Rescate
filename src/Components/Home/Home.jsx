import React, { Fragment, useEffect, useState } from "react";
import {
  WhatsAppOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  InfoCircleOutlined,
  CaretRightOutlined,
  CaretLeftOutlined,
} from "@ant-design/icons";
import { BackTop, Affix, Tooltip, Modal, Typography, Divider } from "antd";
import { useMediaQuery } from "my-customhook-collection";
import Carrousel from "./Carrousel";
import Entry from "./Entry";
import DogProfiles from "./DogProfiles";
import mostrar from "../../Animated";
import LogoUcatolica from "../../Assets/LogoUcatolica.png";
const descripcion = [
  {
    somos:
      "Somos un Proyecto ambiental escolar que tiene como objetivo generar un proceso de aprendizaje desde la acción, para fortalecer la empatía y el cuidado sobre las relaciones con otras especies animales, entendiendo las relaciones del ser humano como ser de la naturaleza en la comunidad educativa, donde los estudiantes son agentes multiplicadores de la información en sus diferentes ámbitos personales, familiares y sociales; y así se evidencie su papel como actores sociales activos de la comunidad. ",
  },
  {
    somos:
      "Se gestó desde inicio de año un proyecto con la colaboración del área de humanidades, el proyecto de biblioteca, y Huellitas al Rescate donde a través de la lectoescritura se acercaba a los niños a las bibliotecas, a la lectura, y con la excusa de nuestras mascotas Ofelia, Manchas y Paloma se realiza un curso de dibujo desde cuentos que sensibilicen a los niños sobre la relación entre humanos y otros animales",
  },
  {
    somos:
      "El Instituto de Protección y Bienestar Animal brinda su apoyo al proyecto, con la capacitación de voluntariado para los estudiantes sobre tenencia responsable, capacitación para adultos de marco legal, se solicitó hacer una jornada de esterilización con chip en el sector. ",
  },
];
const Home = () => {
  const { Title, Text } = Typography;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const mediaQuery = useMediaQuery("(max-width: 460px)");
  const [socialNetworks, SetSocialNetworks] = useState(mediaQuery);
  const socialNetworksChange = () => {
    SetSocialNetworks(!socialNetworks);
  };
  useEffect(() => {
    window.addEventListener("scroll", mostrar);
  }, []);
  const OpenPage = (url) => {
    window.open(url);
  };
  return (
    <Fragment>
      <Affix offsetTop={120}>
        {socialNetworks ? (
          <Tooltip placement="leftTop" title={"Redes sociales"}>
            <div
              className="show-button animate__animated animate__fadeIn"
              onClick={socialNetworksChange}
            >
              <CaretLeftOutlined style={{ fontSize: "40px" }} />
            </div>
          </Tooltip>
        ) : (
          <div className="social-networks-section-container animate__animated animate__fadeIn">
            <div
              onClick={() =>
                OpenPage("https://api.whatsapp.com/send?phone=573012327807")
              }
            >
              <WhatsAppOutlined style={{ fontSize: "40px" }} />
            </div>
            <div>
              <FacebookOutlined
                onClick={() =>
                  OpenPage("https://www.facebook.com/HuellitasalRescatee")
                }
                style={{ fontSize: "40px" }}
              />
            </div>
            <div
              onClick={() =>
                OpenPage(
                  "https://www.youtube.com/channel/UClKOpjDAxpXgxnNEyaO2adw"
                )
              }
            >
              <YoutubeOutlined style={{ fontSize: "40px" }} />
            </div>
            <Tooltip placement="leftTop" title={"Información"}>
              <div onClick={showModal}>
                <InfoCircleOutlined style={{ fontSize: "40px" }} />
              </div>
            </Tooltip>
            <Tooltip placement="leftTop" title={"Ocultar"}>
              <div onClick={socialNetworksChange}>
                <CaretRightOutlined style={{ fontSize: "40px" }} />
              </div>
            </Tooltip>
          </div>
        )}
      </Affix>
      <BackTop />
      <Carrousel />
      <Entry
        title="¿ Quienes Somos ?"
        color="primary"
        image="../../Fotos/Somos.png"
        description={descripcion[0].somos}
      />
      <Entry
        title="¿ Nuestros Procesos ?"
        color="white"
        image="../../Fotos/Procesos.png"
        description={descripcion[1].somos}
      />
      <Entry
        title="Nuestros aliados"
        color="secondary"
        image="../../Fotos/Aliados.svg"
        description={descripcion[2].somos}
      />
      <DogProfiles />
      <Modal
        centered
        title={null}
        closable={true}
        footer={null}
        onCancel={handleCancel}
        visible={isModalVisible}
        width="auto"
        bodyStyle={{
          paddingTop: "10px",
        }}
      >
        <div className="info-home-modal-container">
          <div>
            <Title level={3} align="center">
              Acerca del proyecto
            </Title>
            <Divider />
            <div style={{ textAlign: "justify", padding: "10px" }}>
              <Text strong>
                Esta aplicación web fue desarrollada por estudiantes de
                ingeniería de sistemas y computación de la universidad Católica
                de Colombia, con el fin de apoyar el proyecto escolar y
                ambiental "Huellitas al rescate" del colegio Ofelia Uribe de
                Acosta.
                <br />
                <br />
                Los repositorios de GitHub de los estudiantes encargados del
                proyecto se encuentran en el footer de la página, todos los
                derechos reservados 2021.
              </Text>
            </div>
          </div>
          <div>
            <img
              onClick={()=>window.open("https://ucatolica.edu.co")}
              src={LogoUcatolica}
              alt="ucatolica"
              width="215px"
              height="50px"
              style={{objectFit:"cover",cursor:"pointer"}}
            ></img>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};
export default Home;
