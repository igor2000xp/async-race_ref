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
  const activeWinner = useRef(false);
  const winnerName = useRef('');
  const winnerTime = useRef(0);
  const [delayWinnerWindow, setDelayWinnerWindow] = useState<boolean>(false);

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
      },10000);
    }
  },[start]);

  useEffect(() => {
    if (stopWinner === true) {
      const win = showRaceResult(cars);
      activeWinner.current = true;
      winnerName.current = String(win.id);
      winnerTime.current = win.raceTime;
      setWinnerResult(win);
      //!!!!!!!!! function to base
      dispatch(cleanWinnersResult());
    }
  },[stopWinner]);

  const startRace = () => {
    setStart(true);
  };
  const resetRace =() => {
    setStart(false);
  };

  let isActive = activeWinner.current;
  useEffect(() => {
    if (stopWinner) {
      setTimeout(() => {
        setDelayWinnerWindow(true);
        activeWinner.current = true;
      },0);
      setTimeout(() => {
        setDelayWinnerWindow(false);
        activeWinner.current = false;
        setStopWinner(false);
      },4000);
    }
  },[isActive])

  return (
    <div className='page-wrapper'>
      <Header />
      <div className='control'>
        <WinnerScreen activeWinner={stopWinner? stopWinner: false} winnerName={winnerName.current} winnerTime={winnerTime.current} />
        <GarageSubHeader start={startRace} stop={resetRace} />
        <GarageTopic page={pageNumber} garage={carsNumber} />
        <CarListSection startRace={start} />
        <Footer switchPage={GARAGE} />
      </div>
    </div>
  );
};

export default Garage;
