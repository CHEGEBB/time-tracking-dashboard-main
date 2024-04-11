import React from "react";
import EllipsIcon from "../images/icon-ellipsis.svg";
import "../App";

const PlayComponent = () => {
    return ( 
        <div className = "play-back" >
            <div className = "play-icon" >
                {/* Your play icon */}
            </div> 
            <div className = "play-card" >
                <div className = "activity" >
                    <p> Play </p> 
                    <div className = "ellips" >
                        <img src = { EllipsIcon } alt = "ellipsis" />
                    </div> 
                </div> 
                <div className = "hours" >
                    <p> 1 hrs </p> 
                </div> 
            </div> 
        </div>

     );
}
 
export default PlayComponent;