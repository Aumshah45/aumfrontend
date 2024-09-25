import React from 'react';
import Header from './components/Header';
import Buttons from './components/Buttons';
import FlightTable from './components/FlightTable';
import RemoveFlightTable from './components/RemoveFlightTable'; // Import RemoveFlightTable
import UpdateFlightStatusTable from './components/UpdateFlightStatusTable'; // Import UpdateFlightStatusTable
import './App.css';
import Info from './components/Info';
import AddFlightForm from './components/AddFlightForm'; // Import AddFlightForm
import { useSelector } from 'react-redux'; // To access Redux state
import store from './store';
import { Provider } from 'react-redux';

function App() {
  const showAddFlightForm = useSelector(state => state.dashboard.showAddFlightForm); // Get Add Flight form visibility
  const showFlightTable = useSelector(state => state.dashboard.showFlightTable); // Get View Flights table visibility
  const showRemoveFlightTable = useSelector(state => state.dashboard.showRemoveFlightTable); // Get Remove Flights table visibility
  const showUpdateFlightStatusTable = useSelector(state => state.dashboard.showUpdateFlightStatusTable); // Get Update Flight Status table visibility

  return (
    <Provider store={store}>
    <div className="container">
      <Header />
      <Info />
      <Buttons />
      
      {showAddFlightForm && <AddFlightForm />} {/* Conditionally render Add Flight form */}
      {showFlightTable && <FlightTable />} {/* Conditionally render View Flights table */}
      {showRemoveFlightTable && <RemoveFlightTable />} {/* Conditionally render Remove Flights table */}
      {showUpdateFlightStatusTable && <UpdateFlightStatusTable />} {/* Conditionally render Update Flight Status table */}
    </div>
    </Provider>
  );
}


export default App;
