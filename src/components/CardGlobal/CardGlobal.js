import "./CardGlobal.css";

function CardGlobal(props) {
  return (
    <div>
      <div className=""></div>
      {/* <div className="cardParStyle">
        <section className="cardup cardupbg">
          <img
            className="cardupimg cardupimgbdr"
            src={js}
            alt={`${props.obj.skillsHeading}`}
          />
          <h2 className="carduppname">{props.obj.skillsHeading}</h2>
        </section>
        <article className="cardbody">
          <div className="cardtext">
            <ul className="unorderedlistclass">
              {props.objArr.map((str_val, index) => {
                if (typeof str_val === "object")
                  return (
                    <Block key={index} h={str_val.h} v={str_val.v}></Block>
                  );
                return (
                  <li className="listClass" key={index}>
                    <span className="listimg"></span>
                    <span className="listtxt">{str_val}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </article>
      </div> */}
    </div>
  );
}
export default CardGlobal;

// function Block(props) {
//   return (
//     <li className="listClass">
//       <span className="listimg"></span>
//       <span className="listtxt">
//         <b>{props.h} - </b>
//         <span>{props.v}</span>
//       </span>
//     </li>
//   );
// }
