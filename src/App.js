import React from 'react';
import './index.scss';

function App() {
  const profilePic = require('./images/image-jeremy.png');

  // Hardcoded data for weekly report
  const weeklyData = {
    work: '32hrs',
    play: '10hrs',
    study: '4hrs',
    exercise: '4hrs',
    social: '5hrs',
    selfCare: '2hrs',
  };

  return (
    <div className="App">
      <div className="tracking-dashboard">
        <div className="profile">
          <img src={profilePic} alt="profile" />
        </div>
        <div className="tracking-content">
          <h1>Report for</h1>
          <h2>Jeremy Robson</h2>
          
          {/* Render Weekly Report */}
          <div className="weekly-report">
            <h3>Weekly Report</h3>
            <div className="report-item">
              <p>Work</p>
              <p>{weeklyData.work}</p>
            </div>
            <div className="report-item">
              <p>Play</p>
              <p>{weeklyData.play}</p>
            </div>
            <div className="report-item">
              <p>Study</p>
              <p>{weeklyData.study}</p>
            </div>
            <div className="report-item">
              <p>Exercise</p>
              <p>{weeklyData.exercise}</p>
            </div>
            <div className="report-item">
              <p>Social</p>
              <p>{weeklyData.social}</p>
            </div>
            <div className="report-item">
              <p>Self Care</p>
              <p>{weeklyData.selfCare}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
