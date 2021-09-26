import React from "react";
import { Fade } from "react-reveal";
import CardGlobal from "../../components/CardGlobal/CardGlobal.js";
import HeadersComponent from "../../components/Headers/Headers.js";
import "./Skills.css";

function Skills() {
  return (
    <Fade right>
      <div className="SkillsWraper">
        <HeadersComponent
          headerName={"SKILLSET & WORK DOMAIN"}
          colorName={"Swd"}
          bcg={"swdbcg"}
          onback="/"
        ></HeadersComponent>
        <div className="CardGlobalWrapper">
          <div className="CardGlobalWrapperIn">
            {skillsArray.map((el) => {
              return (
                <CardGlobal
                  key={el.id}
                  obj={el}
                  objArr={el.dataArr}
                ></CardGlobal>
              );
            })}
          </div>
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
        v: "Node.js & Express.js",
      },
    ],
  },
  { id: 4, skillsHeading: "Tools", dataArr: ["Git", "Postman"] },
];
