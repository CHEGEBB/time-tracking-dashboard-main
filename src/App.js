import React from "react";
import "./index.scss";
import WorkIcon from "./images/icon-work.svg";
import PlayIcon from "./images/icon-play.svg";
import StudyIcon from "./images/icon-study.svg";
import ExerciseIcon from "./images/icon-exercise.svg";
import SocialIcon from "./images/icon-social.svg";
import SelfCareIcon from "./images/icon-self-care.svg";


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
              <div className="work-icon">
                <img src={WorkIcon} alt="work" />
              </div>
                <div className="work-card">
                <div className="activity">
                <p>Work</p>
                </div>
                  <div className="hours">
                  <p>{weeklyData.work}</p>
                  </div>
                  
                </div>
              </div>
              <div className="play-back">
              <div className="play-icon">
                <img src={PlayIcon} alt="play" />
                </div>
                <div className="play-card">
                <div className="activity">
                <p>Play</p>
                </div>
                  <div className="hours">
                  <p>{weeklyData.play}</p>
                  </div>
                  
                </div>
              </div>
              <div className="study-back">
              <div className="study-icon">
              <img src={StudyIcon} alt="study" />
              </div>
                <div className="study-card">
                <div className="activity">
                <p>Study</p>
                </div>
                <div className="hours">
                <p>{weeklyData.study}</p>
                </div>
                </div>
              </div>
            </div>
            <div className="row-two">
              <div className="exercise-back">
              <div className="exercise-icon">
              <img src={ExerciseIcon} alt="exercise" />
              </div>
                <div className="exercise-card">
                <div className="activity">
                <p>Exercise</p>
                </div>
                <div className="hours">
                <p>{weeklyData.exercise}</p>
                </div>
                </div>
              </div>
              <div className="social-back">
              <div className="social-icon">
              <img src={SocialIcon} alt="social" />
              </div>
                <div className="social-card">
                <div className="activity">
                  <p>Social</p>
                </div>
                <div className="hours">
                  <p>{weeklyData.social}</p>
                </div>
                </div>
              </div>
              <div className="self-back">
              <div className="self-icon">
              <img src={SelfCareIcon} alt="self-care" />
              </div>
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
