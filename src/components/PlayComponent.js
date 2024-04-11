import React from "react";
import { useState, useEffect } from "react";
import EllipsIcon from "../images/icon-ellipsis.svg";
import "../App";
import PlayIcon from "../images/icon-play.svg";

const PlayComponent = () => {
    const [playData, setPlayData] = useState({});
    useEffect(() => {
        fetch("http://example.com/data.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                const play = data.find((activity) => activity.title === "Play");
                setPlayData(play);
            })
            .catch((error) => console.error("Error fetching play data:", error));
    }, []);

    return ( 
        <div className = "play-back" >
            <div className = "play-icon" >
                <img src = { PlayIcon } alt = "play" />
            </div> 
            <div className = "play-card" >
                <div className = "activity" >
                    <p> Play </p> 
                    <div className = "ellips" >
                        <img src = { EllipsIcon } alt = "ellipsis" />
                    </div> 
                </div> 
                <div className = "hours" >
                    <p> { playData.timeframes && playData.timeframes.weekly && playData.timeframes.weekly.current } hrs </p>
                </div> 
            </div> 
        </div>

     );
}
 
export default PlayComponent;