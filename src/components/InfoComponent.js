import React from "react";
import Profilepic from "../images/image-jeremy.png";
import "../App";

const InfoComponent =() => {
  return (
    <div className="info-back">
      <div className="info">
        <div className="profile">
          <img src={Profilepic} alt="profile" />
        </div>
        <div className="profile-info">
          <div className="profile-name">
          <h1>Report for</h1>
            <h2>Jeremy Robson</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InfoComponent;