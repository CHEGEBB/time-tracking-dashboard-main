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

  const Daily = 'Daily';
  const Weekly = 'Weekly';
  const Monthly = 'Monthly';

  return (
    <div className="App">
      <div className="tracking-dashboard">
        <div className="profile">
          <img src={profilePic} alt="profile" />
        </div>
        <div className="tracking-content">
        <div className="info">
        <h1>Report for</h1>
          <h2>Jeremy Robson</h2>
          <div className="times">
            <p>{Daily}</p>
            <p>{Weekly}</p>
            <p>{Monthly}</p>
          </div>
        </div>
         
          
          {/* Render Weekly Report */}
          <div className="weekly-report">
            <div className="row-one"></div>
            <div className="work-card">
            <p>Work</p>
              <p>{weeklyData.work}</p>
            </div>
            <div className="play-card">
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
