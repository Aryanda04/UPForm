import React from "react";
import profilePicture from "../assets/img/amogus-PP.jpg";

const LoginPage = () => {
  return (
    <>
      <div className="container">
        <a href="/">Help</a>
        <div className="loginForm__Container">
          <h1>UPForm</h1>
          <img src={profilePicture} alt="profile picture" />
          <form>
            <div className="flex-row">
              <label>Username</label>
              <input type="text" />
            </div>
            <div className="flex-row">
              <label>Password</label>
              <input type="text" />
            </div>
            <button>
              <a href="/dashboard">Sign In</a>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
