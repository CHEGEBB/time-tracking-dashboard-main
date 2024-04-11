import {useState, useEffect} from "react";
import EllipsIcon from "../images/icon-ellipsis.svg";
import '../App';
import SocialIcon from "../images/icon-social.svg";

const SocialComponent = () => {
    const [socialData, setSocialData]=useState({});
    useEffect(() =>{
        fetch("http://example.com/data.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            const social = data.find((activity) => activity.title === "Social");
            setSocialData(social);
        })
        .catch((error) => console.error("Error fetching social data:", error));
    }, []);
    return ( 
        <div className = "social-back" >
            <div className = "social-icon" >
                <img src = { SocialIcon } alt = "social" />
            </div> 
            <div className = "social-card" >
                <div className = "activity" >
                    <p> Social </p> 
                    <div className = "ellips" >
                        <img src = { EllipsIcon } alt = "ellipsis" />
                    </div> 
                </div> 
                <div className = "hours" >
                    <p> { socialData.timeframes && socialData.timeframes.weekly && socialData.timeframes.weekly.current } hrs </p>
                </div> 
            </div> 
        </div>

     );
}
 
export default SocialComponent;
