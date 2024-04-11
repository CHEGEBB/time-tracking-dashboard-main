import React, { useState, useEffect } from 'react';
import EllipsIcon from '../images/icon-ellipsis.svg';
import WorkIcon from '../images/icon-work.svg';

const WorkComponent = ({ selectedTimeframe }) => {
  // State variable to store the fetched data
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the data from the server
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to filter the data based on the selected timeframe
  const filteredData = () => {
    if (!data || data.length === 0) return [];
    return data.map(item => {
      const timeframe = item.timeframes[selectedTimeframe];
      return {
        title: item.title,
        current: timeframe.current,
        previous: timeframe.previous
      };
    });
  };

  // Log the filtered data based on the selected timeframe
  console.log(filteredData());

  // Render the component with the filtered data
  return (
    <div className="work-back">
      <div className="work-icon">
        <img src={WorkIcon} alt="work" />
      </div>
      <div className="work-card">
        <div className="activity">
          <p>Work</p>
          <div className="ellips">
            <img src={EllipsIcon} alt="ellipsis" />
          </div>
        </div>
        <div className="hours">
          <p>{filteredData().current} hrs</p>
          <div className="previous">
            <p>Last {selectedTimeframe.charAt(0).toUpperCase() + selectedTimeframe.slice(1)} - {filteredData().previous} hrs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
