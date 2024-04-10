import React from "react";
import App from "../App"; 
import "../index.scss";
import "./dashboard.scss";

// Daily Report Component
const DailyReport = ({ title, hours, previousHours }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        Work: {hours}hrs {/* daily */}
        <br />
        Previous - {previousHours}hrs {/* daily */}
      </div>
    </div>
  );
};

// Weekly Report Component
const WeeklyReport = ({ title, hours, previousHours }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        Work: {hours}hrs {/* weekly */}
        <br />
        Previous - {previousHours}hrs {/* weekly */}
      </div>
    </div>
  );
};

// Monthly Report Component
const MonthlyReport = ({ title, hours, previousHours }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        Work: {hours}hrs {/* monthly */}
        <br />
        Previous - {previousHours}hrs {/* monthly */}
      </div>
    </div>
  );
};

function Dashboard() {
  return (
    <div className="dashboard">
      <App />
      <div className="dashboard__content">
        <h2>Report for Jeremy Robson</h2>
        {/* Daily Report */}
        <DailyReport title="Daily" hours={5} previousHours={7} />
        {/* Weekly Report */}
        <WeeklyReport title="Weekly" hours={32} previousHours={36} />
        {/* Monthly Report */}
        <MonthlyReport title="Monthly" hours={103} previousHours={128} />
      </div>
    </div>
  );
}

export default Dashboard;
