import React from "react";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginRegister from "./LoginRegister";
import Swal from "sweetalert2";

const Register = () => {
  const [showPass, setShowPass] = useState("password");
  const [eye, setEyeSlash] = useState("fa-solid fa-eye-slash");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleRegister = () => {
    const isEmpty = Object.values(formData).some((value) => value === "");
    if (isEmpty || formData.password.length < 9) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else {
      localStorage.setItem("user", JSON.stringify(formData));
      Swal.fire({
        title: "You Have Been Registered Successfully",
        icon: "success",
      }).then(() => {
        navigate("/login-register");
      });
    }
  };
  const togglePass = () => {
    let passInput = document.querySelector("#password");
    let eye = document.querySelector(".login-fields i");
    if (passInput.getAttribute("type") == "password") {
      setShowPass("text");
    } else {
      setShowPass("password");
    }

    if (eye.classList.contains("fa-eye-slash")) {
      setEyeSlash("fa-solid fa-eye");
    } else {
      setEyeSlash("fa-solid fa-eye-slash");
    }
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
              <h2>REGISTER</h2>
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
                placeholder="Name"
                value={formData.firstname}
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                name="lastname"
                placeholder="Surname"
                value={formData.lastname}
                onChange={handleChange}
              />
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
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
                placeholder="Password"
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
                  Sign in
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
