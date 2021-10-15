import "./CardGlobal.css";
import js from "../../assets/icon/js.svg";
import arnab from "../../assets/images/arnab.jpg";

function CardGlobal(props) {
  return (
    <div className="skillsCard">
      <h2>{props.obj.skillsHeading}</h2>
      <div className="skillsetsarr">
        {props.obj.dataArr.map((el) => {
          return (
            <div className="skill_set" key={props.obj.id + "_" + el.sid}>
              {/* <div className="skill_icon center-flex-class">
                <img src={arnab} alt={`${el.skill_name}`} />
              </div> */}
              <div className="skill_details">
                <div className="skill_details_Child skill_details_section_1">
                  <div className="skill_details_title">{el.skill_name}</div>
                  <div className="skill_details_percentage">
                    {el.skill_percentage}
                  </div>
                </div>
                <div
                  className="skill_details_Child skill_details_section_2 progress-container"
                  data-percentage="70"
                >
                  <div
                    className="progress"
                    style={{
                      width: el.skill_percentage,
                      background: el.skill_color,
                    }}
                  ></div>
                  {/* <div class="percentage">0%</div> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
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
