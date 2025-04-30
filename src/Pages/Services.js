import React from 'react';
import '../Styles/Services.css';
import ServiceCard from '../Components/ServiceCard';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Laundry Washing',
      description:
        'We clean your clothes with high-quality detergents and softeners.',
    },
    {
      id: 2,
      name: 'Dry Cleaning',
      description:
        'We offer professional dry cleaning services for delicate fabrics.',
    },
    {
      id: 3,
      name: 'Ironing',
      description:
        'We provide expert ironing services to make your clothes wrinkle-free.',
    },
    {
      id: 4,
      name: 'Pickup and Delivery',
      description:
        'We offer door-to-door pickup and delivery for your convenience.',
    },
  ];

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="service-cards-container">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
