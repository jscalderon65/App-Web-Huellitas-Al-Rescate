import React from "react";
import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";
import "rc-banner-anim/assets/index.css";

const { BgElement } = Element;

const BannerGallery = () => {
  return (
    <BannerAnim style={{height:"60vh"}}id="courses">
      <Element prefixCls="banner-user-elem" key="0">
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: `url("https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_960_720.jpg")`,
            backgroundSize: "cover",
            backgroundPositionY: "0%",
          }}
        />
        <div className="banner-anim-elem-content" style={{background:"#f7b749CC"}}>
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: "from" }}
          >
            <b>
              <i>
                Actividades realizadas por estudiantes 
              </i>
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
      <Element prefixCls="banner-user-elem"  key="1">
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
            backgroundSize: "cover",
            backgroundPositionY: "20%",
          }}
        />
        <div className="banner-anim-elem-content " style={{background:"#f7b749CC"}}>
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: "from" }}
          >
            <b>
              <i>
                Actividades realizadas en los cursos
              </i>
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
