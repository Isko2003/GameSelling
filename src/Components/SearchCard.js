import React from 'react'
import data from '../data';
import { useState } from 'react';
const SearchCard = (props) => {
  return (
    <div className='sell-main'>
      <div className='container mt-5 spiderman search-container'>
        <div className="card-search-img">
            <div className="card-inner-img">
              <img src={props.img} alt="callofduty" width={"180px"} height={"220px"} style={{objectFit: 'cover'}}/>
            </div>
        </div>
        <div className='card-search-info'>
          <div className='card-search-inner'>
            <h4 className='search-title'>{props.title}</h4>
          </div>
          <br />
          <div className='footer-card d-flex'>
            <div>
                <p className='search-price'> ₹ {props.price}</p>
            </div>
            <div class="box-3">
              <div class="btn btn-three">
                <button className='sell-game'>Sell Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchCard