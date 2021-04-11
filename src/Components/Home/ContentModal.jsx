import React, { Fragment } from "react";
import { Button } from "antd";
const ContentModal = (props) => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-header">
          <img src={props.src} className="image-card-styles" alt="Perro" />
          <div className="name">
            <span className="last">{props.name}</span>
          </div>
        </div>
        <div className="container">
          <div className="left-section">
            <h3>Hola!</h3>
            <p>
              {props.InternalDescription}
            </p>
            <div className="item">
              <span className="word">Edad</span>
              <span className="caract">12</span>
            </div>
            <Button onClick={props.showModal} size="large" className="salirbtn">
              Cerrar
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ContentModal;
