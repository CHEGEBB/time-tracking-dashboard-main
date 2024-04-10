import React, { useState, useEffect } from 'react';
import './index.scss';

function App() {
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setReportData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const DailyReport = ({ title, data }) => (
    <div>
      <h3>{title}</h3>
      <div>
        Work: {data.hours}hrs
        <br />
        Previous - {data.previousHours}hrs
      </div>
    </div>
  );

  const WeeklyReport = ({ title, data }) => (
    <div>
      <h3>{title}</h3>
      <div>
        Work: {data.hours}hrs
        <br />
        Previous - {data.previousHours}hrs
      </div>
    </div>
  );

  const MonthlyReport = ({ title, data }) => (
    <div>
      <h3>{title}</h3>
      <div>
        Work: {data.hours}hrs
        <br />
        Previous - {data.previousHours}hrs
      </div>
    </div>
  );

  return (
    <div className="App">
      <h1>Report Dashboard</h1>
      {reportData && (
        <div className="dashboard__content">
          <h2>Report for Jeremy Robson</h2>
          <DailyReport title="Daily" data={reportData.daily} />
          <WeeklyReport title="Weekly" data={reportData.weekly} />
          <MonthlyReport title="Monthly" data={reportData.monthly} />
        </div>
      )}
    </div>
  );
}

export default App;
