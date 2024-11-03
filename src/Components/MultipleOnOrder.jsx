import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route, Link, NavLink } from 'react-router-dom';
const MultipleOnOrder = () => {
    const settings = {
        dots: true, 
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5
      };
  return (
    <div className='slider-container'>
        <Slider {...settings}>
        <Link to={"/ps5slim"} className='transform'>
                  <div className="product-first">
                    <div className="product-name new-product-name">
                      <p>New</p>
                      <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_4268" alt="Call-of-duty" width={'135px'} height={'170px'}/>
                    </div>
                    <div className="product-info">
                      <div className="product-text">
                        <p>SONY PLAYSTATION 5 SLIM DISC EDITION 1TB - PS5</p>
                      </div>
                      <div className="product-card d-flex justify-content-between mt-2">
                        <div className="product-price">
                          <div className="price-display">
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
                <Link to={"/elden-ring"} className='transform'>
                  <div className="product-first">
                    <div className="product-name">
                      <p>Pre Order</p>
                      <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_4210" alt="Call-of-duty" width={'135px'} height={'170px'}/>
                    </div>
                    <div className="product-info">
                      <div className="product-text">
                        <p>ELDEN RING: SHADOW OF THE ERDTREE EDITION - PS5</p>
                      </div>
                      <div className="product-card d-flex justify-content-between mt-2">
                        <div className="product-price">
                          <div className="price-display">
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
                <Link to={"/f1-24"} className='transform'>
                  <div className="product-first">
                    <div className="product-name">
                      <p>Pre Order</p>
                      <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_4209" alt="Call-of-duty" width={'135px'} height={'170px'}/>
                    </div>
                    <div className="product-info">
                      <div className="product-text">
                        <p>F1 24 - PS5</p>
                      </div>
                      <div className="product-card d-flex justify-content-between mt-2">
                        <div className="product-price">
                          <div className="price-display">
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
                <Link to={"/f1-24"} className='transform'>
                  <div className="product-first">
                    <div className="product-name">
                      <p>Pre Order</p>
                      <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_4209" alt="Call-of-duty" width={'135px'} height={'170px'}/>
                    </div>
                    <div className="product-info">
                      <div className="product-text">
                        <p>F1 24 - PS5</p>
                      </div>
                      <div className="product-card d-flex justify-content-between mt-2">
                        <div className="product-price">
                          <div className="price-display">
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
                <Link to={"/motogp"} className='transform'>
                  <div className="product-first">
                    <div className="product-name">
                      <p>New</p>
                      <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_4213" alt="Call-of-duty" width={'135px'} height={'170px'}/>
                    </div>
                    <div className="product-info">
                      <div className="product-text">
                        <p>MOTOGP 24 - PS5</p>
                      </div>
                      <div className="product-card d-flex justify-content-between mt-2">
                        <div className="product-price">
                          <div className="price-display">
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
                <Link to={"/ps4wire"} className='transform'>
                  <div className="product-first">
                    <div className="product-name">
                      <p>Pre Owned</p>
                      <img src="https://relay-bl-in-records.sgp1.cdn.digitaloceanspaces.com/GameNation/EA_1085" alt="gta-v" width={'135px'} height={'170px'}/>
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
        </Slider>
    </div>
  )
}

export default MultipleOnOrder