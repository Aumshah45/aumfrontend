import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedButton } from '../redux/dashboardSlice'; 


const Buttons = () => {
  const dispatch = useDispatch();
  const selectedButton = useSelector(state => state.dashboard.selectedButton);

  const handleClick = (buttonName) => {
    dispatch(setSelectedButton(buttonName));
  };

  const isButtonBlue = (buttonName) => selectedButton === buttonName;

  return (
    <div className="buttons">
      <button
        className={isButtonBlue('viewFlights') ? 'blue-button' : 'gray-button'}
        onClick={() => handleClick('viewFlights')}
      >
        View Flights
      </button>
      <button
        className={isButtonBlue('addFlights') ? 'blue-button' : 'gray-button'}
        onClick={() => handleClick('addFlights')}
      >
        Add Flights
      </button>
      <button
        className={isButtonBlue('removeFlights') ? 'blue-button' : 'gray-button'}
        onClick={() => handleClick('removeFlights')}
      >
        Remove Flights
      </button>
      <button
        className={isButtonBlue('updateStatus') ? 'blue-button' : 'gray-button'}
        onClick={() => handleClick('updateStatus')}
      >
        Update Flight Status
      </button>
    </div>
  );
};

export default Buttons;
