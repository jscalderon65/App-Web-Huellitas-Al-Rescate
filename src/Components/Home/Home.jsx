import React, { Fragment, useEffect } from 'react';
import Carrousel from './Carrousel';
import Entry from './Entry';
import DogProfiles from './DogProfiles';
import mostrar from '../../Animated';
const Home = () => {
    useEffect(() => {
        window.addEventListener("scroll", mostrar)
        
    }, [])
    return (
        <Fragment>
            <Carrousel />
            <Entry title="¿ Quienes Somos ?" color="primary" />
            <Entry title="¿ Nuestros Procesos ?" color="white" image="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <Entry title="¿ Como lo Hacemos ?" color="secondary" image="https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <DogProfiles />
        </Fragment>
    )
}
export default Home;