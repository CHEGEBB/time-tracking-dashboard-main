import { useState,useEffect } from "react";
import EllipsIcon from "../images/icon-ellipsis.svg";
import "../App";

const ExerciseComponent = () => {
    return ( 
        <div className = "exercise-back" >
            <div className = "exercise-icon" >
                {/* Your exercise icon */}
            </div> 
            <div className = "exercise-card" >
                <div className = "activity" >
                    <p> Exercise </p> 
                    <div className = "ellips" >
                        <img src = { EllipsIcon } alt = "ellipsis" />
                    </div> 
                </div> 
                <div className = "hours" >
                    <p> 30 mins </p>
                </div> 
            </div> 
        </div>
     );
}
 
export default ExerciseComponent;