import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import SkillsCard from "../../components/SkillsCard/SkillsCard.js";
import HeadersComponent from "../../components/Headers/Headers.js";
import STATIC_DATA from "../../STATIC_DATA/STATIC_DATA";
import "./Skills.css";

function Skills() {
  const [skillsArray, setSkillsArray] = useState([]);
  useEffect(() => {
    let newList = [...STATIC_DATA.skillsArray];
    setSkillsArray(newList);
  }, []);

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
                <SkillsCard
                  key={el.id}
                  obj={el}
                  objArr={el.dataArr}
                ></SkillsCard>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Skills;
