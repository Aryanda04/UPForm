import React from "react";
import profilePicture from "../assets/img/amogus-PP.jpg";


const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar__left">
          <h1>UPForm</h1>
        </div>
        <div className="navbar__right">
        <a href="">Help</a>
        <i class="fa fa-bell w3-xlarge" aria-hidden="true"></i>
          <h2>Your Name</h2>
          <img src={profilePicture} alt="profile picture" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
