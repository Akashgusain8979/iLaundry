import React from 'react';
import '../Styles/ServiceCard.css';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <button className="schedule-btn">Schedule Pickup</button>
    </div>
  );
};

export default ServiceCard;
