import React from "react"
import { Link } from 'react-router-dom';
import "./navbar.css";
import Fox from "../../img/FoxLogo.png"

export const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <Link  to="/Portfolio">
          <img className="foxnav" src={Fox}></img>
        </Link>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link  to="/Gallery">
                <a class="nav-link">Portfolio</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link  to="/AboutMe">
                <a class="nav-link">Sobre Mi</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link  to="/Contacts">
                <a class="nav-link">Contactos</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link  to="/Allies">
                <a class="nav-link">Aliados</a>
              </Link>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  );
};

export default NavBar