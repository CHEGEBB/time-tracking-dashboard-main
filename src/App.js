import React from "react";
import "./index.scss";

function App() {
  const profilePic = require("./images/image-jeremy.png");

  // Hardcoded data for weekly report
  const weeklyData = {
    work: "32hrs",
    play: "10hrs",
    study: "4hrs",
    exercise: "4hrs",
    social: "5hrs",
    selfCare: "2hrs"
  };

  const Daily = "Daily";
  const Weekly = "Weekly";
  const Monthly = "Monthly";

  return (
    <div className="App">
      <div className="tracking-dashboard">
        <div className="tracking-content">
          <div className="info-back">
            <div className="info">
              <div className="profile">
                <img src={profilePic} alt="profile" />
              </div>
              <h1>Report for</h1>
              <h2>Jeremy Robson</h2>
              <div className="times">
              <div className="daily">
                {Daily}
              </div>
              <div className="weekly">
                {Weekly}
              </div>
              <div className="monthly">
                {Monthly}
              </div>
              </div>
            </div>
          </div>

          {/* Render Weekly Report */}
          <div className="weekly-report">
            <div className="row-one">
              <div className="work-back">
                <div className="work-card">
                  <p>Work</p>
                  <p>{weeklyData.work}</p>
                </div>
              </div>
              <div className="play-back">
                <div className="play-card">
                  <p>Play</p>
                  <p>{weeklyData.play}</p>
                </div>
              </div>
              <div className="study-back">
                <div className="study-card">
                  <p>Study</p>
                  <p>{weeklyData.study}</p>
                </div>
              </div>
            </div>
            <div className="row-two">
              <div className="exercise-back">
                <div className="exercise-card">
                  <p>Exercise</p>
                  <p>{weeklyData.exercise}</p>
                </div>
              </div>
              <div className="social-back">
                <div className="social-card">
                  <p>Social</p>
                  <p>{weeklyData.social}</p>
                </div>
              </div>
              <div className="self-back">
                <div className="self-card">
                  <p>Self Care</p>
                  <p>{weeklyData.selfCare}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
