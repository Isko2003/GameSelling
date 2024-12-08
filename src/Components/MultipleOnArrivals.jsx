import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MultipleOnArrivals = () => {
  const [t, i18n] = useTranslation();
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
    <div className="slider-container">
      <Slider {...settings}>
        <Link to={"/stellar"} className="transform">
          <div className="product-first">
            <div className="product-name new-product-name">
              <p>{t("new")}</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_4282"
                alt="Call-of-duty"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>STELLAR BLADE - PS5</p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 4999</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/spiderman2"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>{t("preOwned")}</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_3949"
                alt="ghost"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>MARVEL'S SPIDER-MAN 2 - PS5 (PRE-OWNED)</p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 4099</p>
                  </div>
                  <div className="normal-price">
                    <p>₹ 4899</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/cyberpunk"} className="transform">
          <div className="product-first">
            <div className="product-name new-product-name">
              <p>{t("new")}</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_4088"
                alt="last-of-us"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>CYBERPUNK 2077: ULTIMATE EDITION - PS5</p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 3999</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/riseofronin"} className="transform">
          <div className="product-first">
            <div className="product-name new-product-name">
              <p>{t("new")}</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_4161"
                alt="gta-v"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>RISE OF THE RONIN - PS5</p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 4899</p>
                  </div>
                  <div className="normal-price">
                    <p>₹ 4999</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/assassincreed"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>{t("preOwned")}</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_3917"
                alt="horizon"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>ASSASSIN'S CREED MIRAGE - PS5 (PRE-OWNED)</p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 2699</p>
                  </div>
                  <div className="normal-price">
                    <p>₹ 3399</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/avatar"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>{t("preOwned")}</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_4156"
                alt="spider-man"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>AVATAR: FRONTIERS OF PANDORA - PS5 (PRE-OWNED)</p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 2899</p>
                  </div>
                  <div className="normal-price">
                    <p>₹ 4799</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/crew"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>{t("preOwned")}</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_3954"
                alt="ghost"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>THE CREW MOTORFEST SPECIAL EDITION - PS5 (PRE-OWNED)</p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 3499</p>
                  </div>
                  <div className="normal-price">
                    <p>₹ 4699</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default MultipleOnArrivals;
