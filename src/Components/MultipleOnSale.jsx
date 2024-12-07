import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function MultipleOnSale() {
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
        <Link to={"/madden"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>{t("preOwned")}</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1240"
                alt="last-of-us"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>MADDEN NFL 21 - XBOX ONE (PRE-OWNED)</p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 1499</p>
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
        <Link to={"/ps4"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>{t("preOwned")}</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1085"
                alt="gta-v"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>
                  SONY PLAYSTATION 4 PLATINUM WIRELESS HEADSET - PS4 (PRE-OWNED)
                </p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 5999</p>
                  </div>
                  <div className="normal-price">
                    <p>₹ 9999</p>
                  </div>
                </div>
                <div className="cta-btn">
                  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/madden"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>{t("preOwned")}</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1240"
                alt="last-of-us"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>MADDEN NFL 21 - XBOX ONE (PRE-OWNED)</p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 1499</p>
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
        <Link to={"/f1"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>{t("preOwned")}</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1786"
                alt="spider-man"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>F1 2022 - XBOX SERIES X (PRE-OWNED)</p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 1699</p>
                  </div>
                  <div className="normal-price">
                    <p>₹ 3799</p>
                  </div>
                </div>
                <div className="cta-btn">
                  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/xbox"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>{t("preOwned")}</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1128"
                alt="ghost"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>
                  XBOX ONE CONTROLLER (3RD GEN) GREY & GREEN - XBOX ONE
                  (PRE-OWNED)
                </p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 3099</p>
                  </div>
                  <div className="normal-price">
                    <p>₹ 4199</p>
                  </div>
                </div>
                <div className="cta-btn">
                  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/nintendo"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>{t("preOwned")}</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1717"
                alt="ghost"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>
                  NINTENDO SWITCH OLED MODEL RED AND NEON BLUE - NINTENDO SWITCH
                  (PRE-OWNED)
                </p>
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
                  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/ps4pro"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>{t("preOwned")}</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1872"
                alt="ghost"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>
                  SONY PLAYSTATION 4 PRO 1 TB (BODY DAMAGE) BLACK - PS4 (
                  {t("preOwned")})
                </p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 22999</p>
                  </div>
                  <div className="normal-price">
                    <p>₹ 24999</p>
                  </div>
                </div>
                <div className="cta-btn">
                  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/ps4pro"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>{t("preOwned")}</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1872"
                alt="ghost"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>
                  SONY PLAYSTATION 4 PRO 1 TB (BODY DAMAGE) BLACK - PS4 (
                  {t("preOwned")})
                </p>
              </div>
              <div className="product-card d-flex justify-content-between mt-2">
                <div className="product-price">
                  <div className="price-display">
                    <p>₹ 22999</p>
                  </div>
                  <div className="normal-price">
                    <p>₹ 24999</p>
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

export default MultipleOnSale;
