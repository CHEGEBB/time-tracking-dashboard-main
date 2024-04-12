import React, { useState, useEffect } from "react";
import EllipsIcon from "../images/icon-ellipsis.svg";
import SocialIcon from "../images/icon-social.svg";

const SocialComponent = ({ selectedTimeframe }) => {
  const [socialData, setSocialData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://raw.githubusercontent.com/CHEGEBB/time-tracking-dashboard-main/main/data/data4.json")
      .then((res) => res.json())
      .then((data) => {
        const timeframeData = data.timeframes[selectedTimeframe.toLowerCase()];
        setSocialData(timeframeData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [selectedTimeframe]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="social-back">
      <div className="social-icon">
        <img src={SocialIcon} alt="social" />
      </div>
      <div className="social-card">
        <div className="activity">
          <p>Social</p>
          <div className="ellips">
            <img src={EllipsIcon} alt="ellipsis" />
          </div>
        </div>
        <div className="hours">
          <p>{socialData && socialData.current} hrs</p>
          <div className="previous">
            <p>Last {selectedTimeframe.charAt(0).toUpperCase() + selectedTimeframe.slice(1)} - {socialData && socialData.previous} hrs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialComponent;
