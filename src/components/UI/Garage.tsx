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

const Garage = () => {
  const pageNumber = useSelector<RootStoreType, number>((state) => state.reducer.garagePage);
  const carsNumber = useSelector<RootStoreType, number>((state) => state.reducer.garageCars);
  const [carsNumberRequest, setCarsNumberRequest] = useState<number>();

  store.dispatch(setGarageCars(
    !carsNumberRequest? 0: carsNumberRequest
  ));
  useEffect(() => {
    getCars(pageNumber)
      .then((res) => {
        setCarsNumberRequest(res.carsNumber);
      })

  }, [pageNumber])
  console.log('rendering Garage');

  return (
    <div className='page-wrapper'>
      <Header />
      <div className='control'>
        <GarageSubHeader />
        <GarageTopic page={pageNumber} garage={carsNumber} />
        <CarListSection />
        <Footer />
      </div>
    </div>
  );
};

export default Garage;
