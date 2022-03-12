import React from 'react';
import Header from "./header";
import GarageSubHeader from "./GarageComponent/GarageSubHeader";
import GarageTopic from "./GarageComponent/GarageTopic";
import CarListSection from "./GarageComponent/CarListSection";
import Footer from "./Footer";
import {useSelector} from "react-redux";
import {RootStoreType} from '../../bll/store';

const Garage = () => {
  const pageNumber = useSelector<RootStoreType, number>((state) => state.reducer.garagePage);
  const carsNumber = useSelector<RootStoreType, number>((state) => state.reducer.garageCars);

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