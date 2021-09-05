import React from "react";
import "./ProfileCards.css";

function ProfileCards(props) {
  return (
    <div
      className="cardPro center-flex-class"
      style={{ background: props.obj.color }}
    >
      <a
        className="img icon"
        target="_blank"
        rel="noreferrer noopener"
        href={props.obj.link}
      >
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
