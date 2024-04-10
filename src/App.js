import React from 'react';
import './index.scss';
import Dashboard from './components/dashboard'; 
import './components/dashboard.scss';

function App() {
  return (
    <div className="App">
      <Dashboard /> {/* Use correct case for component */}
    </div>
  );
}

export default App;
