import "./CardGlobal.css";
import { useEffect, useState } from "react";
import js from '../../assets/icon/js.svg';

function CardGlobal(props) {


  return (
    <div>
      <div className="cardParStyle">
        <div className="cardInStyle">
        <section className="cardup cardupbg">
            <img
              className="cardupimg cardupimgbdr"
              src={js}
              alt="Profile Picture"
            />
            <h2 className="carduppname">{props.obj.skillsHeading}</h2>
          </section>
          <article className="cardbody">
            <div className="cardtext">
              <ul>
              { 
                props.objArr.map((str_val,index) =>  { 
                  if(typeof str_val === "object" )
                    return <Block key={index} h={str_val.h} v={str_val.v}></Block>;
                  return <li key={index}>{str_val}</li> 
                })
              }
              </ul>
            </div>
          </article>
          
        </div>
      </div>
    </div>
  );
}
export default CardGlobal;

function Block(props){
  return (<li>
    <b>{props.h} - </b>
    <span>{props.v}</span>
  </li>);
}

