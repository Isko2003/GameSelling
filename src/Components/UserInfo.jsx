import React, { useEffect } from "react";
import "../UserInfo.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const UserInfo = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("loggedInUser");
    Swal.fire({
      icon: "success",
      title: t("loggedOut"),
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      navigate("/login-register");
    });
  };

  return (
    <div className="user-info-container">
      <div className="user-info-card">
        <h2 className="user-info">{t("userInformation")}</h2>
        {user ? (
          <div className="user-details">
            <div className="user-detail">
              <strong>{t("name")}:</strong>
              <span>{`${user.firstname} ${user.lastname}`}</span>
            </div>
            <div className="user-detail">
              <strong className="email-text">{t("email")}:</strong>
              <span>{user.email}</span>
            </div>
            <button onClick={handleLogOut} className="logout-button">
              {t("logout")}
            </button>
          </div>
        ) : (
          <p className="no-data">{t("nouser")}.</p>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
