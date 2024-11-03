import React from "react";
import { useCart } from "react-use-cart";
import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Swal from "sweetalert2";
// import Basket from './Basket';
const Itemcard = (props) => {
  const { addItem } = useCart();
  const [message, setMessage] = useState("");

  const console = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product Added to Cart",
      showConfirmButton: true,
      timer: 1500,
    });
  };
  const console2 = () => {
    Swal.fire({
      title: "Now You Can Sell Your Product",
      text: "Product Added to Sell Cart!",
      icon: "success",
    });
  };
  return (
    <div>
      <div className="card d-flex">
        <div className="card-img">
          <div className="card-inner-img card-inside-img">
            <img
              src={props.img}
              alt="callofduty"
              width={"180px"}
              height={"220px"}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="card-main">
          <div className="card-info">
            <h4 className="card-title">{props.title}</h4>
            <div className="d-flex card-description">
              <div className="card-desc">
                <p>{props.desc}</p>
              </div>
              <div className="card-stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <div className="card-price">
            <p className="pt-2"> ₹ {props.price}</p>
            <div className="normal-price d-flex mt-1">
              <p>₹ 4499</p>
              <h4>Save 51%</h4>
            </div>
          </div>
          <div className="add-to-cart d-flex mt-3">
            <button
              className="btn btn-success"
              onClick={() => {
                addItem(props.item);
                console();
              }}
            >
              Add to Cart
            </button>
            <span className="d-flex d-none">
              {message}
              <i class="fa-solid fa-check"></i>
            </span>
            <button
              className="btn btn-primary"
              onClick={() => {
                addItem(props.item);
                console2();
              }}
            >
              Sell Now
            </button>
            <span className="d-flex d-none sell-span">
              {message}
              <i class="fa-solid fa-check"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itemcard;
