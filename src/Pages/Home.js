import React from 'react';
import '../Styles/Home.css'; // Import your Home page specific CSS

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Laundry Service</h1>
      <p>Easy laundry pickup and delivery service at your convenience!</p>
      <a href="/schedule-pickup" className="btn btn-primary">
        Schedule Pickup
      </a>
    </div>
  );
};

export default Home;
