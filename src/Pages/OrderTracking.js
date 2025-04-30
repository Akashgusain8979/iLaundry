import React, { useState } from 'react';
import '../Styles/OrderTracking.css';

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');

  const handleTrackOrder = () => {
    alert(`Tracking order #${orderId}`);
    // Implement order tracking logic here
  };

  return (
    <div className="order-tracking-container">
      <h2>Track Your Order</h2>
      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        required
      />
      <button onClick={handleTrackOrder}>Track Order</button>
    </div>
  );
};

export default OrderTracking;
