import React, { useState } from 'react';
import WorkComponent from './components/WorkComponent';
import PlayComponent from './components/PlayComponent';
import StudyComponent from './components/StudyComponent';
import ExerciseComponent from './components/ExerciseComponent';
import SocialComponent from './components/SocialComponent';
import SelfCareComponent from './components/SelfCareComponent';
import InfoComponent from './components/InfoComponent';

function App() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('Daily');

  return (
    <div className="App">
      <div className="tracking-dashboard">
        <div className="tracking-content">
        <div className="ifo">
        <InfoComponent selectedTimeframe={selectedTimeframe} setSelectedTimeframe={setSelectedTimeframe} />
        </div>
         
          <div className="weekly-report">
            <div className="row-one">
              <WorkComponent selectedTimeframe={selectedTimeframe} />
              <PlayComponent selectedTimeframe={selectedTimeframe} />
              <StudyComponent selectedTimeframe={selectedTimeframe} />
            </div>
            <div className="row-two">
              <ExerciseComponent selectedTimeframe={selectedTimeframe} />
              <SocialComponent selectedTimeframe={selectedTimeframe} />
              <SelfCareComponent selectedTimeframe={selectedTimeframe} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
