import React from "react"
import NavBar from "../navbar/navbar"
import Footer from "../footer/footer"
import "./contacts.css";
import Bubble from "./bubble";
import Linkedin from "../../Logos/Linkedin.png"
import Github from "../../Logos/Github.png"
import Facebook from "../../Logos/Facebook.png"
import Instagram from "../../Logos/Instagram.png"
import Twich from "../../Logos/Twich.png"
import WhatsApp from "../../Logos/WhatsApp.png"

export const Contacts = () => {
  return (
    <div>
      <NavBar/>
      <div className="menu">
        <Bubble logo={Linkedin}
        link="https://www.linkedin.com/in/miguel-angel-jaimes-contreras-6aa8031b8/"></Bubble>

        <Bubble logo={Github}
        link="https://github.com/MrFoxxz"></Bubble>

        <Bubble logo={Twich}
        link="https://www.twitch.tv/mrfoxxzz"></Bubble>

        <Bubble logo={WhatsApp}
        link="https://wa.link/jf9q4q"></Bubble>

        <Bubble logo={Facebook}
        link="https://www.facebook.com/miguel.a.contreras.1293"></Bubble>

        <Bubble logo={Instagram}
        link="https://www.instagram.com/mr_foxzz/"></Bubble>
      </div>
      <Footer/>
    </div>
  );
};

export default Contacts