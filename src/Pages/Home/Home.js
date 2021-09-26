import "./Home.css";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
import arnab from "../../assets/images/arnab.jpg";
import Mobile_application from "../../assets/images/Mobile_application.svg";
import developer_activity from "../../assets/images/developer_activity.svg";
import solution_mindset from "../../assets/images/solution_mindset.svg";

import ProfileCards from "../../components/ProfileCards/ProfileCards";

import email from "../../assets/icon/email.png";
import facebook from "../../assets/icon/facebook.svg";
import github from "../../assets/icon/github.svg";
import instagram from "../../assets/icon/instagram.svg";
import linkedin from "../../assets/icon/linkedin.svg";
import stackoverflow from "../../assets/icon/stackoverflow.svg";
import twitter from "../../assets/icon/twitter.svg";
import location from "../../assets/icon/location.svg";

function Home() {
  return (
    <Slide left>
      <div className="HomePageWrap">
        <div className="HomePage center-flex-class">
          <div className="profileDescDiv">
            <div className="profileDescPart leftSec center-flex-class">
              <div className="leftSecInner">
                <div className="sideClass">
                  <div className="subCLs svg1">
                    <div className="imgPar m center-flex-class">
                      <img src={developer_activity} alt="developer" />
                    </div>
                  </div>
                  <div className="subCLs svg2">
                    <div className="imgPar m center-flex-class">
                      <img src={solution_mindset} alt="solution_mindset" />
                    </div>
                  </div>
                  <div className="subCLs svg3">
                    <div className="imgPar m center-flex-class">
                      <img src={Mobile_application} alt="Mobile_application" />
                    </div>
                  </div>
                </div>
                <div className="MyIntoPar center-flex-class">
                  <div className="introPar">
                    <div className="introPar__img">
                      <img src={arnab} alt="arnab" />
                    </div>
                    <div className="introParHead">
                      <div className="uname">Arnab Datta</div>
                      <div className="utxt">
                        <strong>
                          Software Developer <span>💻</span>
                        </strong>
                      </div>
                      <div className="loc">
                        <span className="loc-icon">
                          <img
                            className="loc-icon-img"
                            src={location}
                            alt="location"
                          />
                        </span>

                        <span className="loc-txt">Kolkata, India</span>
                      </div>

                      {/* <span className="span1">Hey, I'm</span>
                      <br></br>
                      <span className="span2">Arnab Datta</span>
                      <br></br>
                      <span className="span3">Software Engineer </span>
                      <span className="span31">💻</span> */}
                      <div className="span4">
                        <span className="span4-badges">Web</span>
                        <span className="span4-badges">Frontend</span>
                        <span className="span4-badges">Backend</span>
                        <span className="span4-badges">Mobile Apps</span>
                      </div>
                      <div className="span5">
                        <span className="call">Learn</span>
                        <span className="col51">|</span>
                        <span className="col5">|</span>
                        <span className="call">Grow</span>
                        <span className="col51">|</span>
                        <span className="col5">|</span>
                        <span className="call">Contribute</span>
                      </div>
                      {/* <div className="btnAboutMeParent">
                        <button className="slide">About Me »</button>
                      </div> */}
                      <div className="contactCLass">
                        {/* <h3>Connect me at</h3> */}
                        <div className="contactCLassChild">
                          {profilesArr.map((el) => {
                            return (
                              <ProfileCards
                                key={el.id}
                                obj={el}
                                hgt={"20px"}
                                wdt={"20px"}
                                pdg={"10px"}
                                bds={"50%"}
                                mrgn={"5px"}
                              ></ProfileCards>
                            );
                          })}
                        </div>
                      </div>
                      <div className="profile-card-ctr">
                        <button className="profile-card__button button--blue js-message-btn">
                          About
                        </button>
                        <button className="profile-card__button button--orange">
                          Follow
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="profilePicSection middleSec">
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
            </div> */}
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

const profilesArr = [
  {
    id: "li",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/datta-arnab/",
    iconlink: linkedin,
    color: "#007fc4",
  },
  {
    id: "gh",
    name: "GitHub",
    link: "https://github.com/arnab-datta",
    iconlink: github,
    color: "#0e0e0e",
  },

  {
    id: "so",
    name: "Stack Overflow",
    link: "https://stackoverflow.com/story/arnab-datta",
    iconlink: stackoverflow,
    color: "#ffb24a",
  },
  {
    id: "em",
    name: "Email",
    link: "mailto:dattaarnab2013@gmail.com",
    iconlink: email,
    color: "linear-gradient(45deg, #d5135a, #f05924)",
  },
  {
    id: "fb",
    name: "Facebook",
    link: "https://www.facebook.com/arnab.datta.babai/",
    iconlink: facebook,
    color: "#3b5a9a",
  },
  {
    id: "ins",
    name: "Instagram",
    link: "https://www.instagram.com/urs_arnab_/",
    iconlink: instagram,
    color:
      "linear-gradient(45deg, #405de6,#5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
  },
  {
    id: "tw",
    name: "Twitter",
    link: "https://twitter.com/ArnabDatta8",
    iconlink: twitter,
    color: "#60a9dc",
  },
];
