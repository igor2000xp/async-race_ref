import React from 'react';
import './css/Garage.css';
import style from './css/Header.module.css';
import {Link} from "react-router-dom";

const Header:React.FC = () => {
  return (
    <header className={style.Header}>
      <div className={style.mainButtonsBlock}>
        <Link to='/'>
          <button id="garage" className="floating-button">TO GARAGE</button>
        </Link>
        <Link to="/winners">
          <button id="winners" className="floating-button">TO WINNERS</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;