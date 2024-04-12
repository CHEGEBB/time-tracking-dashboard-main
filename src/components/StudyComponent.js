import React, { useState, useEffect } from "react";
import EllipsIcon from "../images/icon-ellipsis.svg";
import StudyIcon from "../images/icon-study.svg";

const StudyComponent = ({ selectedTimeframe }) => {
  const [studyData, setStudyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://raw.githubusercontent.com/CHEGEBB/time-tracking-dashboard-main/main/data/data2.json'")
      .then((res) => res.json())
      .then((data) => {
        const timeframeData = data.timeframes[selectedTimeframe.toLowerCase()];
        setStudyData(timeframeData);
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
    <div className="study-back">
      <div className="study-icon">
        <img src={StudyIcon} alt="study" />
      </div>
      <div className="study-card">
        <div className="activity">
          <p>Study</p>
          <div className="ellips">
            <img src={EllipsIcon} alt="ellipsis" />
          </div>
        </div>
        <div className="hours">
          <p>{studyData && studyData.current} hrs</p>
          <div className="previous">
            <p>Last {selectedTimeframe.charAt(0).toUpperCase() + selectedTimeframe.slice(1)} - {studyData && studyData.previous} hrs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyComponent;
