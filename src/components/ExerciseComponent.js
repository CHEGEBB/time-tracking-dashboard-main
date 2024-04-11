import { useState,useEffect } from "react";
import EllipsIcon from "../images/icon-ellipsis.svg";
import "../App";

const ExerciseComponent = () => {
    const [exerciseData, setExerciseData] = useState({});
    useEffect(() => {
        // Fetch data for exercise activity
        fetch("http://example.com/data.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                const exercise = data.find((activity) => activity.title === "Exercise");
                setExerciseData(exercise);
            })
            .catch((error) => console.error("Error fetching exercise data:", error));
    }, []);
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
                    <p> { exerciseData.timeframes && exerciseData.timeframes.weekly && exerciseData.timeframes.weekly.current } hrs </p>
                </div> 
            </div> 
        </div>
     );
}
 
export default ExerciseComponent;