import React from 'react';
import { Link } from 'react-router-dom';
import './MenuCategory.css';

const BrunchesMenu = () => {
  const brunches = [
    { name: 'Avocado Toast', price: '$9.50', image: 'https://images.unsplash.com/photo-1603046891744-1f76eb10aec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { name: 'Eggs Benedict', price: '$12.00', image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { name: 'Pancake Stack', price: '$10.75', image: 'https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { name: 'Fruit Bowl', price: '$8.25', image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
  ];

  return (
    <div className="menu-category">
      <h1 className="menu-title">Brunches Menu</h1>
      <div className="menu-items">
        {brunches.map((item, index) => (
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

export default BrunchesMenu;