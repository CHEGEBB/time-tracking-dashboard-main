import { useState,useEffect } from "react";
import EllipsIcon from "../images/icon-ellipsis.svg";
import "../App";

const SelfCareComponent = () => {
    const [selfCareData, setSelfCareData] = useState({});
    useEffect(() => {
        // Fetch data for self-care activity
        fetch("http://example.com/data.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                const selfCare = data.find((activity) => activity.title === "Self Care");
                setSelfCareData(selfCare);
            })
            .catch((error) => console.error("Error fetching self-care data:", error));
    }, []);
    return ( 
        <div className = "self-care-back" >
            <div className = "self-care-icon" >
                {/* Your self-care icon */}
            </div> 
            <div className = "self-care-card" >
                <div className = "activity" >
                    <p> Self Care </p> 
                    <div className = "ellips" >
                        <img src = { EllipsIcon } alt = "ellipsis" />
                    </div> 
                </div> 
                <div className = "hours" >
                    <p> { selfCareData.timeframes && selfCareData.timeframes.weekly && selfCareData.timeframes.weekly.current } hrs </p>
                </div> 
            </div> 
        </div>
     );
}
 
export default SelfCareComponent;