import React from 'react';
import '../css/CarListSection.css';
import EngineButtons from './EngineButtons';
import CarRaceTrack from './CarRaceTrack';

interface IProps {
  id:number;
  color:string;
}

const CarFullTrack:React.FC<IProps> = (props) => {
  return (
    <div className='car-full-truck'>
      <EngineButtons id={props.id} />
      <CarRaceTrack id={props.id} color={props.color} />
    </div>
  );
};

export default CarFullTrack;