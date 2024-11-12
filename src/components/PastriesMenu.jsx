import React from 'react';
import { Link } from 'react-router-dom';
import './MenuCategory.css';

const PastriesMenu = () => {
  const pastries = [
    { name: 'Croissant', price: '$3.50', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { name: 'Pain au Chocolat', price: '$4.00', image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { name: 'Cinnamon Roll', price: '$3.75', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { name: 'Blueberry Muffin', price: '$3.25', image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
  ];

  return (
    <div className="menu-category">
      <h1 className="menu-title">Pastries Menu</h1>
      <div className="menu-items">
        {pastries.map((item, index) => (
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

export default PastriesMenu;