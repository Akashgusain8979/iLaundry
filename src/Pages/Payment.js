import React, { useState } from 'react';
import '../Styles/Payment.css';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = () => {
    alert(`Payment successful with ${paymentMethod}`);
  };

  return (
    <div className="payment-container">
      <h2>Choose Payment Method</h2>
      <div className="payment-box">
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Select a method</option>
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>
        <button className="pay-button" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
