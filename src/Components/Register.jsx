import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import LoginRegister from "./LoginRegister";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const [showPass, setShowPass] = useState("password");
  const [eye, setEyeSlash] = useState("fa-solid fa-eye-slash");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    const isEmpty = Object.values(formData).some((value) => value === "");
    if (isEmpty || formData.password.length < 9) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: t("fill"),
      });
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = storedUsers.some(
      (user) => user.email === formData.email
    );

    if (userExists) {
      Swal.fire({
        icon: "error",
        title: t("registerFail"),
        text: t("alreadyRegister"),
      });
      return;
    }

    storedUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    Swal.fire({
      title: t("registerSuccess"),
      icon: "success",
    }).then(() => {
      navigate("/login-register");
    });
  };

  const togglePass = () => {
    setShowPass(showPass === "password" ? "text" : "password");
    setEyeSlash(
      eye === "fa-solid fa-eye-slash"
        ? "fa-solid fa-eye"
        : "fa-solid fa-eye-slash"
    );
  };

  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login-register" element={<LoginRegister />} />
      </Routes>
      <section className="login-register mt-5">
        <div className="login-signup">
          <div className="login-part">
            <div className="login-text">
              <h2>{t("register")}</h2>
              <div className="login-line d-flex justify-content-center">
                <img
                  src="https://gamenation.in/assets/imgs/underline.png"
                  alt="line"
                />
              </div>
            </div>
            <div className="login-fields">
              <input
                type="text"
                name="firstname"
                placeholder={t("name")}
                value={formData.firstname}
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                name="lastname"
                placeholder={t("surname")}
                value={formData.lastname}
                onChange={handleChange}
              />
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder={t("email")}
                value={formData.email}
                onChange={handleChange}
              />
              <br />
              <input
                type={showPass}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                style={{
                  borderColor:
                    formData.password.length === 0
                      ? "white"
                      : formData.password.length > 8
                      ? "green"
                      : "red",
                }}
                placeholder={t("password")}
              />
              <i className={eye} onClick={togglePass}></i>
              <br />
            </div>
            <div className="login-button d-flex justify-content-center">
              <Link to={"/login-register"}>
                <button
                  className="login-btn d-flex justify-content-center"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRegister();
                  }}
                >
                  {t("signIn")}
                </button>
              </Link>
            </div>
            <span>{t("alreadyRegistered")} ?</span>
            <Link to={"/login-register"}>
              <span>{t("loginHere")}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
