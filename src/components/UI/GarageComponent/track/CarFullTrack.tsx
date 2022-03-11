import React from 'react';
import '../css/CarListSection.css';
import EngineButtons from './EngineButtons';
import CarRaceTrack from './CarRaceTrack';

const CarFullTrack:React.FC = () => {
  return (
    <div className='car-full-truck'>
      <EngineButtons id={1} />
      <CarRaceTrack id={1} color='red' />
      
    </div>
  );
};

export default CarFullTrack;