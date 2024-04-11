import React from 'react';
import WorkComponent from './components/WorkComponent';
import PlayComponent from './components/PlayComponent';
import StudyComponent from './components/StudyComponent';
import ExerciseComponent from './components/ExerciseComponent';
import SocialComponent from './components/SocialComponent';

function App() {
  // You can use axios to fetch the data here if needed

  return (
    <div className="App">
      <div className="tracking-dashboard">
        <div className="tracking-content">
        <div className="weekly-report">
        <div className="row-one">
        <WorkComponent />
          <PlayComponent />
          <StudyComponent />
        </div>
        <div className="row-two">
        <ExerciseComponent />
          <SocialComponent />
          {/* <SelfCareComponent /> */}
        </div>
        </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
