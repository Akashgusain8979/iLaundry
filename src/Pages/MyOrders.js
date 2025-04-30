import React, { useState, useEffect } from 'react';
import '../Styles/MyOrders.css';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // This is where you would fetch orders from an API or backend.
    // I'll use static data for now to simulate the orders.
    const fetchedOrders = [
      {
        id: 'ORD001',
        date: '2025-04-15',
        status: 'In Progress',
        pickup: '2025-04-16',
        delivery: '2025-04-17',
      },
      {
        id: 'ORD002',
        date: '2025-04-18',
        status: 'Completed',
        pickup: '2025-04-19',
        delivery: '2025-04-20',
      },
    ];

    setOrders(fetchedOrders);
  }, []);

  return (
    <div className="myorders-container">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Status</th>
              <th>Pickup Date</th>
              <th>Delivery Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td>{order.pickup}</td>
                <td>{order.delivery}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyOrders;
