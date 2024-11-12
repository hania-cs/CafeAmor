import React from 'react';
import { Link } from 'react-router-dom';
import './MenuCategory.css';

const CoffeeMenu = () => {
  const coffees = [
    { name: 'Espresso', price: '$2.50', image: 'https://images.unsplash.com/photo-1510707577719-ae7afe3e4643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { name: 'Cappuccino', price: '$3.75', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { name: 'Latte', price: '$4.00', image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { name: 'Mocha', price: '$4.25', image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
  ];

  return (
    <div className="menu-category">
      <h1 className="menu-title">Coffee Menu</h1>
      <div className="menu-items">
        {coffees.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <Link to="/menu" className="back-button">Back to Menu</Link>
    </div>
  );
};

export default CoffeeMenu;