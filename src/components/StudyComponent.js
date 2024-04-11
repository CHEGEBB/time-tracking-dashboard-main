import {useState, useEffect} from "react";
import EllipsIcon from "../images/icon-ellipsis.svg";
import "../App";

const StudyComponent = () => {
    const [studyData, setStudyData] = useState({});
    useEffect(() => {
        // Fetch data for study activity
        fetch("http://example.com/data.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                const study = data.find((activity) => activity.title === "Study");
                setStudyData(study);
            })
            .catch((error) => console.error("Error fetching study data:", error));
    }, []);
    return ( 
        <div className = "study-back" >
            <div className = "study-icon" >
                {/* Your study icon */}
            </div> 
            <div className = "study-card" >
                <div className = "activity" >
                    <p> Study </p> 
                    <div className = "ellips" >
                        <img src = { EllipsIcon } alt = "ellipsis" />
                    </div> 
                </div> 
                <div className = "hours" >
                    <p> { studyData.timeframes && studyData.timeframes.weekly && studyData.timeframes.weekly.current } hrs </p>
                </div> 
            </div> 
        </div>
     );
}
 
export default StudyComponent;