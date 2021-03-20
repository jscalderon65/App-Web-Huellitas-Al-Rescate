import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = ({ history }) => {

    const add = () => {
        const m = document.getElementById("m")
        const n = document.getElementById("n")
        m.classList.toggle("active")
        n.classList.toggle("active")
    }

    return (
        <Fragment>
            <header>
                <div className="menu-toggle" id="m" onClick={add} />
                <a href="/" className="logo">HUELLITAS PARA SIEMPRE</a>
                <nav id="n">
                    <ul>
                        <li><strong><NavLink to="/inicio" activeClassName="active" >INICIO</NavLink></strong></li>
                        <li><strong><NavLink to="/estudiantes" activeClassName="active">ESTUDIANTES</NavLink></strong></li>
                        <li><strong><NavLink to="/cursos" activeClassName="active">CURSOS</NavLink></strong></li>
                    </ul>
                </nav>
                <div className="clearfix" />
            </header>
        </Fragment>
    )
}
export default NavBar;