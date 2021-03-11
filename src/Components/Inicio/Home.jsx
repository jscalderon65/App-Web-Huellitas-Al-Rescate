import React, { Fragment } from 'react';
import Carrousel from './Carrousel';
import Entry from './Entry';

const Home = () => {

    return (
        <Fragment>
            <Carrousel />
            <Entry title="¿ Quienes Somos ?" color="primary" />
            <Entry title="¿ Como lo Hacemos ?" color="secondary" image="https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <Entry title="¿ Nuestros Procesos ?" color="white" image="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </Fragment>
    )
}
export default Home;