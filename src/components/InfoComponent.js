// InfoComponent.js

import React, { useState } from 'react';
import Profilepic from "../images/image-jeremy.png";
import SideNav from "./SideNav";
import WorkComponent from "./WorkComponent";
import PlayComponent from "./components/PlayComponent";
import StudyComponent from "./components/StudyComponent";
import ExerciseComponent from "./components/ExerciseComponent";
import SocialComponent from "./components/SocialComponent";
import SelfCareComponent from "./components/SelfCareComponent";
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
      {/* Pass selectedTimeframe prop to each card component */}
      <WorkComponent selectedTimeframe={selectedTimeframe} />
      <PlayComponent selectedTimeframe={selectedTimeframe} />
      <StudyComponent selectedTimeframe={selectedTimeframe} />
      <ExerciseComponent selectedTimeframe={selectedTimeframe} />
      <SocialComponent selectedTimeframe={selectedTimeframe} />
      <SelfCareComponent selectedTimeframe={selectedTimeframe} />
      console.log(<SelfCareComponent selectedTimeframe={selectedTimeframe} />);
    </div>
  );
};

export default InfoComponent;
