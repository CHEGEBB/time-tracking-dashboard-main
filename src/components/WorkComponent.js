import React, { useState, useEffect } from 'react';
import EllipsIcon from '../images/icon-ellipsis.svg';
import WorkIcon from '../images/icon-work.svg';
import '../index.scss'

const WorkComponent = ({ selectedTimeframe }) => {
  const [workData, setWorkData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://raw.githubusercontent.com/CHEGEBB/time-tracking-dashboard-main/main/data/data0.json')
      .then((res) => res.json())
      .then((data) => {
        const timeframeData = data.timeframes[selectedTimeframe.toLowerCase()];
        setWorkData(timeframeData);
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
    <div className="work-back">
      <div className="work-icon">
        <img src={WorkIcon} alt="work" />
      </div>
      <div className="work-card">
        <div className="activity">
          <p>Work</p>
          <div className="ellips">
            <img src={EllipsIcon} alt="ellipsis" />
          </div>
        </div>
        <div className="hours">
          <p>{workData && workData.current} hrs</p>
          <div className="previous">
            <p>Last {selectedTimeframe.charAt(0).toUpperCase() + selectedTimeframe.slice(1)} - {workData && workData.previous} hrs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
