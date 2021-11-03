// Built-in
import { useState, useEffect, useRef } from "react";
import Slide from "react-reveal/Slide";

// External
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Typed from "typed.js";
import withReactContent from "sweetalert2-react-content";
import "animate.css";

// Internal
import "./Home.css";
import arnab from "../../assets/images/arnab.jpg";
import Mobile_application from "../../assets/images/Mobile_application.svg";
import developer_activity from "../../assets/images/developer_activity.svg";
import solution_mindset from "../../assets/images/solution_mindset.svg";
import ProfileCards from "../../components/ProfileCards/ProfileCards";
import location from "../../assets/icon/location.svg";
import STATIC_DATA from "../../STATIC_DATA/STATIC_DATA";

function Home() {
  const typing_txt = useRef(null);
  const [profilesArr, setProfilesArr] = useState([]);
  const mySwal = withReactContent(Swal);

  useEffect(() => {
    const typed = new Typed(typing_txt.current, {
      strings: ["Learn || Grow || Contribute ❤️"], // Strings to display
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      // cursorChar: "!",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    let newList = [...STATIC_DATA.profilesArr];
    setProfilesArr(newList);
  }, []);

  const aboutMeHandler = () => {
    const htmlPar = `<div style='text-align: justify;font-size: 18px; text-justify: inter-word;'>
    <p class='pAbout'>My name is <strong>Arnab Datta</strong>. I work as a <strong>Software Engineer</strong> by profession. I am a <strong>B.Tech</strong> graduate in <strong>Computer Science and Engineering</strong>.</p>
    <p class='pAbout'>I have 3 years of experience in the Software Development Field. I started my journey as a programmer during my college days.</p>
    <p class='pAbout'>I work as a <strong>Full Stack developer</strong> in various technologies.You can see my work domain in  <strong>Skills section</strong>.</p>
    <p class='pAbout'>Apart from my profession I have also an interest in sports, games and drawing.</p>
    </div>`;
    mySwal.fire({
      // title: <p>Hi.</p>,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      html: htmlPar,
      // icon: "info",
      iconHtml: `<div class='aboutIcon'><img class='aboutImg' src=${developer_activity} alt ="devp"/></div>`,
      customClass: {
        icon: "no-border",
      },
      iconColor: "#117ad0",
      confirmButtonColor: "#117ad0",
      backdrop: "rgba(0, 0, 0, 0.75)",
    });
  };

  async function contactMeHandler() {
    const customContactMeSwal = mySwal.mixin({
      customClass: {
        confirmButton: "btnOrange",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    const { value: text } = await customContactMeSwal.fire({
      showClass: {
        popup: "animate__animated animate__slideInLeft",
      },
      hideClass: {
        popup: "animate__animated animate__slideOutRight",
      },
      backdrop: "rgba(0, 0, 0, 0.75)",
      confirmButtonText: "Send Email",
      buttonsStyling: `background : linear-gradient(
        45deg, #d5135a, #f05924);`,
      title: "Message",
      input: "textarea",
      inputLabel: "Every word of you is valuable to me 😃",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
      preConfirm: (text) => {
        if (!text) {
          Swal.showValidationMessage(`Please Type something to send`);
        }
      },
    });

    if (text) {
      let win = window.open(
        `mailto:dattaarnab2013@gmail.com?subject=Contact%20Arnab%20Datta&body=${text}`,
        "width=1,height=1,left=5,top=3"
      );
      setTimeout(function () {
        win.close();
      }, 3000);
      // mySwal.fire({
      //   icon: "success",
      //   title: "I will catch you soon.!!!",
      //   showConfirmButton: false,
      //   timer: 1500,
      // });
    }
  }

  return (
    <Slide left>
      <div className="HomePageWrap">
        <div className="HomePage center-flex-class">
          <div className="profileDescDiv">
            {/* <div className="profileDescPart leftSec center-flex-class"> */}
            {/* <div className="leftSecInner"> */}
            <div className="profileDescPart sideClass">
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
            <div className="profileDescPart MyIntoPar center-flex-class">
              <div className="introPar">
                <div className="introPar__img">
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
                  {/* <img src={arnab} alt="arnab" /> */}
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

                    <span className="loc-txt">India</span>
                  </div>
                  <div className="span4">
                    <span className="span4-badges">Web</span>
                    <span className="span4-badges">Frontend</span>
                    <span className="span4-badges">Backend</span>
                    <span className="span4-badges">Mobile Apps</span>
                  </div>
                  <div className="span5" ref={typing_txt}>
                    {/* <span className="call">Learn</span>
                    <span className="col51">|</span>
                    <span className="col5">|</span>
                    <span className="call">Grow</span>
                    <span className="col51">|</span>
                    <span className="col5">|</span>
                    <span className="call">Contribute</span> */}
                  </div>
                  {/* <div className="btnAboutMeParent">
                        <button className="slide">About Me »</button>
                      </div> */}
                  <div className="contactCLass">
                    {/* <h3>Connect me at</h3> */}
                    <div className="contactCLassChild">
                      {profilesArr.map((social) => {
                        return (
                          <ProfileCards
                            key={social.id}
                            obj={social}
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
                    <button
                      className="profile-card__button button--blue js-message-btn"
                      onClick={aboutMeHandler}
                    >
                      About
                    </button>
                    <button
                      className="profile-card__button button--orange"
                      onClick={contactMeHandler}
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
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
