import React from "react";
import TweenOne from "rc-tween-one";
import BannerAnim, { Element } from "rc-banner-anim";
import "rc-banner-anim/assets/index.css";
const Corrousel = () => {
  const { BgElement } = Element;
  return (
      <BannerAnim autoPlay={true} prefixCls="banner-user">
        <Element prefixCls="banner-user-elem" key="0">
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/850602/pexels-photo-850602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940ss")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="banner-anim-elem-content">
            <TweenOne
              className="banner-user-title"
              animation={{ y: 30, opacity: 0, type: "from" }}
            >
              <b>
                <i>
                  " Quien es cruel con los animales, no puede ser buena persona.
                  "
                </i>
              </b>
            </TweenOne>
            <TweenOne
              className="banner-user-text"
              animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
            >
              <i>- Arthur Schopenhauer</i>
            </TweenOne>
          </div>
        </Element>
        <Element prefixCls="banner-user-elem" key="1">
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/3628100/pexels-photo-3628100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="banner-anim-elem-content">
            <TweenOne
              className="banner-user-title"
              animation={{ y: 30, opacity: 0, type: "from" }}
            >
              <b>
                <i>
                  " Los animales nacen como son, lo aceptan y eso es todo. Viven
                  con mayor paz que las personas. "
                </i>
              </b>
            </TweenOne>
            <TweenOne
              className="banner-user-text"
              animation={{ y: 30, opacity: 0, type: "from", delay: 200 }}
            >
              <i>- Gregory Maguire</i>
            </TweenOne>
          </div>
        </Element>
      </BannerAnim>
  );
};
export default Corrousel;
