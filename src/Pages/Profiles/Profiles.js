import { Slide } from "react-reveal";
import email from "../../assets/icon/email.png";
import facebook from "../../assets/icon/facebook.svg";
import github from "../../assets/icon/github.svg";
import instagram from "../../assets/icon/instagram.svg";
import linkedin from "../../assets/icon/linkedin.svg";
import stackoverflow from "../../assets/icon/stackoverflow.svg";
import twitter from "../../assets/icon/twitter.svg";
import HeadersComponent from "../../components/Headers/Headers.js";
import ProfileCards from "../../components/ProfileCards/ProfileCards.js";
import "./Profiles.css";

function Profiles() {
  return (
    <Slide right>
      <div className="profilePageWrap">
        <HeadersComponent
          headerName={"CONTACT & PROFILES"}
          // colorName={"cpf"}
          bcg={"swdbcg"}
          onback="/"
        ></HeadersComponent>
        <div className="profileSectionPar">
          <div className="profileSection">
            {profilesArr.map((el) => {
              return (
                <ProfileCards
                  key={el.id}
                  obj={el}
                  hgt={"100px"}
                  wdt={"100px"}
                  pdg={"20px"}
                  bds={"12px"}
                  mrgn={"15px"}
                ></ProfileCards>
              );
            })}
          </div>
        </div>
      </div>
    </Slide>
  );
}

export default Profiles;

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
    link: "https://stackoverflow.com/users/7554145/arnab-datta?tab=profile",
    iconlink: stackoverflow,
    color: "#f48225",
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
