import React from 'react';
import './css/Garage.css';
// @ts-ignore
import style from './css/Header.module.css';

const Header:React.FC = () => {
  return (
    <header className={style.Header}>
      <div className={style.mainButtonsBlock}>
        <button id="garage" className="floating-button">TO GARAGE</button>
        <button id="winners" className="floating-button">TO WINNERS</button>
      </div>
    </header>
  );
};

export default Header;