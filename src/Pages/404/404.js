import React from "react";
import { Link } from "react-router-dom";
import "./404.css";
import notfound from "../../assets/images/404notfound.png";

function NotFoundPage() {
  return (
    <div className="NotFoundPageWrap">
      <div className="pageParent">
        <div className="notFoundImage center-flex-class">
          <img src={notfound} alt="" />
        </div>
        <Link to="/">
          <button className="btnGoHome">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
