import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFlightsByAirlineCode } from '../redux/dashboardSlice';

const FlightTable = () => {
  const dispatch = useDispatch();
  const showFlightTable = useSelector(state => state.dashboard.showFlightTable);
  const flights = useSelector(state => state.dashboard.flights);

  // Fetch flights when the component mounts or the showFlightTable state changes
  useEffect(() => {
    if (showFlightTable) {
      dispatch(fetchFlightsByAirlineCode('airplane_unique_code')); // Replace 'YOUR_AIRLINE_CODE' with the actual airline code
    }
  }, [dispatch, showFlightTable]);

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
          {flights.map(flight => (
            <tr key={flight.flight_id}>
              <td>{flight.flight_id}</td>
              <td>{flight.source_airport}</td>
              <td>{flight.destination_airport}</td>
              <td>{flight.departure_time}</td>
              <td>{flight.arrival_time}</td>
              <td>{flight.departure_date}</td>
              <td>{flight.arrival_date}</td>
              <td className={`status ${flight.status === 'on-time' ? 'on-time' : 'delayed'}`}>
                {flight.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightTable;
