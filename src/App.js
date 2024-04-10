import React, { useState, useEffect } from 'react';
import './index.scss';

function App() {
  const profilePic = require('./images/image-jeremy.png');
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch('/public/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <div className="tracking-dashboard">
        <div className="profile">
          <img src={profilePic} alt="profile" />
        </div>
        <div className="tracking-content">
          <h1>Report for</h1>
          <h2>Jeremy Robson</h2>
          
          {/* Check if data is available before rendering */}
          {data && (
            <>
              {/* Render Work section */}
              <h3>Work</h3>
              {data.work.map((entry, index) => (
                <p key={index}>{entry}</p>
              ))}

              {/* Render Play section */}
              <h3>Play</h3>
              {data.play.map((entry, index) => (
                <p key={index}>{entry}</p>
              ))}

              {/* Render Study section */}
              <h3>Study</h3>
              {data.study.map((entry, index) => (
                <p key={index}>{entry}</p>
              ))}

              {/* Render Exercise section */}
              <h3>Exercise</h3>
              {data.exercise.map((entry, index) => (
                <p key={index}>{entry}</p>
              ))}

              {/* Render Social section */}
              <h3>Social</h3>
              {data.social.map((entry, index) => (
                <p key={index}>{entry}</p>
              ))}

              {/* Render Self Care section */}
              <h3>Self Care</h3>
              {data.selfCare.map((entry, index) => (
                <p key={index}>{entry}</p>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
