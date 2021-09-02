import "./Profiles.css";

import facebook from "../../assets/icon/facebook.svg";
import instagram from "../../assets/icon/instagram.svg";
import twitter from "../../assets/icon/twitter.svg";
import github from "../../assets/icon/github.svg";
import linkedin from "../../assets/icon/linkedin.svg";
import stackoverflow from "../../assets/icon/stackoverflow.svg";
import email from "../../assets/icon/email.svg";

import ProfileCards from "../../components/ProfileCards/ProfileCards.js";
import Headers from "../../components/Headers/Headers.js";



import {Fade,Slide} from "react-reveal";

function Profiles() {
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
      color: "#0171b3",
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

  return (
    <Slide right>
      <div className="profilePageWrap">
       <Headers headerName={"CONTACT & PROFILES"} colorName={"cpf"}  onback="/"></Headers>
        <div className="profileSectionPar">
          <div className="profileSection">
            {profilesArr.map((el) => {
              return <ProfileCards key={el.id} obj={el}></ProfileCards>;
            })}
          </div>
        </div>
      </div>
    </Slide>
  );
}

export default Profiles;
