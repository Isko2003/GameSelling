import React, { useEffect } from "react";
import { useCart } from "react-use-cart";
import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
const Itemcard2 = (props) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const { addItem } = useCart();
  const [message, setMessage] = useState("");
  const console2 = () => {
    Swal.fire({
      title: "Keep Going :)",
      text: "Product Added to Sell Cart!",
      icon: "success",
    });
  };
  return (
    <div>
      <div className="card d-flex card-sell">
        <div className="card-img card-img-sell col-7">
          <div className="card-inner-img card-inner-img-sell">
            <img
              src={props.img}
              alt="callofduty"
              width={"180px"}
              height={"220px"}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="card-main col-5">
          <div className="card-info card-sell-info">
            <p className="card-title">{props.title}</p>
          </div>
          <div className="card-price">
            <p className="pt-1"> ₹ {props.price}</p>
            <div className="normal-price d-flex pt-1 mb-0">
              <p className="m-0 p-0 sd">₹ 4499</p>
              <h4 className="m-0 p-0">{t("save51")}</h4>
            </div>
          </div>
          <br />
          <div className="add-to-cart d-flex">
            <button
              className="btn btn-primary"
              onClick={() => {
                addItem(props.item);
                console2();
              }}
            >
              {t("sellNow")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itemcard2;
