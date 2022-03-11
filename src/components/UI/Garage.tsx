import React from 'react';
import Header from "./header";
import GarageSubHeader from "./GarageComponent/GarageSubHeader";
import GarageTopic from "./GarageComponent/GarageTopic";
import CarListSection from "./GarageComponent/CarListSection";

const Garage = () => {
  return (
    <div className='page-wrapper'>
      <Header />
      <div className='control'>
        <GarageSubHeader />
        <GarageTopic page={0} garage={7} />
        <CarListSection />

      </div>
    </div>
  );
};

export default Garage;