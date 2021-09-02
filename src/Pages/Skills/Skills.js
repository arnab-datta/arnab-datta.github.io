import React, { Component, useState } from "react";
import {Fade,Slide} from "react-reveal";
import Headers from "../../components/Headers/Headers.js";
import CardGlobal from "../../components/CardGlobal/CardGlobal.js";
import "./Skills.css";

function Skills() {
    const d = [{"id" : 1 }, {"id" : 2}];
  return (
    <Fade right>
      <div className='SkillsWraper'>
      <Headers headerName={"SKILLSET & WORK DOMAIN"} colorName={"Swd"} bcg={"swdbcg"} onback="/"></Headers>
      <div className='CardGlobalWrapper'>
        {d.map((el) => {
              return <CardGlobal key={el.id} obj={el}></CardGlobal>;
            })}
      </div>
      </div>
    </Fade>
  );
}

export default Skills;
