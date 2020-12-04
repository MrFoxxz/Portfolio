import React from "react"
import NavBar from "../navbar/navbar"
import Footer from "../footer/footer"
import PCard from "./portfoliocard"
import "./portfolio.css";

export const Portfolio = () => {
  return (
    <div>
      <NavBar/>
      <div>
        <div className="infobox">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Developmen</a>
              </li>
              {/* <li class="nav-item" role="presentation">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Photoshop</a>
              </li> */}
              {/* <li class="nav-item" role="presentation">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">XXXXXXX</a>
              </li> */}
              <li class="nav-item" >
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Miguel Angel Jaimes Contreras</a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">

              <div class="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="portfolio">
                  <PCard 
                    tittle="Protectora Sarmiento"
                    img="img/Protectora.JPG"
                    sub="React, Redux, FireBase ,HTML ,CSS"
                    link="https://github.com/ail3ngrimaldi/protectora-animales"
                    content="Pagina para adopcion voluntariado y presentacion de mascotas. Proyecto final, entregado para la aprobación del curso de Desarrollador Full Stack"
                  ></PCard>
                  <PCard 
                    tittle="MiniMercado"
                    img="img/MiniMercado.JPG"
                    sub="React, Redux, HTML, CSS"
                    link="https://github.com/MrFoxxz/MiniMercado"
                    content="Pequeño y sencillo e-commerce. Proyecto realizado con la Api de mercado libre."
                  ></PCard>
                  <PCard 
                    tittle="7winnes"
                    img="img/7Wines.JPG"
                    sub="React ,HTML ,CSS, SQL"
                    link="https://github.com/MrFoxxz/Ecommerce7wines"
                    content="E-commerce crentrado en venta de vinos y bebidas alcoholica, creado en equipo como proyecto para el curso Henry."
                  ></PCard>
                  <PCard 
                    tittle="Mr.Fox Page"
                    img="img/MrFoxPage.JPG"
                    sub="React ,HTML ,CSS"
                    link="https://github.com/MrFoxxz"
                    content="Pagina creada como portafolio virtual de Miguel Angel Jaimes."
                  ></PCard>

                </div>

              </div>

              <div class="tab-pane fade portfolio" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="portfolio">
                  <PCard 
                    tittle="CARD1"
                  ></PCard>

                  <PCard 
                    tittle="CARD2"
                  ></PCard>
                </div>
              </div>

              {/* <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                ...
              </div> */}

            </div>
          </div>
        </div>
      <Footer/>
    </div>
  );
};

export default Portfolio