import { Link } from "react-router-dom";
import back from "../../assets/icon/back.png";
import "./Headers.css";
function HeadersComponent(props) {
  return (
    <div className={`headingProfile ${props.bcg}`}>
      <div className="headingProfileWrapper center-flex-class">
        <div className="HeadersIn">
          <Link to={props.onback}>
            <div className="backIcon center-flex-class">
              <img src={back} alt="back" />
            </div>
          </Link>
          <h1 className={`h1c ${props.colorName}`}>
            <span className="h1cT">{props.headerName}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HeadersComponent;
