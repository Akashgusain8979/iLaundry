import React, { useState } from 'react';
import '../Styles/SchedulePickup.css';

const SchedulePickup = () => {
  const [pickupDetails, setPickupDetails] = useState({
    name: '',
    address: '',
    phone: '',
    pickupDate: '',
    specialInstructions: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPickupDetails({
      ...pickupDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for scheduling pickup (e.g., sending data to an API)
    alert('Pickup scheduled successfully!');
  };

  return (
    <div className="schedule-pickup-container">
      <h2>Schedule Pickup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={pickupDetails.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Pickup Address"
          value={pickupDetails.address}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={pickupDetails.phone}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="pickupDate"
          value={pickupDetails.pickupDate}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="specialInstructions"
          placeholder="Special Instructions (Optional)"
          value={pickupDetails.specialInstructions}
          onChange={handleInputChange}
        />
        <button type="submit">Schedule Pickup</button>
      </form>
    </div>
  );
};

export default SchedulePickup;
