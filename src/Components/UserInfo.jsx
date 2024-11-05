import React from "react";
import "../UserInfo.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserInfo = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("loggedInUser");
    Swal.fire({
      icon: "success",
      title: "Logged out successfully",
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      navigate("/login-register");
    });
  };

  return (
    <div className="user-info-container">
      <div className="user-info-card">
        <h2>User Information</h2>
        {user ? (
          <div className="user-details">
            <div className="user-detail">
              <strong>Name:</strong>
              <span>{`${user.firstname} ${user.lastname}`}</span>
            </div>
            <div className="user-detail">
              <strong>Email:</strong>
              <span>{user.email}</span>
            </div>
            <button onClick={handleLogOut} className="logout-button">
              Log Out
            </button>
          </div>
        ) : (
          <p className="no-data">No user data found.</p>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
