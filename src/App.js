import React from 'react';
import './index.scss';

function App() {
  const profilePic = require('./images/image-jeremy.png');
  return (
    <div className="App">
    <div className="tracking-dashboard">
    <div className="profile">
      <img src={profilePic} alt="profile" />
    </div>
    <div className="tracking-content">
    <h1>Report for</h1>
    <h2>Jeremy Robson</h2>
    </div>
    </div>
   
      
    </div>
  );
}

export default App;
