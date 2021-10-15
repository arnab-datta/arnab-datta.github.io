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
    dataArr: [
      {
        sid: 1,
        skill_name: "JavaScript",
        skill_percentage: "90%",
        skill_color: "#a470f8",
      },
      {
        sid: 2,
        skill_name: "C#",
        skill_percentage: "60%",
        skill_color: "#84dcc5",
      },
      {
        sid: 3,
        skill_name: "TypeScript",
        skill_percentage: "30%",
        skill_color: "#f3d547",
      },
      {
        sid: 4,
        skill_name: "Java",
        skill_percentage: "30%",
        skill_color: "#f25f5c",
      },
      {
        sid: 5,
        skill_name: "Python",
        skill_percentage: "30%",
        skill_color: "#a470f8",
      },
      {
        sid: 6,
        skill_name: "PHP",
        skill_percentage: "30%",
        skill_color: "#84dcc5",
      },
      {
        sid: 7,
        skill_name: "C",
        skill_percentage: "30%",
        skill_color: "#f3d547",
      },
    ],
  },
  {
    id: 2,
    skillsHeading: "Frontend",
    dataArr: [
      {
        sid: 1,
        skill_name: "HTML",
        skill_percentage: "90%",
        skill_color: "#a470f8",
      },
      {
        sid: 2,
        skill_name: "CSS",
        skill_percentage: "90%",
        skill_color: "#84dcc5",
      },
      {
        sid: 3,
        skill_name: "JQuery",
        skill_percentage: "80%",
        skill_color: "#f3d547",
      },
      {
        sid: 4,
        skill_name: "Angular",
        skill_percentage: "70%",
        skill_color: "#f25f5c",
      },
      {
        sid: 5,
        skill_name: "React.js",
        skill_percentage: "50%",
        skill_color: "#a470f8",
      },
    ],
  },
  {
    id: 3,
    skillsHeading: "Backend and API",
    dataArr: [
      {
        sid: 1,
        skill_name: "MySQL",
        skill_percentage: "80%",
        skill_color: "#a470f8",
      },
      {
        sid: 2,
        skill_name: "ASP.NET",
        skill_percentage: "50%",
        skill_color: "#84dcc5",
      },
      {
        sid: 3,
        skill_name: "Node.js & Express.js",
        skill_percentage: "30%",
        skill_color: "#f3d547",
      },
    ],
  },
  {
    id: 4,
    skillsHeading: "Tools",
    dataArr: [
      {
        sid: 1,
        skill_name: "Git",
        skill_percentage: "80%",
        skill_color: "#a470f8",
      },
      {
        sid: 2,
        skill_name: "Postman",
        skill_percentage: "80%",
        skill_color: "#84dcc5",
      },
    ],
  },
];
