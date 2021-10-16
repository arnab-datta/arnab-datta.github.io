import "./SkillsCard.css";

function SkillsCard(props) {
  return (
    <div className="skillsCard">
      <h2>{props.obj.skillsHeading}</h2>
      <div className="skillsetsarr">
        {props.obj.dataArr.map((el) => {
          return (
            <div className="skill_set" key={props.obj.id + "_" + el.sid}>
              <div className="skill_details">
                <div className="skill_details_Child skill_details_section_1">
                  <div className="skill_details_title">{el.skill_name}</div>
                  <div className="skill_details_percentage">
                    {el.skill_percentage}%
                  </div>
                </div>
                <div
                  className="skill_details_Child skill_details_section_2 progress-container"
                  data-percentage="70"
                >
                  <div
                    className="progress"
                    style={{
                      width: `${el.skill_percentage}%`,
                      background: el.skill_color,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default SkillsCard;
