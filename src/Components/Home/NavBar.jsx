import React, { Fragment} from "react";
import { NavLink, Link } from "react-router-dom";
const NavBar = () => {

  const add = () => {
    const m = document.getElementById("m");
    const n = document.getElementById("n");
    m.classList.toggle("active");
    n.classList.toggle("active");
  };

  return (
    <Fragment>
      <header>
        <div className="menu-toggle" id="m" onClick={add} />
        <Link to="/" className="logo">
          HUELLITAS AL RESCATE
        </Link>
        <nav id="n">
          <ul>
            <li>
              <strong>
                <NavLink onClick={add} to="/inicio" activeClassName="active">
                  INICIO
                </NavLink>
              </strong>
            </li>
            <li>
              <strong>
                <NavLink onClick={add} to="/estudiantes" activeClassName="active">
                  ESTUDIANTES
                </NavLink>
              </strong>
            </li>
            <li>
              <strong>
                <NavLink onClick={add} to="/cursos" activeClassName="active">
                  CURSOS
                </NavLink>
              </strong>
            </li>
          </ul>
        </nav>
        <div className="clearfix" />
      </header>
    </Fragment>
  );
};
export default NavBar;
