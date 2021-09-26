import React from "react";
import "./ProfileCards.css";

function ProfileCards(props) {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      href={props.obj.link}
      className="cardPro icon center-flex-clas"
      style={{
        background: props.obj.color,
        height: props.hgt,
        width: props.wdt,
        padding: props.pdg,
        borderRadius: props.bds,
        margin: props.mrgn,
      }}
    >
      {/* <a
        className="img icon center-flex-class"
        target="_blank"
        rel="noreferrer noopener"
        href={props.obj.link}
      > */}
      <img
        title={props.obj.name}
        src={props.obj.iconlink}
        alt={props.obj.name}
      />
      {/* </a> */}
    </a>
  );
}

export default ProfileCards;
