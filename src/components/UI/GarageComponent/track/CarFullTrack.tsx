import React, {useState} from 'react';
import '../css/CarListSection.css';
import '../css/CarAnimation.css';
import EngineButtons from './EngineButtons';
import CarRaceTrack from './CarRaceTrack';
import { CSSTransition } from 'react-transition-group';

interface IProps {
  id:number;
  color:string;
}

const CarFullTrack:React.FC<IProps> = (props) => {
  const [animationStart, setAnimationStart] = useState(false);

  return (
    <div className='car-full-truck'>
      <EngineButtons id={props.id} a={() => {setAnimationStart(true)}} />
      <CSSTransition
        in={animationStart}
        timeout={300}
        classNames="animated-car"
      >
        <CarRaceTrack id={props.id} color={props.color} />
      </CSSTransition>


    </div>
  );
};

export default CarFullTrack;