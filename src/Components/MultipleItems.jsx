import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import callOfDuty from "../call_of_duty.jpeg";
import eafc23 from "../EA_2907.jpeg";
import { useTranslation } from "react-i18next";

function MultipleItems() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <div className="slider-container container">
      <Slider {...settings}>
        <Link to={"/CallOfDuty"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>{t("preOwned")}</p>
              <img
                src={callOfDuty}
                alt="Call-of-duty"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>CALL OF DUTY: MODERN WARFARE 2 - PS5 (PRE-OWNED)</p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 3399</p>
                  </div>
                  <div className="normal-price">
                    <p>₹ 5599</p>
                  </div>
                </div>
                <div className="cta-btn">
                  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/ghost"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>Pre Owned</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_73"
                alt="ghost"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>GHOST OF TSUSHIMA - PS4 (PRE-OWNED)</p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 1649</p>
                  </div>
                  <div className="normal-price">
                    <p>₹ 2599</p>
                  </div>
                </div>
                <div className="cta-btn">
                  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/lastofus"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>Pre Owned</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1934"
                alt="last-of-us"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>THE LAST OF US PART I - PS5 (PRE-OWNED)</p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 2799</p>
                  </div>
                  <div className="normal-price">
                    <p>₹ 3999</p>
                  </div>
                </div>
                <div className="cta-btn">
                  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/gtav"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>Pre Owned</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1182"
                alt="gta-v"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>GRAND THEFT AUTO V PREMIUM EDITION - PS4</p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 1999</p>
                  </div>
                </div>
                <div className="cta-btn">
                  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/horizon"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>Pre Owned</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1604"
                alt="horizon"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>HORIZON FORBIDDEN WEST - PS5 (PRE-OWNED)</p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 2099</p>
                  </div>
                  <div className="normal-price">
                    <p>₹ 2999</p>
                  </div>
                </div>
                <div className="cta-btn">
                  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/spiderman"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>Pre Owned</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_106"
                alt="spider-man"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>MARVEL'S SPIDERMAN - PS4 (PRE-OWNED)</p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 1299</p>
                  </div>
                  <div className="normal-price">
                    <p>₹ 1499</p>
                  </div>
                </div>
                <div className="cta-btn">
                  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/ghost2"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>Pre Owned</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1523"
                alt="ghost"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>GHOST OF TSUSHIMA DIRECTOR'S CUT - PS5</p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 2299</p>
                  </div>
                  <div className="normal-price">
                    <p>₹ 2899</p>
                  </div>
                </div>
                <div className="cta-btn">
                  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/fifa23"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>Pre Owned</p>
              <img src={eafc23} alt="ghost" width={"135px"} height={"170px"} />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>FIFA 23 - PS5 (PRE-OWNED)</p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 2299</p>
                  </div>
                  <div className="normal-price">
                    <p>₹ 4499</p>
                  </div>
                </div>
                <div className="cta-btn">
                  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/uncharted"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>Pre Owned</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_163"
                alt="ghost"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>UNCHARTED 4 A THIEFS END - PS4 (PRE-OWNED)</p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 899</p>
                  </div>
                  <div className="normal-price">
                    <p>₹ 1099</p>
                  </div>
                </div>
                <div className="cta-btn">
                  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Slider>
    </div>
  );
}

export default MultipleItems;
