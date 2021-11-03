import React from "react";
import { Slide } from "react-reveal";
import HeadersComponent from "../../components/Headers/Headers";
import "./Artist.css";
import STATIC_DATA from "../../STATIC_DATA/STATIC_DATA";
import { useState, useEffect } from "react";

function Artist() {
  const [artsImagesArray, setArtsImagesArray] = useState([]);
  useEffect(() => {
    let newList = [...STATIC_DATA.artsImagesArray];
    setArtsImagesArray(newList);
  }, []);

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
            {artsImagesArray.map((item) => {
              return (
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://unsplash.com/@arnab_datta"
                  className="art-gallery-item"
                  key={`item_image_${item.img_id}`}
                >
                  <img
                    className="art-gallery-image"
                    src={item.img_src}
                    alt={item.img_name}
                  />
                </a>
              );
            })}
            ;
          </div>
        </div>
      </div>
      ;
    </Slide>
  );
}

export default Artist;
