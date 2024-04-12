import React, { useState, useEffect } from "react";
import EllipsIcon from "../images/icon-ellipsis.svg";
import PlayIcon from "../images/icon-play.svg";

const PlayComponent = () => {
  const [playData, setPlayData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const play = data.find((activity) => activity.title === "Play");
        setPlayData(play);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching play data:", error));
  }, []);

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
          <p>
            {playData.timeframes &&
              playData.timeframes.weekly &&
              playData.timeframes.weekly.current}{" "}
            hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayComponent;
