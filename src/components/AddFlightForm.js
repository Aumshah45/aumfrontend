import React, { useState } from 'react';

const AddFlightForm = () => {
  const [formData, setFormData] = useState({
    airplaneCode: '',
    sourceAirport: '',
    destinationAirport: '',
    departureTime: '',
    arrivalTime: '',
    departureDate: '',
    arrivalDate: '',
    economySeats: '',
    premiumSeats: '',
    businessSeats: '',
    economyBaggage: '',
    premiumBaggage: '',
    businessBaggage: '',
    economyPrice: '',
    premiumPrice: '',
    businessPrice: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here.
    console.log('Flight Data:', formData);
  };

  return (
    <form className="add-flight-form" onSubmit={handleSubmit}>
      <h2>Add New Flight</h2>

      <label>Airplane Unique Code</label>
      <input type="text" name="airplaneCode" value={formData.airplaneCode} onChange={handleChange} />

      <label>Source Airport</label>
      <input type="text" name="sourceAirport" value={formData.sourceAirport} onChange={handleChange} />

      <label>Destination Airport</label>
      <input type="text" name="destinationAirport" value={formData.destinationAirport} onChange={handleChange} />

      <label>Departure Time</label>
      <input type="time" name="departureTime" value={formData.departureTime} onChange={handleChange} />

      <label>Arrival Time</label>
      <input type="time" name="arrivalTime" value={formData.arrivalTime} onChange={handleChange} />

      <label>Departure Date</label>
      <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} />

      <label>Arrival Date</label>
      <input type="date" name="arrivalDate" value={formData.arrivalDate} onChange={handleChange} />

      <h3>Seats</h3>
      <label>Economy Class</label>
      <input type="number" name="economySeats" value={formData.economySeats} onChange={handleChange} />

      <label>Premium Economy Class</label>
      <input type="number" name="premiumSeats" value={formData.premiumSeats} onChange={handleChange} />

      <label>Business Class</label>
      <input type="number" name="businessSeats" value={formData.businessSeats} onChange={handleChange} />

      <h3>Baggage Allowance</h3>
      <label>Economy Class</label>
      <input type="number" name="economyBaggage" value={formData.economyBaggage} onChange={handleChange} />

      <label>Premium Economy Class</label>
      <input type="number" name="premiumBaggage" value={formData.premiumBaggage} onChange={handleChange} />

      <label>Business Class</label>
      <input type="number" name="businessBaggage" value={formData.businessBaggage} onChange={handleChange} />

      <h3>Price</h3>
      <label>Economy Class</label>
      <input type="number" name="economyPrice" value={formData.economyPrice} onChange={handleChange} />

      <label>Premium Economy Class</label>
      <input type="number" name="premiumPrice" value={formData.premiumPrice} onChange={handleChange} />

      <label>Business Class</label>
      <input type="number" name="businessPrice" value={formData.businessPrice} onChange={handleChange} />

      <button type="submit">Add Flight</button>
    </form>
  );
};

export default AddFlightForm;
