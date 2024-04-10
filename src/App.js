import React, { useState, useEffect } from 'react';
import './index.scss';

function App() {
  const profilePic = require('./images/image-jeremy.png');
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch('/data.json')
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
              {data.map((category, index) => (
                <div key={index}>
                  <h3>{category.title}</h3>
                  <p>{category.timeframes.daily.current}hrs</p>
                  <p>Previous - {category.timeframes.daily.previous}hrs</p>
                  <p>{category.timeframes.weekly.current}hrs</p>
                  <p>Previous - {category.timeframes.weekly.previous}hrs</p>
                  <p>{category.timeframes.monthly.current}hrs</p>
                  <p>Previous - {category.timeframes.monthly.previous}hrs</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
