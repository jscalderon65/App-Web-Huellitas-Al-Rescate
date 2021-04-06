import React from "react";
import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";
import "rc-banner-anim/assets/index.css";

const { BgElement } = Element;

const CorrouselCourses = () => {
  return (
    <BannerAnim style={{height:"80vh"}}id="courses">
      <Element prefixCls="banner-user-elem" key="0">
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
            backgroundSize: "cover",
            backgroundPositionY: "20%",
          }}
        />
        <div className="banner-anim-elem-content" style={{background:"#f7b749CC"}}>
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: "from" }}
          >
            <b>
              <i>
                "Aprende la tenencia de animales responsable "
              </i>
            </b>
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
          >
            <i>- Huellitas al rescate</i>
          </TweenOne>
        </div>
      </Element>
      <Element prefixCls="banner-user-elem"  key="1">
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/6146984/pexels-photo-6146984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
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
                "Cursos en Conjunto con el instituto de proteccion animal "
              </i>
            </b>
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: "from", delay: 200 }}
          >
            <i>- Tenencia responsable</i>
          </TweenOne>
        </div>
      </Element>
    </BannerAnim>
  );
};
export default CorrouselCourses;
