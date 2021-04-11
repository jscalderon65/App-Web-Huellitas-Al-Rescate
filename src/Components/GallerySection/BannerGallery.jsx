import React from "react";
import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";
import "rc-banner-anim/assets/index.css";

const { BgElement } = Element;

const BannerGallery = () => {
  return (
    <BannerAnim  style={{ height: "80vh" }} id="courses">
      <Element prefixCls="banner-user-elem " key="0">
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: `url("https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/153593197_1021006142066520_2985457074584178695_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=e3f864&_nc_ohc=8_gi8yMlRQkAX-Qf_O0&_nc_ht=scontent-bog1-1.xx&oh=1e28586f7c63579c9491b87c3f89d5f0&oe=6092DADA")`,
            backgroundSize: "cover",
            backgroundPositionY: "0%",
          }}
        />
        <div
          className="banner-anim-elem-content"
          style={{ background: "#f19e18" }}
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
            backgroundImage: `url("https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
            backgroundSize: "cover",
            backgroundPositionY: "20%",
          }}
        />

        <div
          className="banner-anim-elem-content "
          style={{  background: "#f19e18" }}
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
