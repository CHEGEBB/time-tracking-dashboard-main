import React, { useState, useEffect } from 'react';
import EllipsIcon from '../images/icon-ellipsis.svg';
import '../App'

const WorkComponent = () => {
  const [workData, setWorkData] = useState({});

  useEffect(() => {
    // Fetch data for work activity
    fetch('http://example.com/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const work = data.find(activity => activity.title === 'Work');
        setWorkData(work);
      })
      .catch(error => console.error('Error fetching work data:', error));
  }, []);

  return (
    <div className="work-back">
      <div className="work-icon">
        {/* Your work icon */}
      </div>
      <div className="work-card">
        <div className="activity">
          <p>Work</p>
          <div className="ellips">
            <img src={EllipsIcon} alt="ellipsis" />
          </div>
        </div>
        <div className="hours">
          <p>{workData.timeframes && workData.timeframes.weekly && workData.timeframes.weekly.current} hrs</p>
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
