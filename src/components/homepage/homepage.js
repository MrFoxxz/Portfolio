import React from "react"
import { Link } from 'react-router-dom';
import "./homepage.css";

export const Homepage = () => {
  return (
    <div>
        <div class="tools">
            <img align="left" id="miniimg" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
            <img align="left" id="miniimg" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
            <img align="left" id="miniimg" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
            <img align="left" id="miniimg" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
            <img align="left" id="miniimg" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
            <img align="left" id="miniimg" alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
            <img align="left" id="miniimg" alt="SQL" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png" />
            <img align="left" id="miniimg" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
            <img align="left" id="miniimg" alt="GitHub" width="26px" src="Logos/Github.png" />
            <img align="left" id="miniimg" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />
        </div>
        
        <div class="container">
            <ul id="menu">
            
                <a class="menu-button icon-plus" href="#menu" title="Show navigation">
                    <img className="foximg" src="img/vippng.com-fox-face-png-1705748.png"></img>
                </a>
                <a class="menu-button icon-minus" href="#0" title="Hide navigation">
                    <img className="foximg" src="img/vippng.com-fox-face-png-1705748.png"></img>
                </a>
                <li class="menu-item clickme">
                    <h4 class="click">Click_Me</h4>
                    <h4 class="touch">Touch_Me</h4>
                </li>
                <li class="menu-item">
                    <Link  to="/Portfolio">
                        <a class="nav-link">Portfolio</a>
                    </Link>
                </li>
                <li class="menu-item">
                    <Link  to="/Allies">
                        <a class="nav-link">Aliados</a>
                    </Link>
                </li>
                <li class="menu-item">
                    <Link  to="/Contacts">
                        <a class="nav-link">Contactos</a>
                    </Link>
                </li>
                <li class="menu-item">
                    <Link  to="/AboutMe">
                        <a class="nav-link">Sobre_Mi</a>
                    </Link>
                </li>
            </ul>
        </div>


    </div>
  );
};

export default Homepage

