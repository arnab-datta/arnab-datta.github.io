import React from "react";
import { Slide } from "react-reveal";
import HeadersComponent from "../../components/Headers/Headers";

function Artist() {
  return (
    <Slide right>
      <div>
        {" "}
        <HeadersComponent
          headerName={"Artist"}
          // colorName={"cpf"}
          bcg={"swdbcg"}
          onback="/"
        ></HeadersComponent>
      </div>
      ;
    </Slide>
  );
}

export default Artist;
