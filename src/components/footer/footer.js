import React from "react"
import "./footer.css";
import Vegvisir from "../../img/Vegvisir.png"
import Github from "../../Logos/Github.png"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerI">
        <img className="foxfoot" src={Vegvisir}></img>
        <h2>Encuentrame en:</h2>
        
      <div >
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/in/miguel-angel-jaimes-contreras-6aa8031b8/" target="_blank" >Linkedin.</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://github.com/MrFoxxz" target="_blank" >Github.</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.instagram.com/mr_foxzz/" target="_blank" >Instagram.</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="">Contactos</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="toolsfooter">
            <img align="left" id="miniimg" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
            <img align="left" id="miniimg" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
            <img align="left" id="miniimg" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
            <img align="left" id="miniimg" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
            <img align="left" id="miniimg" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
            <img align="left" id="miniimg" alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
            <img align="left" id="miniimg" alt="SQL" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png" />
            <img align="left" id="miniimg" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
            <img align="left" id="miniimg" alt="GitHub" width="26px" src={Github} />
            <img align="left" id="miniimg" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />
        </div>
      </div>
      
        </div>
    </div>
  );
};

export default Footer