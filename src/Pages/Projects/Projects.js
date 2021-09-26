import React from "react";
import { Slide } from "react-reveal";
import HeadersComponent from "../../components/Headers/Headers";

function Projects() {
  return (
    <Slide right>
      <div>
        <HeadersComponent
          headerName={"Projects"}
          // colorName={"cpf"}
          bcg={"swdbcg"}
          onback="/"
        ></HeadersComponent>
      </div>
    </Slide>
  );
}

export default Projects;
