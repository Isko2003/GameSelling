import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Register from "./Register";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const LoginRegister = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const [showPass, setShowPass] = useState("password");
  const [eye, setEyeSlash] = useState("fa-solid fa-eye-slash");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      Swal.fire({
        icon: "success",
        title: t("loginSuccessfull"),
      }).then(() => {
        navigate("/");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: t("loginFailed"),
        text: t("invalidEmail"),
      });
    }
  };

  const togglePass = () => {
    setShowPass(showPass === "password" ? "text" : "password");
    setEyeSlash(
      eye === "fa-solid fa-eye-slash"
        ? "fa-solid fa-eye"
        : "fa-solid fa-eye-slash"
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setTimeout(() => {
        handleLogin();
      }, 500);
    }
  };

  return (
    <div>
      <section className="login-register mt-5">
        <div className="login-signin">
          <div className="login-part">
            <div className="login-text">
              <h2>{t("login")}</h2>
              <div className="login-line d-flex justify-content-center">
                <img
                  src="https://gamenation.in/assets/imgs/underline.png"
                  alt="line"
                />
              </div>
            </div>
            <div className="login-fields">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                onKeyDown={handleKeyDown}
              />
              <br />
              <input
                type={showPass}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password"
                onKeyDown={handleKeyDown}
                style={{
                  borderColor:
                    password.length === 0
                      ? "white"
                      : password.length > 8
                      ? "green"
                      : "red",
                }}
              />
              <i className={eye} onClick={togglePass}></i>
              <br />
            </div>
            <div className="login-button d-flex justify-content-center">
              <button
                className="login-btn d-flex justify-content-center"
                onClick={handleLogin}
              >
                {t("login")}
              </button>
            </div>
            <span>{t("notRegistered")}</span>
            <Link to={"/register"}>
              <span>{t("registerHere")}</span>
            </Link>
          </div>
        </div>
      </section>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default LoginRegister;
