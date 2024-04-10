import React from "react";
import App from "../App"; 
import "../index.scss";
import "./dashboard.scss";



function Dashboard() {
  return (
    <div className="dashboard">
      <App />
      <div className="dashboard-content">
        <h2>Report for Jeremy Robson</h2>
      </div>
    </div>
  );
}

export default Dashboard;
