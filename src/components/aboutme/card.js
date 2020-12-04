import React from "react"
import "./infocard.css";

export const ICard = (props) => {
  return (
    <div>
      <div class="card">
      <div class="card-body">
          <h5 class="card-title">{props.tittle}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{props.sub}</h6>
          <p class="card-text">{props.text}</p>
      </div>
      </div>
    </div>
  );
};

export default ICard

/* Full Stack Developer, y gamer, dispuesto a retos y a crear cosas nuevas.
Skills:
- JavaScript
- React.js
- Redux
- HTML
- CSS
- Node.js
- Sequelize ORM
- Express.js
- PostgreSQL
- Git
-Photoshop
-AutoCAD
Apasionado de la tecnología, videojuegos, diseño y la fotografia. Gran iniciativa, comunicativo y meticuloso. */