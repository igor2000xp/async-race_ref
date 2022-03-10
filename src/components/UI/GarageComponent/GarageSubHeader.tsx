import React from 'react';
import '../css/Garage.css';

const GarageSubHeader = () => {
  return (
    <div>
      <section className="main-buttons__block create">
        <input type="text" name="create" id="create-text" className="input__text" />
          <input type="color" id="color-create"
                 value="#ff0000"
                 className="input__color"
                 style={{blockSize: '2vh', fontSize: 5}}
          />
            <button id="create-button" className="floating-button input__button">CREATE</button>
      </section>

      <section className="main-buttons__block create update">
        <input type="text" name="update" id="update-text" className="input__text update-input__text" />
          <input type="color" id="color-update" value="#ff0000" className="input__color"
                 style={{blockSize: '2vh', fontSize: 5}} />
            <button id="update-button" className="floating-button input__button">UPDATE</button>
      </section>

      <section className="main-buttons__block create cars-control">
        <button id="race" className="floating-button">RACE</button>
        <button id="reset" className="floating-button">RESET</button>
        <button id="generate-cars" className="floating-button input__button input-cars__button">GENERATE CARS</button>
      </section>

    </div>
  );
};

export default GarageSubHeader;