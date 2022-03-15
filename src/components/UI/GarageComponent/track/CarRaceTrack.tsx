import React from 'react';
import '../css/CarListSection.css';
// import '../css/CarAnimation.css';
// import FinishFlag from '../carsImg/FinishFlag';
import { ReactComponent as Logo } from '../carsImg/auto.svg';
// import {Transition} from "react-transition-group";

interface IProps {
  id:number;
  color:string;
}

const CarRaceTrack:React.FC<IProps> = (props) => {
  const carID = 'car' + props.id;
  const carClassID = 'car-img car-img-animation' + props.id;

  // const [animationStart, setAnimationStart] = useState(false);

  return (
    <div className='car-race-truck'>
          <div id={carID} className={carClassID}>
            <Logo
              width={200}
              height={30}
              fill={props.color}
              stroke='white'
              strokeWidth={250}
            />
          </div>
    </div>

  );
};

export default CarRaceTrack;