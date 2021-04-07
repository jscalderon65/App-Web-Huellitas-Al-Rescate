import React, { Fragment } from "react";
import { Button } from 'antd';
const ContentModal = (props) => {
    return (
        <Fragment>
            
            <div className="card">
                <div className="card-header">
                    <img style={{ objectFit: "cover" }} src={props.src} alt="Perro" />

                    <div className="name">
                        <span className="last">Ofelia</span>
                    </div>
                </div>
                <div className="container">
                    <div className="left-section">
                        <h3>Hola!</h3>
                        <p> Soy un perrito tierno, me gusta jugar, tener amigos, amo las croquetas, y llevo 10 años con el colegio.</p>

                        <div className="item">
                            <span className="word">Edad</span>
                            <span className="caract">12</span>
                        </div>
                        <div className="item">
                            <span className="word">Raza</span>
                            <span className="caract">Criollo</span>
                        </div>
                        <Button size="large" className="salirbtn">Salir</Button>

                    </div>
                </div>
            </div> 
        </Fragment>
    )
}
export default ContentModal;