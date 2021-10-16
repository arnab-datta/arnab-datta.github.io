import { Slide } from "react-reveal";
import HeadersComponent from "../../components/Headers/Headers.js";
import ProfileCards from "../../components/ProfileCards/ProfileCards.js";
import STATIC_DATA from "../../STATIC_DATA/STATIC_DATA";
import { useState, useEffect } from "react";
import "./Profiles.css";

function Profiles() {
  const [profilesArr, setProfilesArr] = useState([]);
  useEffect(() => {
    let newList = [...STATIC_DATA.profilesArr];
    setProfilesArr(newList);
  }, []);
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
