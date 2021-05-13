import "./Home.css";
import arnab from "../../assets/images/arnab.jpg";
import developer_activity from "../../assets/images/developer_activity.svg";
import solution_mindset from "../../assets/images/solution_mindset.svg";
import Mobile_application from "../../assets/images/Mobile_application.svg";

function Home() {
  return (
    <div className="HomePageWrap">
    <div className="overlay"></div>
    <div className="HomePage">
      {/* <div className="upperHead"></div> */}
      <div className="profileIntroSec hidden">
        <div className="profilename">Arnab Datta</div>
        <div className="profiledesg">Software Engineer</div>
      </div>
      <div className="profileDescDiv">
        <div className="profileDescPart leftSec">
          <div className="MyIntoPar">
            <div className="introPar">
              <div className="introParHead">
                <span className="span1">Hey, I'm</span>
                <br></br>
                <span className="span2">Arnab Datta</span>
                <br></br>
                <span className="span3">Software Engineer 💻</span>
                <div className="span4">
                  <span className="span4-badges">Web</span>
                  <span className="span4-badges">Frontend</span>
                  <span className="span4-badges">Backend</span>
                  <span className="span4-badges">Mobile Apps</span>
                </div>
              </div>
              {/* <div className="introParBody hide">
                <div className="span1"><span>Here is my Bio :- </span></div>
                <div><span className="span2">💻</span><span className="span3">Full Stack Developer</span></div>
                <div><span className="span2">🎨</span><span className="span3">Artist</span></div>
                <div><span className="span2">⚽</span><span className="span3">Football Lover 😍</span></div>
              </div> */}
            </div>
          </div>
          {/* <div className="leftImagePar">
         <img src={solution_mindset} alt="solution_mindset" />
         </div> */}
        </div>
        <div className="profileDescPart middleSec">
          <div className="profile-cards-parent">
            <div className="profile-cards pfc-up cs">
              <div className="card-headings w100 center-flex-class">Skills</div>
              <div className="go-corner-up" href="#">
                <div className="go-arrow go-arrow-up">→</div>
              </div>
            </div>
            <div className="profile-cards pfc-up cf">
              <div className="card-headings w100 center-flex-class">
                <div className="fsd">Full Stack Developer</div>
                <div className="go-corner-up" href="#">
                  <div className="go-arrow go-arrow-up">→</div>
                </div>
              </div>
            </div>
            <div className="profile-cards pfc-down ca">
              <div className="card-headings w100 center-flex-class">Artist</div>
              <div className="go-corner-down" href="#">
                <div className="go-arrow go-arrow-down">→</div>
              </div>
            </div>
            <div className="profile-cards pfc-down cp">
              <div className="card-headings w100 center-flex-class">
                Projects
              </div>
              <div className="go-corner-down" href="#">
                <div className="go-arrow go-arrow-down">→</div>
              </div>
            </div>
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
                        {/* <img src={developer_activity} alt="arnab" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profileDescPart rightSec">
          <div className="rightImagePar hide">
            <img src={Mobile_application} alt="Mobile_application" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
