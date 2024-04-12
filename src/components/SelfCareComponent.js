import React, { useState, useEffect } from "react";
import EllipsIcon from "../images/icon-ellipsis.svg";
import SelfCareIcon from "../images/icon-self-care.svg";

const SelfCareComponent = ({ selectedTimeframe }) => {
  const [selfCareData, setSelfCareData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://raw.githubusercontent.com/CHEGEBB/time-tracking-dashboard-main/main/data/data5.json'")
      .then((res) => res.json())
      .then((data) => {
        const timeframeData = data.timeframes[selectedTimeframe.toLowerCase()];
        setSelfCareData(timeframeData);
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
    <div className="self-back">
      <div className="self-icon">
        <img src={SelfCareIcon} alt="self-care" />
      </div>
      <div className="self-card">
        <div className="activity">
          <p>Self Care</p>
          <div className="ellips">
            <img src={EllipsIcon} alt="ellipsis" />
          </div>
        </div>
        <div className="hours">
          <p>{selfCareData && selfCareData.current} hrs</p>
          <div className="previous">
            <p>Last {selectedTimeframe.charAt(0).toUpperCase() + selectedTimeframe.slice(1)} - {selfCareData && selfCareData.previous} hrs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfCareComponent;
