import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <section className="footer-section d-lg-flex">
      <div className="footer-logo col-md-4 col-lg-3">
        <div className="game-verse-logo d-flex mb-3">
          <img
            src={logo}
            alt="logo-game"
            width={"200px"}
            height={"100px"}
            className="m-0 p-0"
          />
        </div>
        <div className="footer-contact mb-3">
          <div className="footer-phone d-flex">
            <i class="fa-solid fa-phone"></i>
            <span>+911 213 32 22</span>
          </div>
          <div className="footer-email d-flex">
            <i class="fa-solid fa-envelope"></i>
            <span>example@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="footer-info col-md-4 d-lg-flex col-lg-6">
        <div className="legal-privacy">
          <div
            className="legal-wrapper col-12 col-lg-6 help-need"
            onClick={showLegal}
          >
            <h4>{t("legalPrivacy")}</h4>
            <ul className="legal-dropdown d-none d-lg-block">
              <li>{t("termsCondition")}</li>
              <li>{t("cancel")}</li>
              <li>{t("trade")}</li>
              <li>{t("shippingPolicy")}</li>
              <li>{t("privacyPolicy")}</li>
            </ul>
          </div>
        </div>
        <div className="legal-privacy">
          <div
            className="legal-wrapper col-12 col-lg-6 help-need"
            onClick={showHelp}
          >
            <h4>{t("needHelp")}</h4>
            <ul className="help-dropdown d-none d-lg-block">
              <li>FAQs</li>
              <li>{t("myAccount")}</li>
              <li>{t("myOrders")}</li>
              <li>GameVerse {t("wallet")}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-connect col-md-4 align-items-center col-lg-2">
        <div className="connect-with-us d-flex align-items-center">
          <div className="connect-with-us-left col-7">
            <h4>{t("connectUs")}.</h4>
            <div className="connect-with-us-logos d-flex">
              <div className="footer-insta">
                <a href="https://www.instagram.com/smaylovh/">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div className="footer-facebook">
                <a href="https://www.facebook.com/profile.php?id=100006022865354">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </div>
              <div className="footer-linkedin">
                <a href="https://www.linkedin.com/in/ismayil-isko2003/">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="about-us col-5">
            <Link to={"/aboutus"}>
              <div className="about-us-logo">
                <div className="about-logo d-flex justify-content-center align-items-center">
                  <img src={logoImg} alt="G-logo" />
                </div>
                <div className="about-us-word d-flex align-items-center justify-content-center">
                  <p className="p-0 m-0">{t("aboutUs")}</p>
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
