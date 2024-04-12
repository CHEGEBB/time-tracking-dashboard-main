import React, { useState, useEffect } from 'react';
import EllipsIcon from '../images/icon-ellipsis.svg';
import WorkIcon from '../images/icon-work.svg';

const WorkComponent = ({ selectedTimeframe }) => {
  const [workData, setWorkData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/0')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWorkData(data);
      });
  },[]);

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
