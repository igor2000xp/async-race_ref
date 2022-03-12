import React from 'react';
import './css/Garage.css';
import style from './css/Header.module.css';

const Header:React.FC = () => {
  return (
    <header className={style.Header}>
      <div className={style.mainButtonsBlock}>
        <a href='/'>
          <button id="garage" className="floating-button">TO GARAGE</button>
        </a>
        <a href='/winners'>
          <button id="winners" className="floating-button">TO WINNERS</button>
        </a>
      </div>
    </header>
  );
};

export default Header;