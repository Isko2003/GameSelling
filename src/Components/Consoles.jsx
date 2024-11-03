import React from 'react'
import image from '../AdAsset_96.webp'
import secondImage from '../AdAsset_100.webp'
import thirdImage from '../AdAsset_101.webp'
import fourthImage from '../AdAsset_105.webp'
import { useState } from 'react';
import callOfDuty from '../call_of_duty.jpeg'
import eafc23 from '../EA_2907.jpeg'
import '../App.css';
import logoImg from '../Logo-img.png';
import logo from '../game-logo.png'
import { Link } from 'react-router-dom'

const Consoles = () => {

  const [index, setIndex] = useState(0);
  const images = [
    image,
    secondImage,
    thirdImage,
    fourthImage
  ];

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  
  const loadMore = () => {
    let consolesSection = document.querySelector('.consoles-section-none');
    let loadMore = document.querySelector('.load-more');
    let showLess = document.querySelector('.show-less');
    consolesSection.classList.toggle("d-none");
    loadMore.classList.add("d-none");
    showLess.classList.remove("d-none");
  }

  const showLess = () => {
    let consolesSection = document.querySelector('.consoles-section-none');
    let loadMore = document.querySelector('.load-more');
    let showLess = document.querySelector('.show-less');
    consolesSection.classList.add("d-none");
    loadMore.classList.remove("d-none");
    showLess.classList.add("d-none");
  }

  const showLegal = () => {
    let legalDropdown = document.querySelector('.legal-dropdown');
    // let legalPrivacy = document.querySelector('.legal-privacy');
    if(legalDropdown.classList.contains('d-none')) {
      legalDropdown.classList.remove('d-none');
      legalDropdown.classList.add('opacity-visible');
    } else {
      legalDropdown.classList.add('d-none');
      legalDropdown.classList.remove('opacity-visible');
    }
  }
  
  const showHelp = () => {
    let helpDropdown = document.querySelector('.help-dropdown');
    if(helpDropdown.classList.contains('d-none')) {
      helpDropdown.classList.remove('d-none');
      helpDropdown.classList.add('opacity-visible');
    }
    else {
      helpDropdown.classList.add('d-none');
      helpDropdown.classList.remove('opacity-visible');
    }
  }
  

  return (
    <div>
      <section className='mb-5'>
        <div className="best-sellers mt-5 pb-3 consoles-section">
            <br />
            <div className="word-best-sellers d-flex justify-content-center">
              <h3>Consoles</h3>
            </div>
            <div className="line d-flex justify-content-center consoles-line">
              <img src="https://gamenation.in/assets/imgs/underline.png" alt="line" />
            </div>
            <br />
            <div className="image-container">
              <div className="slider-wrapper">
                <div className="image-carousel">
                  <div className="slider-images slider-images-consoles">
                    <Link to={"/ps4wire"} className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1085" alt="Call-of-duty" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 4 PLATINUM WIRELESS HEADSET - PS4 (PRE-OWNED)</p>
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
                    <Link to={"/xbox"} className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1128" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>XBOX ONE CONTROLLER (3RD GEN) GREY & GREEN - XBOX ONE (PRE-OWNED)</p>
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
                    <Link to={"/nintendo"} className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1717" alt="last-of-us" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>NINTENDO SWITCH OLED MODEL RED AND NEON BLUE - NINTENDO SWITCH (PRE-OWNED)</p>
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
                    <Link to={"/ps4pro"} className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1872" alt="gta-v" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 4 PRO 1 TB (BODY DAMAGE) BLACK - PS4 (PRE-OWNED)</p>
                          </div>
                          <div className="product-card d-flex justify-content-between mt-2">
                            <div className="product-price">
                              <div className="price-display">
                                <p>₹ 22999</p>
                              </div>
                            </div>
                            <div className="cta-btn">
                              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link to={"/ps5standard"} className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_976" alt="horizon" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 5 STANDARD EDITION 825 GB - PS5 (PRE-OWNED)</p>
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
                    <Link to={"/xboxseriesx"} className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1058" alt="spider-man" width={'135px'} height={'170px'}/>
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
                    <Link to={"/ps5dual"} className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1595" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 5 OFFICIAL DUAL SENSE CONTROLLER MIDNIGHT BLACK - PS5</p>
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
                    <Link to={"/ps5white"} className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1086" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 5 OFFICIAL DUAL SENSE CONTROLLER WHITE - PS5 (PRE-OWNED)</p>
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
                    <Link to={"/ps4slim"} className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_998" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 4 SLIM 500 GB JET BLACK - PS4 (PRE-OWNED)</p>
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
                    <Link to={"/nintendoled"} className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_999" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>NINTENDO SWITCH OLED MODEL RED AND NEON BLUE - NINTENDO SWITCH (PRE-OWNED)</p>
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
                    <Link to={"/ps4gold"} className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_1857" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 4 SLIM 1 TB (BODY DAMAGE) GOLD - PS4 (PRE-OWNED)</p>
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
                              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link to={"/ps4standard"} className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_1826" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 4 STANDARD 500GB (BODY DAMAGE) GLACIER WHITE - PS4 (PRE-OWNED)</p>
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
                              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link to={"/ps4slim"} className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_998" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 4 SLIM 500 GB JET BLACK - PS4 (PRE-OWNED)</p>
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
                              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link to={"/ps4slim"} className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_998" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 4 SLIM 500 GB JET BLACK - PS4 (PRE-OWNED)</p>
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
                              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link to={"/ps5slim"} className='transform'>
                      <div className="product-first">
                        <div className="product-name new-product-name">
                          <p>New</p>
                          <img src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_4268" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 5 SLIM DISC EDITION 1TB - PS5</p>
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
                              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link to={"/ps5slim"} className='transform'>
                      <div className="product-first">
                        <div className="product-name new-product-name">
                          <p>New</p>
                          <img src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_4268" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 5 SLIM DISC EDITION 1TB - PS5</p>
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
                              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
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

        <div className="load-more-btn load-more-consoles mt-5">
          <button className='load-more' onClick={loadMore}>Load More</button>
        </div>

        <div className="best-sellers consoles-section-none d-none">
            <div className="image-container">
              <div className="slider-wrapper">
                <div className="image-carousel">
                  <div className="slider-images slider-images-consoles">
                    <a href="../sx" className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1085" alt="Call-of-duty" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 4 PLATINUM WIRELESS HEADSET - PS4 (PRE-OWNED)</p>
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
                    </a>
                    <a href="../s" className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1128" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>XBOX ONE CONTROLLER (3RD GEN) GREY & GREEN - XBOX ONE (PRE-OWNED)</p>
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
                    </a>
                    <a href="../s" className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1717" alt="last-of-us" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>NINTENDO SWITCH OLED MODEL RED AND NEON BLUE - NINTENDO SWITCH (PRE-OWNED)</p>
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
                    </a>
                    <a href="../s" className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1872" alt="gta-v" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 4 PRO 1 TB (BODY DAMAGE) BLACK - PS4 (PRE-OWNED)</p>
                          </div>
                          <div className="product-card d-flex justify-content-between mt-2">
                            <div className="product-price">
                              <div className="price-display">
                                <p>₹ 22999</p>
                              </div>
                            </div>
                            <div className="cta-btn">
                              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="../s" className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_976" alt="horizon" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 5 STANDARD EDITION 825 GB - PS5 (PRE-OWNED)</p>
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
                    </a>
                    <a href="../s" className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1058" alt="spider-man" width={'135px'} height={'170px'}/>
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
                    </a>
                    <a href="../s" className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1595" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 5 OFFICIAL DUAL SENSE CONTROLLER MIDNIGHT BLACK - PS5</p>
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
                    </a>
                    <a href="../s" className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1086" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 5 OFFICIAL DUAL SENSE CONTROLLER WHITE - PS5 (PRE-OWNED)</p>
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
                    </a>
                    <a href="../s" className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_998" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 4 SLIM 500 GB JET BLACK - PS4 (PRE-OWNED)</p>
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
                    </a>
                    <a href="../s" className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_999" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>NINTENDO SWITCH OLED MODEL RED AND NEON BLUE - NINTENDO SWITCH (PRE-OWNED)</p>
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
                    </a>
                    <a href="../s" className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_1857" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 4 SLIM 1 TB (BODY DAMAGE) GOLD - PS4 (PRE-OWNED)</p>
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
                              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="../s" className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_1826" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 4 STANDARD 500GB (BODY DAMAGE) GLACIER WHITE - PS4 (PRE-OWNED)</p>
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
                              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="../s" className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_998" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 4 SLIM 500 GB JET BLACK - PS4 (PRE-OWNED)</p>
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
                              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="../s" className='transform'>
                      <div className="product-first">
                        <div className="product-name">
                          <p>Pre Owned</p>
                          <img src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_998" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 4 SLIM 500 GB JET BLACK - PS4 (PRE-OWNED)</p>
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
                              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="../s" className='transform'>
                      <div className="product-first">
                        <div className="product-name new-product-name">
                          <p>New</p>
                          <img src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_4268" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 5 SLIM DISC EDITION 1TB - PS5</p>
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
                              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="../s" className='transform'>
                      <div className="product-first">
                        <div className="product-name new-product-name">
                          <p>New</p>
                          <img src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_4268" alt="ghost" width={'135px'} height={'170px'}/>
                        </div>
                        <div className="product-info">
                          <div className="product-text">
                            <p>SONY PLAYSTATION 5 SLIM DISC EDITION 1TB - PS5</p>
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
                              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="load-more-btn">
          <button className="show-less d-none" onClick={showLess}>Show Less</button>
        </div>
      </section>
      
      <section className="footer-section d-lg-flex">
          <div className="footer-logo col-md-4 col-lg-3">
            <div className="game-verse-logo d-flex mb-3">
              <img src={logo} alt="logo-game" width={'200px'} height={'100px'} className='m-0 p-0'/>
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
              <div className='legal-wrapper col-12 col-lg-6 help-need' onClick={showLegal}>
                <p>Legal & Privacy</p>
                <ul className='legal-dropdown d-none d-lg-block'>
                  <li>Terms and Condition</li>
                  <li>Cancellation & Refund Policy</li>
                  <li>Trade In Policy</li>
                  <li>Shipping Policy</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
            <div className="legal-privacy">
              <div className="legal-wrapper col-12 col-lg-6 help-need" onClick={showHelp}>
                <h4>Need Help</h4>
                  <ul className='help-dropdown d-none d-lg-block'>
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
                    <a href="https://www.instagram.com/smaylovh/"><i class="fa-brands fa-instagram"></i></a>
                  </div>
                  <div className="footer-facebook">
                    <a href="https://www.facebook.com/profile.php?id=100006022865354"><i class="fa-brands fa-facebook"></i></a>
                  </div>
                  <div className="footer-linkedin">
                    <a href="https://www.linkedin.com/in/ismayil-isko2003/"><i class="fa-brands fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
              <div className="about-us col-5">
                <div className="about-us-logo">
                  <div className="about-logo d-flex justify-content-center align-items-center">
                    <img src={logoImg} alt="G-logo" />
                  </div>
                  <div className="about-us-word d-flex align-items-center justify-content-center">
                    <p className='p-0 m-0'>About Us</p>
                    <i class="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Consoles