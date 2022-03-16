import React, {useState} from 'react';
import '../css/CarListSection.css';
import '../css/CarAnimation.css';
import EngineButtons from './EngineButtons';
import CarRaceTrack from './CarRaceTrack';
import { Transition } from 'react-transition-group';
import FinishFlag from '../carsImg/FinishFlag';

interface IProps {
  id:number;
  color:string;
}

const CarFullTrack:React.FC<IProps> = (props) => {
  const [animationStart, setAnimationStart] = useState(false);
  console.log(animationStart);
  const nodeRef = React.useRef(null);

  return (
    <div className='car-full-truck'>
      <EngineButtons
        id={props.id}
        a={() => {setAnimationStart(true)}}
        b={() => {setAnimationStart(false)}}
         />
      <Transition
        in={animationStart}
        timeout={13000}
        classNames="animatedCar"
        nodeRef={nodeRef}
      >
        {(state) =>  {
          return <div ref={nodeRef} className={`car ${state}`}>
            <CarRaceTrack id={props.id} color={props.color} />
          </div>
        }}
      </Transition>
      <FinishFlag />
    </div>
  );
};

export default CarFullTrack;