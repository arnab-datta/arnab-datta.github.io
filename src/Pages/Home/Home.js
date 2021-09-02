import "./Home.css";
import arnab from "../../assets/images/arnab.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Slide from 'react-reveal/Slide';

function Home() {
  return (
      <Slide left>
    <div className="HomePageWrap">
      <div className="HomePage center-flex-class">
        <div className="profileDescDiv">
          <div className="profileDescPart leftSec">
            <div className="MyIntoPar center-flex-class">
              <div className="introPar">
                <div className="introParHead">
                  <span className="span1">Hey, I'm</span>
                  <br></br>
                  <span className="span2">Arnab Datta</span>
                  <br></br>
                  <span className="span3">Software Engineer </span>
                  <span className="span31">💻</span>
                  <div className="span4">
                    <span className="span4-badges">Web</span>
                    <span className="span4-badges">Frontend</span>
                    <span className="span4-badges">Backend</span>
                    <span className="span4-badges">Mobile Apps</span>
                  </div>
                  <div className="span5">
                    Learn <span className="col51">|</span>
                    <span className="col5">|</span> Grow{" "}
                    <span className="col51">|</span>
                    <span className="col5">|</span> Contribute
                  </div>
                  <div className="btnAboutMeParent">
                    <button className="slide">About Me »</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profilePicSection middleSec">
            <div className="profileImagePar center-flex-class">
              <div className="profileImageOuterCircle center-flex-class">
                <div className="profileImageDiv">
                  <div className="profile-pic-card">
                    <div className="profile-pic-card-inner center-flex-class">
                      <div className="profile-pic-card-front center-flex-class">
                        <img src={arnab} alt="arnab" />
                      </div>
                      <div className="profile-pic-card-back  center-flex-class">
                        <div className="introParBody">
                          <div className="span2 sp1">⚽</div>
                          <div className="span2 sp2">💻</div>
                          <div className="span2 sp3">🎨</div>
                          <div className="span2 sp4">🍔</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profileDescPart rightSec">
            <div className="profile-cards-parent">
              <Link to={"/Skills"}>
                <div className="profile-cards pfc-up cs">
                  <div className="card-headings w100 center-flex-class">
                    <div className="cs-font">Skills</div>
                  </div>
                  <div className="go-corner-up" href="#">
                    <div className="go-arrow go-arrow-up">→</div>
                  </div>
                </div>
              </Link>
              <Link to={"/Projects"}>
                <div className="profile-cards pfc-up cf">
                  <div className="card-headings w100 center-flex-class">
                    <div className="fsd">
                      <div className="cf-font">Projects</div>
                    </div>
                    <div className="go-corner-up" href="#">
                      <div className="go-arrow go-arrow-up">→</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={"/Artist"}>
                <div className="profile-cards pfc-down ca">
                  <div className="card-headings w100 center-flex-class">
                    <div className="ca-font">Artist</div>
                  </div>
                  <div className="go-corner-down" href="#">
                    <div className="go-arrow go-arrow-down">→</div>
                  </div>
                </div>
              </Link>
              <Link to={"/Profiles"}>
                <div className="profile-cards pfc-down cp">
                  <div className="card-headings w100 center-flex-class">
                    <div className="cp-font">Profiles</div>
                  </div>
                  <div className="go-corner-down" href="#">
                    <div className="go-arrow go-arrow-down">→</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
      </Slide>
  );
}

export default Home;
