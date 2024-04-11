import React from "react";
import Profilepic from "../images/image-jeremy.png";
import "../App";

const InfoComponent = () => {
  return (
    <div className="info-back">
      <div className="info">
        <div className="profile">
          <img src={Profilepic} alt="profile" />
        </div>
        <div className="profile-info">
          <div className="profile-name">
            <h1>Jeremy Robson</h1>
            <p>35</p>
          </div>
          <div className="profile-location">
            <p>London</p>
          </div>
        </div>
      </div>
    </div>
  );
}