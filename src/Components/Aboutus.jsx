import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Aboutus = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <div className="container mt-5 spiderman about-us-wrapper">
      <br />
      <div className="word-best-sellers">
        <h3>{t("aboutUs")}</h3>
      </div>
      <div className="line line-about-us">
        <img src="https://gamenation.in/assets/imgs/underline.png" alt="line" />
      </div>
      <br />
      <div>
        <div className="word-best-sellers">
          <p>{t("whoWeAre")}</p>
        </div>
        <div className="line">
          <img
            src="https://gamenation.in/assets/imgs/underline.png"
            alt="line"
          />
        </div>
      </div>
      <br />
      <p>{t("longText")}</p>
      <p>{t("longText2")}</p>
      <div className="word-best-sellers">
        <p>{t("ourOfferings")}: </p>
      </div>
      <div className="line">
        <img src="https://gamenation.in/assets/imgs/underline.png" alt="line" />
      </div>
      <br />
      <h4>{t("best")} :</h4>
      <p>{t("longText3")}</p>
      <br />
      <h4>{t("sellYourOld")} :</h4>
      <p>{t("longText4")}</p>
      <div className="word-best-sellers">
        <h4>{t("ourPillars")}: </h4>
      </div>
      <div className="line">
        <img src="https://gamenation.in/assets/imgs/underline.png" alt="line" />
      </div>
      <br />
      <p>{t("customerObsession")}</p>
      <p>{t("valueForMoney")}</p>
      <p>{t("passion")}</p>
      <p>{t("evolution")}</p>
      <p>{t("affordable")}</p>
    </div>
  );
};

export default Aboutus;
