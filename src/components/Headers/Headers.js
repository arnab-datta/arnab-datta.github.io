import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import back from "../../assets/icon/back.png";
import "./Headers.css";
function Headers(props) {
  return (
    <div className={`headingProfile ${props.bcg}`}>
      <div className='HeadersIn'>
      <Link to={props.onback}>
        <div className="backIcon center-flex-class">
          <img src={back}></img>
        </div>
      </Link>
      <h1 className={`h1c ${props.colorName}`}>
        <span className="h1cT">
          {props.headerName}
        </span>
      </h1>
      </div>
    </div>
  );
}

export default Headers;
