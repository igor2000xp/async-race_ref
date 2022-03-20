import React, { useEffect, useRef, useState } from 'react';
import '../css/Garage.css';
import {createCar} from '../../../dal/GarageAPI';
import {useSelector} from "react-redux";
import store, {RootStoreType} from '../../../bll/store';
import { setGarageCars} from '../../../bll/reducer/actions';

interface IProps {
  start: () => void;
  stop: () => void;
}

const GarageSubHeader:React.FC<IProps> = (props) => {
  const carsNumber = useSelector<RootStoreType, number>((state) => state.reducer.garageCars);
  const [carColor, setCarColor] = useState<string>('#ff0000');
  let isStartRace = false;

  const inputNewCarName = useRef<HTMLInputElement>(null);
  const inputCarColor = useRef<HTMLInputElement>(null);
  const inputUpdateName = useRef<HTMLInputElement>(null);
  const inputUpdateColor = useRef<HTMLInputElement>(null);
  let countRender = 0;
  useEffect(() => {
    // console.log()
  }, [carColor]);

  useEffect(() => {

  },[isStartRace]);

  const colorHandler = () => {
    setCarColor(inputCarColor.current ? inputCarColor.current.value : '#ff0000')
  }

  const carHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    createCar(inputNewCarName.current?.value, carColor)
      .then(() => {
        store.dispatch(setGarageCars(
          carsNumber + 1
        ));
      });
  }

  const startRace = () => {
    isStartRace = true;
    return props.start();
  }
  const resetRace = () => {
    isStartRace = false;
    return props.stop();
  }

  return (
    <div>
      <section className='main-buttons__block create'>
        <input ref={inputNewCarName} type="text" name="create" id="create-text" className="input__text" />
        <input
          onChange={colorHandler}
          ref={inputCarColor}
          type="color" id="color-create"
          value={carColor}
          className="input__color"
          style={{blockSize: '3vh', fontSize: 5}}
        />
        <button onClick={carHandler} id="create-button" className="floating-button input__button">CREATE</button>
      </section>

      <section className="main-buttons__block create update">
        {/*<input*/}
        {/*  ref={inputUpdateName} type="text" name="update" id="update-text"*/}
        {/*  className="input__text update-input__text" />*/}
        {/*<input*/}
        {/*  ref={inputUpdateColor} type="color" id="color-update" value="#ff0000"*/}
        {/*  className="input__color"*/}
        {/*  style={{blockSize: '3vh', fontSize: 5}} />*/}
        {/*<button id="update-button" className="floating-button input__button">UPDATE</button>*/}
      </section>

      <section className="main-buttons__block create cars-control">
        <button onClick={startRace} id="race" className="floating-button">RACE</button>
        <button onClick={resetRace} id="reset" className="floating-button">RESET</button>
        <button id="generate-cars" className="floating-button input__button input-cars__button">GENERATE 100 CARS</button>
      </section>

    </div>
  );
};

export default GarageSubHeader;