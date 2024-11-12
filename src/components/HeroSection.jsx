import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Bienvenidos a Café Amor</h1>
        <p className="hero-subtitle">Where Every Cup is Made with Love</p>
        <Link to="/menu" className="hero-button">
          Discover Our Menu
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;