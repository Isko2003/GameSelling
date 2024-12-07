import React, { useEffect } from "react";
import image from "../AdAsset_96.webp";
import secondImage from "../AdAsset_100.webp";
import thirdImage from "../AdAsset_101.webp";
import fourthImage from "../AdAsset_105.webp";
import { useState } from "react";
import callOfDuty from "../call_of_duty.jpeg";
import eafc23 from "../EA_2907.jpeg";
import "../App.css";
import logoImg from "../Logo-img.png";
import logo from "../game-logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PCComponents = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const [index, setIndex] = useState(0);
  const images = [image, secondImage, thirdImage, fourthImage];

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const loadMore = () => {
    let consolesSection = document.querySelector(".consoles-section-none");
    let loadMore = document.querySelector(".load-more");
    let showLess = document.querySelector(".show-less");
    consolesSection.classList.toggle("d-none");
    loadMore.classList.add("d-none");
    showLess.classList.remove("d-none");
  };

  const showLess = () => {
    let consolesSection = document.querySelector(".consoles-section-none");
    let loadMore = document.querySelector(".load-more");
    let showLess = document.querySelector(".show-less");
    consolesSection.classList.add("d-none");
    loadMore.classList.remove("d-none");
    showLess.classList.add("d-none");
  };

  const showLegal = () => {
    let legalDropdown = document.querySelector(".legal-dropdown");
    // let legalPrivacy = document.querySelector('.legal-privacy');
    if (legalDropdown.classList.contains("d-none")) {
      legalDropdown.classList.remove("d-none");
      legalDropdown.classList.add("opacity-visible");
    } else {
      legalDropdown.classList.add("d-none");
      legalDropdown.classList.remove("opacity-visible");
    }
  };

  const showHelp = () => {
    let helpDropdown = document.querySelector(".help-dropdown");
    if (helpDropdown.classList.contains("d-none")) {
      helpDropdown.classList.remove("d-none");
      helpDropdown.classList.add("opacity-visible");
    } else {
      helpDropdown.classList.add("d-none");
      helpDropdown.classList.remove("opacity-visible");
    }
  };

  return (
    <div>
      <section className="mb-5">
        <div className="best-sellers mt-5 pb-3 consoles-section">
          <br />
          <div className="word-best-sellers d-flex justify-content-center">
            <h3>{t("components")}</h3>
          </div>
          <div className="line d-flex justify-content-center">
            <img
              src="https://gamenation.in/assets/imgs/underline.png"
              alt="line"
            />
          </div>
          <br />
          <div className="image-container">
            <div className="slider-wrapper">
              <div className="image-carousel">
                <div className="slider-images slider-images-consoles">
                  <Link to={"/samsungm7"} className="transform">
                    <div className="product-first">
                      <div className="product-name">
                        <p>{t("preOwned")}</p>
                        <img
                          src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_3004"
                          alt="Call-of-duty"
                          width={"135px"}
                          height={"170px"}
                        />
                      </div>
                      <div className="product-info">
                        <div className="product-text">
                          <p>SAMSUNG M7 UHD 4K HIGH RESOLUTION</p>
                        </div>
                        <div className="product-card d-flex justify-content-between mt-2">
                          <div className="product-price">
                            <div className="price-display">
                              <p>₹ 21799</p>
                            </div>
                            <div className="normal-price">
                              <p>₹ 27999</p>
                            </div>
                          </div>
                          <div className="cta-btn">
                            <i
                              class="fa-solid fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={"/msirtx"} className="transform">
                    <div className="product-first">
                      <div className="product-name">
                        <p>{t("preOwned")}</p>
                        <img
                          src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_2173"
                          alt="ghost"
                          width={"135px"}
                          height={"170px"}
                        />
                      </div>
                      <div className="product-info">
                        <div className="product-text">
                          <p>MSI RTX 3050 8GB VENTUS 2X - PC COMPONENT</p>
                        </div>
                        <div className="product-card d-flex justify-content-between mt-2">
                          <div className="product-price">
                            <div className="price-display">
                              <p>₹ 16999</p>
                            </div>
                            <div className="normal-price">
                              <p>₹ 21399</p>
                            </div>
                          </div>
                          <div className="cta-btn">
                            <i
                              class="fa-solid fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={"/lgultra"} className="transform">
                    <div className="product-first">
                      <div className="product-name">
                        <p>{t("preOwned")}</p>
                        <img
                          src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_3049"
                          alt="last-of-us"
                          width={"135px"}
                          height={"170px"}
                        />
                      </div>
                      <div className="product-info">
                        <div className="product-text">
                          <p>LG ULTRAGEAR - 27GP850 - 27 INCH WQHD 165HZ</p>
                        </div>
                        <div className="product-card d-flex justify-content-between mt-2">
                          <div className="product-price">
                            <div className="price-display">
                              <p>₹ 22999</p>
                            </div>
                            <div className="normal-price">
                              <p>₹ 27999</p>
                            </div>
                          </div>
                          <div className="cta-btn">
                            <i
                              class="fa-solid fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={"/zotac"} className="transform">
                    <div className="product-first">
                      <div className="product-name">
                        <p>{t("preOwned")}</p>
                        <img
                          src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_2559"
                          alt="gta-v"
                          width={"135px"}
                          height={"170px"}
                        />
                      </div>
                      <div className="product-info">
                        <div className="product-text">
                          <p>ZOTAC RTX 3080 10GB TRINITY</p>
                        </div>
                        <div className="product-card d-flex justify-content-between mt-2">
                          <div className="product-price">
                            <div className="price-display">
                              <p>₹ 22999</p>
                            </div>
                          </div>
                          <div className="cta-btn">
                            <i
                              class="fa-solid fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={"/asusrtx"} className="transform">
                    <div className="product-first">
                      <div className="product-name">
                        <p>{t("preOwned")}</p>
                        <img
                          src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_1939"
                          alt="horizon"
                          width={"135px"}
                          height={"170px"}
                        />
                      </div>
                      <div className="product-info">
                        <div className="product-text">
                          <p>ASUS RTX 2060 6GB DUAL - PC COMPONENTS</p>
                        </div>
                        <div className="product-card d-flex justify-content-between mt-2">
                          <div className="product-price">
                            <div className="price-display">
                              <p>₹ 38999</p>
                            </div>
                            <div className="normal-price">
                              <p>₹ 52999</p>
                            </div>
                          </div>
                          <div className="cta-btn">
                            <i
                              class="fa-solid fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={"/zotac2060"} className="transform">
                    <div className="product-first">
                      <div className="product-name">
                        <p>{t("preOwned")}</p>
                        <img
                          src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_1963"
                          alt="spider-man"
                          width={"135px"}
                          height={"170px"}
                        />
                      </div>
                      <div className="product-info">
                        <div className="product-text">
                          <p>ZOTAC RTX 2060 6GB (Pre-owned)</p>
                        </div>
                        <div className="product-card d-flex justify-content-between mt-2">
                          <div className="product-price">
                            <div className="price-display">
                              <p>₹ 23499</p>
                            </div>
                            <div className="normal-price">
                              <p>₹ 31999</p>
                            </div>
                          </div>
                          <div className="cta-btn">
                            <i
                              class="fa-solid fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={"/colorfulrtx"} className="transform">
                    <div className="product-first">
                      <div className="product-name">
                        <p>{t("preOwned")}</p>
                        <img
                          src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_1971"
                          alt="ghost"
                          width={"135px"}
                          height={"170px"}
                        />
                      </div>
                      <div className="product-info">
                        <div className="product-text">
                          <p>COLORFUL RTX 2060 SUPER 8GB Ultra (Pre-owned)</p>
                        </div>
                        <div className="product-card d-flex justify-content-between mt-2">
                          <div className="product-price">
                            <div className="price-display">
                              <p>₹ 5899</p>
                            </div>
                            <div className="normal-price">
                              <p>₹ 5999</p>
                            </div>
                          </div>
                          <div className="cta-btn">
                            <i
                              class="fa-solid fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={"/galaxrtx"} className="transform">
                    <div className="product-first">
                      <div className="product-name">
                        <p>{t("preOwned")}</p>
                        <img
                          src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_1975"
                          alt="ghost"
                          width={"135px"}
                          height={"170px"}
                        />
                      </div>
                      <div className="product-info">
                        <div className="product-text">
                          <p>GALAX RTX 2060 SUPER 8GB 1-Click OC (Pre-owned)</p>
                        </div>
                        <div className="product-card d-flex justify-content-between mt-2">
                          <div className="product-price">
                            <div className="price-display">
                              <p>₹ 4399</p>
                            </div>
                            <div className="normal-price">
                              <p>₹ 4999</p>
                            </div>
                          </div>
                          <div className="cta-btn">
                            <i
                              class="fa-solid fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={"/asus2070"} className="transform">
                    <div className="product-first">
                      <div className="product-name">
                        <p>{t("preOwned")}</p>
                        <img
                          src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_2006"
                          alt="ghost"
                          width={"135px"}
                          height={"170px"}
                        />
                      </div>
                      <div className="product-info">
                        <div className="product-text">
                          <p>ASUS RTX 2070 8GB Dual (Pre-owned)</p>
                        </div>
                        <div className="product-card d-flex justify-content-between mt-2">
                          <div className="product-price">
                            <div className="price-display">
                              <p>₹ 18499</p>
                            </div>
                            <div className="normal-price">
                              <p>₹ 26999</p>
                            </div>
                          </div>
                          <div className="cta-btn">
                            <i
                              class="fa-solid fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={"/galax2070"} className="transform">
                    <div className="product-first">
                      <div className="product-name">
                        <p>{t("preOwned")}</p>
                        <img
                          src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_2015"
                          alt="ghost"
                          width={"135px"}
                          height={"170px"}
                        />
                      </div>
                      <div className="product-info">
                        <div className="product-text">
                          <p>GALAX RTX 2070 8GB EXOC (Pre-owned)</p>
                        </div>
                        <div className="product-card d-flex justify-content-between mt-2">
                          <div className="product-price">
                            <div className="price-display">
                              <p>₹ 22999</p>
                            </div>
                            <div className="normal-price">
                              <p>₹ 27999</p>
                            </div>
                          </div>
                          <div className="cta-btn">
                            <i
                              class="fa-solid fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={"/gigabyte"} className="transform">
                    <div className="product-first">
                      <div className="product-name">
                        <p>{t("preOwned")}</p>
                        <img
                          src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_2076"
                          alt="ghost"
                          width={"135px"}
                          height={"170px"}
                        />
                      </div>
                      <div className="product-info">
                        <div className="product-text">
                          <p>
                            GIGABYTE RTX 2070 SUPER 8GB G1 Gaming OC (Pre-owned)
                          </p>
                        </div>
                        <div className="product-card d-flex justify-content-between mt-2">
                          <div className="product-price">
                            <div className="price-display">
                              <p>₹ 16999</p>
                            </div>
                            <div className="normal-price">
                              <p>₹ 23999</p>
                            </div>
                          </div>
                          <div className="cta-btn">
                            <i
                              class="fa-solid fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={"/galax2080"} className="transform">
                    <div className="product-first">
                      <div className="product-name">
                        <p>{t("preOwned")}</p>
                        <img
                          src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_2092"
                          alt="ghost"
                          width={"135px"}
                          height={"170px"}
                        />
                      </div>
                      <div className="product-info">
                        <div className="product-text">
                          <p>GALAX RTX 2080 8GB EX (Pre-owned)</p>
                        </div>
                        <div className="product-card d-flex justify-content-between mt-2">
                          <div className="product-price">
                            <div className="price-display">
                              <p>₹ 14999</p>
                            </div>
                            <div className="normal-price">
                              <p>₹ 21999</p>
                            </div>
                          </div>
                          <div className="cta-btn">
                            <i
                              class="fa-solid fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={"/galax2080"} className="transform">
                    <div className="product-first">
                      <div className="product-name">
                        <p>{t("preOwned")}</p>
                        <img
                          src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_2111"
                          alt="ghost"
                          width={"135px"}
                          height={"170px"}
                        />
                      </div>
                      <div className="product-info">
                        <div className="product-text">
                          <p>GALAX RTX 2080 SUPER 8GB 1-Click OC (Pre-owned)</p>
                        </div>
                        <div className="product-card d-flex justify-content-between mt-2">
                          <div className="product-price">
                            <div className="price-display">
                              <p>₹ 17999</p>
                            </div>
                            <div className="normal-price">
                              <p>₹ 21999</p>
                            </div>
                          </div>
                          <div className="cta-btn">
                            <i
                              class="fa-solid fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={"/gigabyte3050"} className="transform">
                    <div className="product-first">
                      <div className="product-name">
                        <p>{t("preOwned")}</p>
                        <img
                          src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_2178"
                          alt="ghost"
                          width={"135px"}
                          height={"170px"}
                        />
                      </div>
                      <div className="product-info">
                        <div className="product-text">
                          <p>GIGABYTE RTX 3050 8GB Eagle OC (Pre-owned)</p>
                        </div>
                        <div className="product-card d-flex justify-content-between mt-2">
                          <div className="product-price">
                            <div className="price-display">
                              <p>₹ 13999</p>
                            </div>
                            <div className="normal-price">
                              <p>₹ 17999</p>
                            </div>
                          </div>
                          <div className="cta-btn">
                            <i
                              class="fa-solid fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={"/zotac3050"} className="transform">
                    <div className="product-first">
                      <div className="product-name new-product-name">
                        <p>New</p>
                        <img
                          src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_2182"
                          alt="ghost"
                          width={"135px"}
                          height={"170px"}
                        />
                      </div>
                      <div className="product-info">
                        <div className="product-text">
                          <p>ZOTAC RTX 3050 8GB Twin OC (Pre-owned)</p>
                        </div>
                        <div className="product-card d-flex justify-content-between mt-2">
                          <div className="product-price">
                            <div className="price-display">
                              <p>₹ 49990</p>
                            </div>
                            <div className="normal-price">
                              <p>₹ 54990</p>
                            </div>
                          </div>
                          <div className="cta-btn">
                            <i
                              class="fa-solid fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={"/intelcore"} className="transform">
                    <div className="product-first">
                      <div className="product-name new-product-name">
                        <p>New</p>
                        <img
                          src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_2255"
                          alt="ghost"
                          width={"135px"}
                          height={"170px"}
                        />
                      </div>
                      <div className="product-info">
                        <div className="product-text">
                          <p>Intel Core i3 10100F Processor (Pre-owned)</p>
                        </div>
                        <div className="product-card d-flex justify-content-between mt-2">
                          <div className="product-price">
                            <div className="price-display">
                              <p>₹ 49990</p>
                            </div>
                            <div className="normal-price">
                              <p>₹ 54990</p>
                            </div>
                          </div>
                          <div className="cta-btn">
                            <i
                              class="fa-solid fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-section d-lg-flex mt-5">
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
              <p>Legal & Privacy</p>
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
              <h4>Connect with us.</h4>
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
              <div className="about-us-logo">
                <div className="about-logo d-flex justify-content-center align-items-center">
                  <img src={logoImg} alt="G-logo" />
                </div>
                <div className="about-us-word d-flex align-items-center justify-content-center">
                  <p className="p-0 m-0">{t("aboutUs")}</p>
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PCComponents;
