// src/components/UpdateFlightStatusTable.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFlightStatus } from '../redux/dashboardSlice'; // Assuming you have an action to update flight status

const UpdateFlightStatusTable = () => {
  const flights = useSelector(state => state.dashboard.flights); // Get flights data from Redux
  const dispatch = useDispatch();

  const handleStatusChange = (flightId, status) => {
    dispatch(updateFlightStatus({ flightId, status })); // Dispatch update status action
  };

  return (
    <div className="flight-table">
      <table>
        <thead>
          <tr>
            <th>Flight ID</th>
            <th>Airline</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(flight => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.airline}</td>
              <td>{flight.source}</td>
              <td>{flight.destination}</td>
              <td>{flight.departureTime}</td>
              <td>{flight.arrivalTime}</td>
              <td>
                <select
                  value={flight.status}
                  onChange={(e) => handleStatusChange(flight.id, e.target.value)}
                >
                  <option value="ON_TIME">ON_TIME</option>
                  <option value="DELAYED">DELAYED</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateFlightStatusTable;
