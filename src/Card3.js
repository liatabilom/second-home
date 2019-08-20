import React, { Component } from "react";
import Whoknews from "./images/Whoknews.png";
import "./Card3.css";

class Card3 extends Component {
  render() {
    return (
      <div className="cardBg">
        <img src={Whoknews} alt="" />
      </div>
    );
  }
}

export default Card3;
