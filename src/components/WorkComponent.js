import React, { useState, useEffect } from 'react';
import EllipsIcon from '../images/icon-ellipsis.svg';
import WorkIcon from '../images/icon-work.svg';

const WorkComponent = ({ selectedTimeframe }) => {
  const [workData, setWorkData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/0`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Extract the data based on selectedTimeframe
        const timeframeData = data.timeframes[selectedTimeframe];
        setWorkData(timeframeData);
      } catch (error) {
        console.error('Error fetching work data:', error);
      }
    };

    fetchData();
  }, [selectedTimeframe]);

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
