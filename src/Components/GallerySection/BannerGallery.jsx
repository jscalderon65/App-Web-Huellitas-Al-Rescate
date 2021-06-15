import React from "react";
import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";
import "rc-banner-anim/assets/index.css";

const { BgElement } = Element;
const BannerGallery = () => {
  return (
    <BannerAnim autoPlay={true}  style={{ height: "80vh"}} id="courses">
      <Element prefixCls="banner-user-elem " key="0">
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: `url("../Fotos/HuellitasDibujo.jpg")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
          }}
        />
        <div
          className="banner-anim-elem-content"
          style={{ background: "rgba(0,0,0,.6s)" }}
        >
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: "from" }}
          >
            <b>
              <i>Actividades realizadas por estudiantes</i>
            </b>
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
          >
            <i>- Contenido Destacado</i>
          </TweenOne>
        </div>
      </Element>
      <Element prefixCls="banner-user-elem" key="1">
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: `url("../Fotos/HuellitasDibujo2.jpg")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
          }}
        />

        <div
          className="banner-anim-elem-content "
          style={{  background: "rgba(0,0,0,.6s)" }}
        >
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: "from" }}
          >
            <b>
              <i>Actividades realizadas en los cursos</i>
            </b>
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: "from", delay: 200 }}
          >
            <i>- Contenido Destacado</i>
          </TweenOne>
        </div>
      </Element>
    </BannerAnim>
  );
};
export default BannerGallery;
