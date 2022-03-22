import React, { useState } from 'react';
import '../css/CarListSection.css';
import '../css/CarAnimation.css';
import EngineButtons from './EngineButtons';
import CarRaceTrack from './CarRaceTrack';
import FinishFlag from '../carsImg/FinishFlag';

interface IProps {
  id:number;
  color:string;
  startRace:boolean;
}

const CarFullTrack:React.FC<IProps> = (props) => {
  const [animationStart, setAnimationStart] = useState<boolean>();

  return (
    <div className='car-full-truck'>
      <EngineButtons
        id={props.id}
        a={() => {setAnimationStart(true)}}
        b={() => {setAnimationStart(false)}}
      />
      <div className='car-race-truck'>
        <CarRaceTrack id={props.id} color={props.color} animationStart={animationStart || props.startRace}/>
      </div>
      <FinishFlag />
    </div>
  );
};

export default CarFullTrack;