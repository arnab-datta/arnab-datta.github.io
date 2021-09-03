import React, { Component, useState } from "react";
import { Fade, Slide } from "react-reveal";
import Headers from "../../components/Headers/Headers.js";
import CardGlobal from "../../components/CardGlobal/CardGlobal.js";
import "./Skills.css";

function Skills() {
  return (
    <Fade right>
      <div className="SkillsWraper">
        <Headers
          headerName={"SKILLSET & WORK DOMAIN"}
          colorName={"Swd"}
          bcg={"swdbcg"}
          onback="/"
        ></Headers>
        <div className="CardGlobalWrapper">
          {skillsArray.map((el) => {
            return (
              <CardGlobal key={el.id} obj={el} objArr={el.dataArr}></CardGlobal>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}

export default Skills;

const skillsArray = [
  {
    id: 1,
    skillsHeading: "Languages",
    dataArr: ["JavaScript", "TypeScript", "C#", "C", "Java", "Python", "PHP"],
  },
  {
    id: 2,
    skillsHeading: "Frontend",
    dataArr: ["HTML", "CSS", "JQuery", "Angular", "React.js"],
  },
  {
    id: 3,
    skillsHeading: "Backend",
    dataArr: [
      {
        h: "Database",
        v: "MySQL",
      },
      { 
        h: "API Middleware", 
        v: "Node.js & Express.js" 
      }
    ],
  },
  { id: 4, skillsHeading: "Tools", dataArr: ["Git", "Postman"] },
];
