import React, {useEffect, useState} from 'react';
import Header from './header';
import GarageSubHeader from './GarageComponent/GarageSubHeader';
import GarageTopic from './GarageComponent/GarageTopic';
import CarListSection from './GarageComponent/CarListSection';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import store, { RootStoreType } from '../../bll/store';
import { setGarageCars } from '../../bll/reducer/actions';
import {getCars} from '../../dal/GarageAPI';
import { GARAGE } from '../../bll/reducer/actionConstant';

const Garage = () => {
  const pageNumber = useSelector<RootStoreType, number>((state) => state.reducer.garagePage);
  const carsNumber = useSelector<RootStoreType, number>((state) => state.reducer.garageCars);
  const [start, setStart] = useState(false);

  useEffect(() => {
    getCars(pageNumber)
      .then((res) => {
        store.dispatch(setGarageCars(
          res.carsNumber
    ));})
  }, [pageNumber, carsNumber]);

  const startRace = () => {
    setStart(true);
  }
  const resetRace =() => {
    setStart(false);
  }

  return (
    <div className='page-wrapper'>
      <Header />
      <div className='control'>
        <GarageSubHeader start={startRace} stop={resetRace} />
        <GarageTopic page={pageNumber} garage={carsNumber} />
        <CarListSection startRace={start} />
        <Footer switchPage={GARAGE} />
      </div>
    </div>
  );
};

export default Garage;
