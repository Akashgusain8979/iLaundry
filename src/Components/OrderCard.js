import React from 'react';
import '../styles/OrderCard.css';

const OrderCard = ({ order }) => {
  return (
    <div className="order-card">
      <div className="order-card-header">
        <h3>Order ID: {order.id}</h3>
        <span className={`status ${order.status.toLowerCase()}`}>
          {order.status}
        </span>
      </div>
      <div className="order-card-body">
        <p>
          <strong>Pickup Date:</strong> {order.pickup}
        </p>
        <p>
          <strong>Delivery Date:</strong> {order.delivery}
        </p>
      </div>
      <div className="order-card-footer">
        <button className="track-btn">Track Order</button>
      </div>
    </div>
  );
};

export default OrderCard;
