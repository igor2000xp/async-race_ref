import React from 'react';
import './GarageComponent/css/Footer.css';

const Footer:React.FC = () => {
  return (
    <footer className="footer">
      <div className="pages-control">
        <button id="prevCarsPage" className="floating-button">PREV</button>
        <button id="nextCarsPage" className="floating-button">NEXT</button>
      </div>
    </footer>
  );
};

export default Footer;