// InfoComponent.js

import React, { useState } from 'react';
import Profilepic from "../images/image-jeremy.png";
import SideNav from "./SideNav";
import "../InfoComponent.scss";

const InfoComponent = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('Daily');

  const handleNavClick = (option) => {
    setSelectedTimeframe(option);
  };

  return (
    <div className="info-back">
    <div className="info">
    <div className="profile">
        <img src={Profilepic} alt="profile" />
      </div>
      <div className="info-content">
        <div className="profile-info">
          <h1>Report for</h1>
          <h2>Jeremy Robson</h2>
        </div>
        <div className="side-nav">
          <SideNav onNavClick={handleNavClick} selectedOption={selectedTimeframe} />
        </div>
      </div>
    </div>
     
    </div>
  );
};

export default InfoComponent;
