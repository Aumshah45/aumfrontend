import React from 'react';
import { useSelector } from 'react-redux';


const FlightTable = () => {
  const showFlightTable = useSelector(state => state.dashboard.showFlightTable);

  if (!showFlightTable) {
    return null; 
  }

  return (
    <div className="flight-table">
      <table>
        <thead>
          <tr>
            <th>Flight ID</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Departure Date</th>
            <th>Arrival Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1022</td>
            <td>Bangalore</td>
            <td>Delhi</td>
            <td>10:15</td>
            <td>12:45</td>
            <td>12/10/2024</td>
            <td>12/10/2024</td>
            <td className="status on-time">ON TIME</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FlightTable;
