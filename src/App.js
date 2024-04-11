import React from 'react';
import WorkComponent from './components/WorkComponent';
import PlayComponent from './components/PlayComponent';
import StudyComponent from './components/StudyComponent';

function App() {
  // You can use axios to fetch the data here if needed

  return (
    <div className="App">
      <div className="tracking-dashboard">
        <div className="tracking-content">
          <WorkComponent />
          <PlayComponent />
          <StudyComponent />
          {/* <ExerciseComponent />
          <SocialComponent />
          <SelfCareComponent /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
