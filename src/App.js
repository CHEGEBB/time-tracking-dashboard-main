import React from 'react';
import './index.scss';

function App() {
  const profilePic = require('./images/image-jeremy.png');
  return (
    <div className="App">
    <div className="profile">
      <img src={profilePic} alt="profile" />
    </div>
      <h1>Report for</h1>
    </div>
  );
}

export default App;
