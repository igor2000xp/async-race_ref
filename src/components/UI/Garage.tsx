import React, {useEffect, useRef, useState} from 'react';
import Header from './header';
import GarageSubHeader from './GarageComponent/GarageSubHeader';
import GarageTopic from './GarageComponent/GarageTopic';
import CarListSection from './GarageComponent/CarListSection';
import Footer from './Footer';
import {useSelector, useDispatch} from 'react-redux';
import store, { RootStoreType } from '../../bll/store';
import {cleanWinnersResult, setGarageCars} from '../../bll/reducer/actions';
import { getCars } from '../../dal/GarageAPI';
import { GARAGE } from '../../bll/reducer/actionConstant';
import { IResult } from './GarageComponent/track/CarRaceTrack';
import showRaceResult from "./GarageComponent/functions/showRaceResult";
import WinnerScreen from "./GarageComponent/WinnerScreen";

const Garage = () => {
  const pageNumber = useSelector<RootStoreType, number>((state) => state.reducer.garagePage);
  const carsNumber = useSelector<RootStoreType, number>((state) => state.reducer.garageCars);
  const cars = useSelector<RootStoreType, Array<IResult>>((state) => state.reducer.winnerResult);
  const [start, setStart] = useState(false);
  const [winnerResult, setWinnerResult] = useState<IResult>();
  const [stopWinner, setStopWinner] = useState<boolean>();
  const dispatch = useDispatch();
  const winner = useRef<IResult>();

  let activeWinner = false;
  let winnerName = '';
  let winnerTime = 0;

  useEffect(() => {
    getCars(pageNumber)
      .then((res) => {
        store.dispatch(setGarageCars(
          res.carsNumber
    ));})
  }, [pageNumber, carsNumber]);

  useEffect(() => {
    if (start) {
      setTimeout(() => {
        setStopWinner(true);
        console.log(stopWinner);
      },12000);
      setTimeout(() => {
        setStopWinner(false);
      },12100);
    }
  },[start]);

  useEffect(() => {
    if (stopWinner === true) {
      console.log(cars);
      const win = showRaceResult(cars);
      activeWinner = true;
      winnerName = String(win.id);
      setWinnerResult(win);
      dispatch(cleanWinnersResult());
    }
  },[stopWinner]);

  const startRace = () => {
    setStart(true);
  };
  const resetRace =() => {
    setStart(false);
  };

  return (
    <div className='page-wrapper'>
      <Header />
      <div className='control'>
        <WinnerScreen activeWinner={activeWinner} winnerName={winnerName} winnerTime={winnerTime} />
        <GarageSubHeader start={startRace} stop={resetRace} />
        <GarageTopic page={pageNumber} garage={carsNumber} />
        <CarListSection startRace={start} />
        <Footer switchPage={GARAGE} />
      </div>
    </div>
  );
};

export default Garage;
