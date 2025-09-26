import React from "react";
import { useTranslation } from "react-i18next";
import HomeRoundedButtons from "../components/HomeRoundedButtons";
import "./Microblog.css";
import MyPhoto from "./images/hugobraga.png";
import HomeRectangularButtons from "../components/HomeRectangularButtons";

const Microblog = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <div>
      <div>
        <h6></h6>
        <div className="hor-centered">
          <img
            src={MyPhoto}
            alt="Hugo Braga"
            style={{
              borderRadius: "50%",
              width: "110px",
              height: "110px",
              objectFit: "cover",
            }}
          />
        </div>
        <span className="myname">Hugo Braga</span>
      </div>

      <p className="hor-centered">
        <span className="small-picture">💡</span>
        {t('entrepreneur')}
      </p>
      <p className="hor-centered">
        <span className="small-picture">🎓</span>
        {t('phd')}
      </p>
      <p>
        <span className="linha-separadora">___________________________</span>
      </p>
      <p className="hor-centered">{t('open_to_entrepreneurship')}</p>
      <p className="hor-centered">{t('innovate_amazonas')}</p>
      <p className="hor-centered">
        {t('heart_of_amazon')}
        <span className="small-picture">🌳</span>
      </p>
      <p>
        <span className="linha-separadora">___________________________</span>
      </p>
      <h2></h2>
      <HomeRoundedButtons />
      <HomeRectangularButtons />
    </div>
  );
};

export default Microblog;