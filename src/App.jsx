import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import ContactUs from './components/ContactUs';
import PastriesMenu from './components/PastriesMenu';
import CoffeeMenu from './components/CoffeeMenu';
import BrunchesMenu from './components/BrunchesMenu';
import IceCreamMenu from './components/IceCreamMenu';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
       

        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutUs />
              <Menu />
              <ContactUs />
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/pastries" element={<PastriesMenu />} />
          <Route path="/menu/coffee" element={<CoffeeMenu />} />
          <Route path="/menu/brunches" element={<BrunchesMenu />} />
          <Route path="/menu/ice-cream" element={<IceCreamMenu />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;