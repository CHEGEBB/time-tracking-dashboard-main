import React, { useState, useEffect } from "react";
import EllipsIcon from "../images/icon-ellipsis.svg";
import ExerciseIcon from "../images/icon-exercise.svg";

const ExerciseComponent = ({ selectedTimeframe }) => {
  const [exerciseData, setExerciseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/3")
      .then((res) => res.json())
      .then((data) => {
        const timeframeData = data.timeframes[selectedTimeframe.toLowerCase()];
        setExerciseData(timeframeData);
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
    <div className="exercise-back">
      <div className="exercise-icon">
        <img src={ExerciseIcon} alt="exercise" />
      </div>
      <div className="exercise-card">
        <div className="activity">
          <p>Exercise</p>
          <div className="ellips">
            <img src={EllipsIcon} alt="ellipsis" />
          </div>
        </div>
        <div className="hours">
          <p>{exerciseData && exerciseData.current} hrs</p>
          <div className="previous">
            <p>Last {selectedTimeframe.charAt(0).toUpperCase() + selectedTimeframe.slice(1)} - {exerciseData && exerciseData.previous} hrs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseComponent;
