import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
function MultipleConsoles() {
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
        <Link to={"/ps5standard"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>Pre Owned</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_976"
                alt="last-of-us"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>
                  SONY PLAYSTATION 5 STANDARD EDITION 825 GB - PS5 (PRE-OWNED)
                </p>
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
                  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/xboxs"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>Pre Owned</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1058"
                alt="gta-v"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>MICROSOFT XBOX SERIES S 512GB - XBOX SERIES X (PRE-OWNED)</p>
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
                  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/ps5dual"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>Pre Owned</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1595"
                alt="last-of-us"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>
                  SONY PLAYSTATION 5 OFFICIAL DUAL SENSE CONTROLLER MIDNIGHT
                  BLACK - PS5
                </p>
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
                  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/ps5white"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>Pre Owned</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1086"
                alt="spider-man"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>
                  SONY PLAYSTATION 5 OFFICIAL DUAL SENSE CONTROLLER WHITE - PS5
                  (PRE-OWNED)
                </p>
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
                  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/ps4jet"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>Pre Owned</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_998"
                alt="ghost"
                width={"135px"}
                height={"170px"}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <p>
                  SONY PLAYSTATION 4 SLIM 500 GB JET BLACK - PS4 (PRE-OWNED)
                </p>
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
                  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/nintendo"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>Pre Owned</p>
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
              <p>Pre Owned</p>
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
                  SONY PLAYSTATION 4 PRO 1 TB (BODY DAMAGE) BLACK - PS4
                  (PRE-OWNED)
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
        <Link to={"/nintendoled"} className="transform">
          <div className="product-first">
            <div className="product-name">
              <p>Pre Owned</p>
              <img
                src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_999"
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
      </Slider>
    </div>
  );
}

export default MultipleConsoles;
