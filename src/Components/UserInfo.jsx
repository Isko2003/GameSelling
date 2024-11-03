import React from "react";
import "../UserInfo.css";

const UserInfo = () => {
  const user = JSON.parse(localStorage.getItem("user"));

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
          </div>
        ) : (
          <p className="no-data">No user data found.</p>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
