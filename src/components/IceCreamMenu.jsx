import React from 'react';
import { Link } from 'react-router-dom';
import './MenuCategory.css';

const IceCreamMenu = () => {
  const icecreams = [
    { name: 'Vanilla Bean', price: '$3.50', image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { name: 'Chocolate Fudge', price: '$4.00', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { name: 'Strawberry Swirl', price: '$3.75', image: 'https://images.unsplash.com/photo-1556682851-c4580670113a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { name: 'Mint Chip', price: '$4.25', image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
  ];

  return (
    <div className="menu-category">
      <h1 className="menu-title">Ice Cream Menu</h1>
      <div className="menu-items">
        {icecreams.map((item, index) => (
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

export default IceCreamMenu;