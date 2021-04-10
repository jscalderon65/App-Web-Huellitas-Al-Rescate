import React, { Fragment, useEffect, useState } from "react";
import {
  WhatsAppOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  InfoCircleOutlined,
  CaretRightOutlined,
  CaretLeftOutlined,
} from "@ant-design/icons";
import { BackTop, Affix, Tooltip } from "antd";
import { useMediaQuery } from "my-customhook-collection";
import Carrousel from "./Carrousel";
import Entry from "./Entry";
import DogProfiles from "./DogProfiles";
import mostrar from "../../Animated";
const Home = () => {
  const mediaQuery = useMediaQuery("(max-width: 460px)");
  const [socialNetworks, SetsocialNetworks] = useState(mediaQuery);
  const socialNetworksChange = () => {
    SetsocialNetworks(!socialNetworks);
  };
  useEffect(() => {
    window.addEventListener("scroll", mostrar);
  }, []);
  const OpenPage = (url) => {
    window.open(url);
  };
  return (
    <Fragment>
      <BackTop />
      <Affix style={{ position: "absolute" }} offsetTop={50}>
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
                  "https://www.youtube.com/watch?v=-zgDXIi1uYw&list=RDMMAYVIZZZwsBw&index=7"
                )
              }
            >
              <YoutubeOutlined style={{ fontSize: "40px" }} />
            </div>
            <Tooltip placement="leftTop" title={"Información"}>
              <div
                onClick={() =>
                  OpenPage(
                    "https://www.youtube.com/watch?v=-zgDXIi1uYw&list=RDMMAYVIZZZwsBw&index=7"
                  )
                }
              >
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
      <Carrousel />
      <Entry title="¿ Quienes Somos ?" color="primary" />
      <Entry
        title="¿ Nuestros Procesos ?"
        color="white"
        image="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <Entry
        title="¿ Como lo Hacemos ?"
        color="secondary"
        image="https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <DogProfiles />
    </Fragment>
  );
};
export default Home;
