import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const MenuCategory = ({ title, image, link }) => (
  <Link to={link} className="menu-category" aria-label={`View ${title} menu`}>
    <img src={image} alt={`${title} menu`} />
    <div className="menu-category-overlay">
      <h2>{title}</h2>
    </div>
  </Link>
);

const Menu = () => {
  const categories = [
    {
      title: "Pastries",
      image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      link: "/menu/pastries"
    },
    {
      title: "Coffee",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      link: "/menu/coffee"
    },
    {
      title: "Brunches",
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      link: "/menu/brunches"
    },
    {
      title: "Ice Cream",
      image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      link: "/menu/ice-cream"
    }
  ];

  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Menu</h1>
      <div className="menu-grid">
        {categories.map((category, index) => (
          <MenuCategory key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Menu;