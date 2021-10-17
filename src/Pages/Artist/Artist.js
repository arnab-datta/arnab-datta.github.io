import React from "react";
import { Slide } from "react-reveal";
import HeadersComponent from "../../components/Headers/Headers";
import "./Artist.css";
import placeholder from "../../assets/images/placeholder.png";
import STATIC_DATA from "../../STATIC_DATA/STATIC_DATA";
import { useState, useEffect, useRef } from "react";

function Artist() {
  // const [profilesArr, setProfilesArr] = useState([]);
  // useEffect(() => {
  //   let newList = [...STATIC_DATA.profilesArr];
  //   setProfilesArr(newList);
  // }, []);

  return (
    <Slide right>
      <div className="ArtistPageWrap">
        <HeadersComponent
          headerName={"Artist"}
          // colorName={"cpf"}
          bcg={"swdbcg"}
          onback="/"
        />
        <div className="ArtImagesWrapper">
          <div className="ArtImagesWrapperIn">
            <div className="art-gallery-item">
              <img
                className="art-gallery-image"
                src={placeholder}
                alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
              />
            </div>

            <div className="art-gallery-item">
              <img
                className="art-gallery-image"
                src={placeholder}
                alt="sunset behind San Francisco city skyline"
              />
            </div>

            <div className="art-gallery-item">
              <img
                className="art-gallery-image"
                src={placeholder}
                alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
              />
            </div>

            <div className="art-gallery-item">
              <img
                className="art-gallery-image"
                src={placeholder}
                alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night"
              />
            </div>

            <div className="art-gallery-item">
              <img
                className="art-gallery-image"
                src={placeholder}
                alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA"
              />
            </div>

            <div className="art-gallery-item">
              <img
                className="art-gallery-image"
                src={placeholder}
                alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp"
              />
            </div>
          </div>
        </div>
      </div>
      ;
    </Slide>
  );
}

export default Artist;
