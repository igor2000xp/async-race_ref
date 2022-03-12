import React from 'react';
import '../css/CarListSection.css';
import FinishFlag from '../carsImg/FinishFlag';
import { ReactComponent as Logo } from '../carsImg/auto.svg';

interface IProps {
  id:number;
  color:string;
}

const CarRaceTrack:React.FC<IProps> = (props) => {
  const carID = 'car' + props.id;
  const carClassID = 'car-img car-img-animation' + props.id;
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
        <FinishFlag />
      </div>
    </div>
  );
};

export default CarRaceTrack;