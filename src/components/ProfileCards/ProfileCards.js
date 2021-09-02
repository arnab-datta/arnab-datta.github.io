import "./ProfileCards.css";

import React, { Component } from "react";


function ProfileCards(props) {
  return (
    <div
      className="cardPro center-flex-class"
      style={{ background: props.obj.color }}
    >
 
        <a className="img icon" target="_blank" href={props.obj.link}>
          <img
            title={props.obj.name}
            src={props.obj.iconlink}
            alt={props.obj.name}
          />
        </a>
 
    </div>
  );
}

export default ProfileCards;
