import React from "react";
import logo from "../game-logo.png";
import secondImage from "../AdAsset_100.webp";
import thirdImage from "../AdAsset_101.webp";
import fourthImage from "../AdAsset_105.webp";
import { useState } from "react";
import callOfDuty from "../call_of_duty.jpeg";
import eafc23 from "../EA_2907.jpeg";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Consoles from "./Consoles";
import "../App.css";
import Sell from "./Sell";
import logoImg from "../Logo-img.png";
import CallOfDuty from "./CallOfDuty";
import { CartProvider } from "react-use-cart";
import Ghost from "./Ghost";
import LastOfUs from "./LastOfUs";
import RiseOfRonin from "./RiseOfRonin";
import Search from "./Search";
import Aboutus from "./Aboutus";
import MultipleItems from "./MultipleItems";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MultipleOnSale from "./MultipleOnSale";
import MultipleConsoles from "./MultipleConsoles";
import MultipleOnArrivals from "./MultipleOnArrivals";
import MultipleOnOrder from "./MultipleOnOrder";
const Home = () => {
  const showLinks = () => {
    let dots = document.querySelector(".three-dots");
    let links = document.querySelector(".header-links");
    let sample = document.querySelector(".sample");
    sample.style.backgroundColor = "#1d1d1d";
    sample.classList.toggle("d-none");
    sample.classList.toggle("d-block");
    sample.style.width = "450px";
    sample.style.height = "140px";
    sample.innerHTML = `<div>${links.innerHTML}</div>`;
    links.style.position = "absolute";
    links.style.display = "block";
    let dropLink = document.querySelector(".drop-link");
    dropLink.onclick = function () {
      let dropdown = document.querySelector(".drop-link .dropdown");
      dropdown.classList.toggle("show-links");
      dropdown.classList.toggle("d-none");
    };
    sample.style.position = "absolute";
    sample.style.top = "4rem";
    sample.style.left = "0";
    sample.style.height = "100vh";
    sample.style.width = "100%";
    dots.style.position = "relative";
    dots.append(sample);
  };

  const showLinksComputer = () => {
    let dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("d-none");
  };

  const [index, setIndex] = useState(0);
  const images = [secondImage, thirdImage, fourthImage];

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
    let bestSellersNone = document.querySelector(".best-sellers-none");
    let loadMore = document.querySelector(".load-more");
    bestSellersNone.classList.toggle("d-none");
    loadMore.classList.add("d-none");
  };

  const showLess = () => {
    let bestSellersNone = document.querySelector(".best-sellers-none");
    let loadMore = document.querySelector(".load-more");
    bestSellersNone.classList.add("d-none");
    loadMore.classList.remove("d-none");
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
    <CartProvider>
      <div>
        <Routes>
          <Route path="/Sell" element={<Sell />} />
          <Route path="/CallOfDuty" element={<CallOfDuty />} />
          <Route path="/ghost" element={<Ghost />} />
          <Route path="/lastofus" element={<LastOfUs />} />
          <Route path="/search" element={<Search />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
        <div className="header-images-section">
          <div className="header-images d-flex flex-wrap justify-content-center">
            <button className="prev" onClick={prevSlide}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            {images.map((imageUrl, i) => (
              <div key={i} style={{ display: index === i ? "block" : "none" }}>
                <Link to={"/search"}>
                  <img
                    src={imageUrl}
                    alt={`ad${i}`}
                    width={"900px"}
                    height={"400px"}
                  />
                </Link>
              </div>
            ))}
            <button className="next" onClick={nextSlide}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="best-sellers mt-4 sellers-line">
          <br />
          <div className="word-best-sellers d-flex justify-content-center">
            <h3>Best Sellers</h3>
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
                <div className="slider-images">
                  <MultipleItems />
                </div>
              </div>
            </div>
          </div>
          <div className="load-more-btn">
            <button className="load-more" onClick={loadMore}>
              Load More
            </button>
          </div>
        </div>

        <div className="best-sellers mt-4 best-sellers-none d-none sellers-line">
          <div className="image-container">
            <div className="slider-wrapper">
              <div className="image-carousel">
                <div className="slider-images">
                  <MultipleItems />
                </div>
              </div>
            </div>
          </div>
          <div className="load-more-btn">
            <button className="show-less" onClick={showLess}>
              Show Less
            </button>
          </div>
        </div>

        <div className="best-sellers mt-4 new-arrivals">
          <br />
          <div className="word-best-sellers d-flex justify-content-center">
            <h3>New Arrivals</h3>
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
                <div className="slider-images">
                  <MultipleOnArrivals />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="best-sellers mt-4 on-sale">
          <br />
          <div className="word-best-sellers d-flex justify-content-center on-sale-word">
            <h3>On Sale</h3>
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
                <div className="slider-images">
                  <MultipleOnSale />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="best-sellers mt-4 pre-order">
          <br />
          <div className="word-best-sellers d-flex justify-content-center">
            <h3>Pre Order</h3>
          </div>
          <div className="line d-flex justify-content-center pre-order-line">
            <img
              src="https://gamenation.in/assets/imgs/underline.png"
              alt="line"
            />
          </div>
          <br />
          <div className="image-container">
            <div className="slider-wrapper">
              <div className="image-carousel">
                <div className="slider-images">
                  <MultipleOnOrder />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="best-sellers mt-4 consoles-accesories">
          <br />
          <div className="word-best-sellers d-flex justify-content-center">
            <h3>Consoles & Accessories</h3>
          </div>
          <div className="line d-flex justify-content-center consoles-line">
            <img
              src="https://gamenation.in/assets/imgs/underline.png"
              alt="line"
            />
          </div>
          <br />
          <div className="image-container">
            <div className="slider-wrapper">
              <div className="image-carousel">
                <div className="slider-images">
                  <MultipleConsoles />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="sell-section">
          <div className="section-wrapper d-flex align-items-center">
            <div className="section-image col-6 col-md-4 col-lg-2">
              <img src="https://gamenation.in/assets/imgs/gdw.png" alt="man" />
            </div>
            <div className="section-info col-6 col-md-3 col-lg-3">
              <div className="section-inner">
                <h3>We also buy games</h3>
                <p>Looking to sell your games?</p>
                <p>It's easy. Follow 3 steps and sell your games</p>
                <br />
                <Link to={"/Sell"} className="sell-now">
                  Sell Now
                </Link>
              </div>
            </div>
            <div className="steps col-md-6 d-none col-lg-6 d-lg-grid d-md-none">
              <div className="first-step d-md-none d-lg-grid col-lg-4">
                <p>1</p>
                <div className="main-console-image">
                  <div className="console-image">
                    <img
                      src="https://gamenation.in/assets/imgs/st-c-1.png"
                      alt="console"
                    />
                  </div>
                </div>
                <h4>Select a game</h4>
                <p>Select a game that you want to sell</p>
              </div>
              <div className="first-step d-md-none d-lg-grid col-lg-4">
                <p>2</p>
                <div className="main-console-image">
                  <div className="console-image">
                    <img
                      src="https://gamenation.in/assets/imgs/st-c-3.png"
                      alt="console"
                    />
                  </div>
                </div>
                <h4>Shipping</h4>
                <p>Free pickup at you door step</p>
              </div>
              <div className="first-step d-md-none d-lg-grid col-lg-4">
                <p>3</p>
                <div className="main-console-image">
                  <div className="console-image">
                    <img
                      src="https://gamenation.in/assets/imgs/st-c-2.png"
                      alt="console"
                    />
                  </div>
                </div>
                <h4>Get paid</h4>
                <p>In cash or Credits</p>
              </div>
            </div>
          </div>
        </section>

        <section className="assure-section mb-5">
          <div className="best-sellers mt-4">
            <br />
            <div className="word-best-sellers d-flex justify-content-center">
              <h3>We assure</h3>
            </div>
            <div className="line d-flex justify-content-center">
              <img
                src="https://gamenation.in/assets/imgs/underline.png"
                alt="line"
              />
            </div>
            <br />

            <div className="boxes">
              <div className="first-box">
                <div className="shipping-container">
                  <div className="shipping-icon">
                    <i class="fa-solid fa-truck-fast"></i>
                  </div>
                  <div className="shipping">
                    <h4>Free shipping</h4>
                    <p>Cash on delivery</p>
                  </div>
                </div>
              </div>
              <div className="first-box">
                <div className="shipping-container">
                  <div className="shipping-icon">
                    <i class="fa-solid fa-repeat"></i>
                  </div>
                  <div className="shipping">
                    <h4>Trade in</h4>
                    <p>Buy Play Sell Repeat</p>
                  </div>
                </div>
              </div>
              <div className="first-box">
                <div className="shipping-container">
                  <div className="shipping-icon">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <div className="shipping">
                    <h4>Support</h4>
                    <p>10AM - 6PM (Mon-Sat)</p>
                  </div>
                </div>
              </div>
              <div className="first-box">
                <div className="shipping-container">
                  <div className="shipping-icon">
                    <i class="fa-solid fa-rotate-left"></i>
                  </div>
                  <div className="shipping">
                    <h4>Easy Returns</h4>
                    <p>7 Days return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                <h4>Legal & Privacy</h4>
                <ul className="legal-dropdown d-none d-lg-block">
                  <li>Terms and Condition</li>
                  <li>Cancellation & Refund Policy</li>
                  <li>Trade In Policy</li>
                  <li>Shipping Policy</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
            <div className="legal-privacy">
              <div
                className="legal-wrapper col-12 col-lg-6 help-need"
                onClick={showHelp}
              >
                <h4>Need Help</h4>
                <ul className="help-dropdown d-none d-lg-block">
                  <li>FAQs</li>
                  <li>My Account</li>
                  <li>My Orders</li>
                  <li>GameVerse Wallet</li>
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
                <Link to={"/aboutus"}>
                  <div className="about-us-logo">
                    <div className="about-logo d-flex justify-content-center align-items-center">
                      <img src={logoImg} alt="G-logo" />
                    </div>
                    <div className="about-us-word d-flex align-items-center justify-content-center">
                      <p className="p-0 m-0">About Us</p>
                      <i class="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </CartProvider>
  );
};

export default Home;
