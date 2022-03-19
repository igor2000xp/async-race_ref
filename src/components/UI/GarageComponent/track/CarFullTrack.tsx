import React, { useState } from 'react';
import '../css/CarListSection.css';
import '../css/CarAnimation.css';
import EngineButtons from './EngineButtons';
import CarRaceTrack from './CarRaceTrack';
// import { Transition } from 'react-transition-group';
import FinishFlag from '../carsImg/FinishFlag';

interface IProps {
  id:number;
  color:string;
}

const CarFullTrack:React.FC<IProps> = (props) => {
  const [animationStart, setAnimationStart] = useState<boolean>();
  // console.log(animationStart);
  // const nodeRef = useRef(null);
  // let animationStart = false;

  return (
    <div className='car-full-truck'>
      <EngineButtons
        id={props.id}
        // a={() => {setAnimationStart(true)}}
        // b={() => {setAnimationStart(false)}}
        a={() => {setAnimationStart(true)}}
        b={() => {setAnimationStart(false)}}
      />
      <div className='car-race-truck'>
        <CarRaceTrack id={props.id} color={props.color} animationStart={animationStart}/>
      </div>
      <FinishFlag />
    </div>
  );
};

export default CarFullTrack;