import React from "react"
import "./character.css";

export class Char extends React.Component {

  constructor(props){
    super(props);
    /* this.state={
    } */
  }

  render(){
    return (
      <div className="box">
          <div className="character">
             {/*  <audio id="beep" src="audio/SoundEffect.mp3" preload="auto"></audio> */}
              <a href={this.props.link} target="_blank" >
              <img className="marco" src="img/marco.png"></img>
              <img className="perfil" src={this.props.img}></img>
              </a>
          </div>
  
        <div className="select">
          <img className="Smarco" src="img/marco.png"></img>
          <div className="info">
            <h3>{this.props.tittle}</h3>
            <h4>{this.props.sub}</h4>
          </div>
        </div>
  
      </div>
    );
  }

};

export default Char