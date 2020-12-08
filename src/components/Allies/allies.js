import React from "react"
import NavBar from "../navbar/navbar"
import Char from "./character";
import Footer from "../footer/footer"
import "./allies.css";
import Angel from "../../img/Angel.jpg"
import Ailen from "../../img/Ailen.jpg"
import Miguel from "../../img/Miguel.jpg"
import Jenni from "../../img/Jenni.jpg"
import Vale from "../../img/Valeria.jpg"
import Jota from "../../img/Jota.jpg"
import Franco from "../../img/Franco.jpg"
import Andres from "../../img/Andres.JPG"
import Luis from "../../img/Luis.JPG"
import Mags from "../../img/Mags.JPG"

export const Allies = () => {
  return (
    <div>
      <NavBar/>
      <h1 class="tittle text">Select Your Player</h1>
      <div className="allies">
        <Char
        link="https://www.linkedin.com/in/miguel-angel-jaimes-contreras-6aa8031b8/"
        tittle="M. Angel"
        sub="Desarrollador FullStack / Diseñador Front-end"
        img={Angel}>
        </Char>
        <Char
        tittle="Ailén Grimaldi"
        link="https://www.linkedin.com/in/ailenrociogrimaldi/"
        sub="Desarrolladora FullStack"
        img={Ailen}>
        </Char>
        <Char
        tittle="Miguel Rodriguez"
        link="https://www.linkedin.com/in/miguel%2Drodriguez%2D36ab30164/"
        sub="Editor / Redactor"
        img={Miguel}>
        </Char>
        <Char
        tittle="Jennifer Ariza"
        link="https://www.flipsnack.com/jennariza/jenn-s-portfolio.html"
        sub="Publicista"
        img={Jenni}>
        </Char>
        <Char
        tittle="Valeria Occhiuzzi"
        link="https://www.linkedin.com/in/valeria-occhiuzzi-111a72155/"
        sub="Desarrolladora FullStack"
        img={Vale}>
        </Char>
        <Char
        tittle="Jose Alejandro"
        link="https://www.linkedin.com/in/jos%C3%A9-alejandro-herrera-ortiz-7830811a5/"
        sub="Tester"
        img={Jota}>
        </Char>
        <Char
        tittle="Franco Matus"
        link="https://www.linkedin.com/in/franmatus6"
        sub="Desarrollador FullStack"
        img={Franco}>
        </Char>
        <Char
        tittle="A. Carvajal"
        link="https://acarvajal905.github.io/Portfolio/"
        sub="Developer FullStack"
        img={Andres}>
        </Char>
        <Char
        tittle="Luis Misel"
        link="https://www.linkedin.com/in/luis-misel-rojas-605732107/"
        sub="Tester"
        img={Luis}>
        </Char>
        <Char
        tittle="M. Gabriela"
        link="https://www.linkedin.com/in/maria-jc-02571414a/"
        sub="Traductora / Tester"
        img={Mags}>
        </Char>
       
      </div>
      <Footer/>
    </div>
  );
};

export default Allies