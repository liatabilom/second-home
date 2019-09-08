import React, { Component } from "react";
import Mobile from "./images/Mobile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./Card2.css";

class Card2 extends Component {
  render() {
    return (
      <div className="d-flex">
        <img className="mobile" src={Mobile} alt="" />
        <FontAwesomeIcon icon={faPlusCircle} size="1x" className="plusIcon" />
      </div>
    );
  }
}

export default Card2;
