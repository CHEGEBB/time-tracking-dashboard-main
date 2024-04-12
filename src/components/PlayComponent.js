import React, { useState, useEffect } from "react";
import EllipsIcon from "../images/icon-ellipsis.svg";
import PlayIcon from "../images/icon-play.svg";

const PlayComponent = ({ selectedTimeframe }) => {
  const [playData, setPlayData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/1")
      .then((res) => res.json())
      .then((data) => {
        const timeframeData = data.timeframes[selectedTimeframe.toLowerCase()];
        setPlayData(timeframeData);
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
    <div className="play-back">
      <div className="play-icon">
        <img src={PlayIcon} alt="play" />
      </div>
      <div className="play-card">
        <div className="activity">
          <p>Play</p>
          <div className="ellips">
            <img src={EllipsIcon} alt="ellipsis" />
          </div>
        </div>
        <div className="hours">
          <p>{playData && playData.current} hrs</p>
          <div className="previous">
            <p>Last {selectedTimeframe.charAt(0).toUpperCase() + selectedTimeframe.slice(1)} - {playData && playData.previous} hrs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayComponent;
