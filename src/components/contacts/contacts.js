import React from "react"
import NavBar from "../navbar/navbar"
import Footer from "../footer/footer"
import "./contacts.css";
import Bubble from "./bubble";

export const Contacts = () => {
  return (
    <div>
      <NavBar/>
      <div className="menu">
        <Bubble logo="Logos/Linkedin.png"
        link="https://www.linkedin.com/in/miguel-angel-jaimes-contreras-6aa8031b8/"></Bubble>

        <Bubble logo="Logos/Github.png"
        link="https://github.com/MrFoxxz"></Bubble>

        <Bubble logo="Logos/Twich.png"
        link="https://www.twitch.tv/mrfoxxzz"></Bubble>

        <Bubble logo="Logos/WhatsApp.png"
        link="https://wa.link/jf9q4q"></Bubble>

        <Bubble logo="Logos/Facebook.png"
        link="https://www.facebook.com/miguel.a.contreras.1293"></Bubble>

        <Bubble logo="Logos/Instagram.png"
        link="https://www.instagram.com/mr_foxzz/"></Bubble>
      </div>
      <Footer/>
    </div>
  );
};

export default Contacts