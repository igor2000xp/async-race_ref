import React, { useState, useEffect } from 'react'
import '../css/CarListSection.css';
import '../css/CarAnimation.css';
import { ReactComponent as Logo } from '../carsImg/auto.svg';
import { drive, startEngine } from '../../../../dal/EngineAPI';

interface IProps {
  id:number;
  color:string;
  animationStart?:boolean;
}

const CarRaceTrack:React.FC<IProps> = (props) => {
  // const nodeRef = useRef(null);
  const [raceTimeMs, setRaceTimeMs] = useState(130000);
  const [start, setStart] = useState(false);
  const [stop500, setStop500] = useState(true);
  const carClassID = `${start? 'car': ''} car-img `;

  useEffect(() => {
    if (props.animationStart) {
        startEngine(props.id)
            .then(res => {
              setRaceTimeMs(Math.round(res.distance / res.velocity));
              setStart(true);
      })
      setTimeout(() => {
        drive(props.id)
          .then(res => setStop500(res.success));

      }, 10)

    }
      if (!props.animationStart && typeof props.animationStart !== 'undefined') {
        setStop500(true);
        setStart(false);
      }
  },[props.animationStart]);

  // console.log('stop500 = ', stop500);
  // console.log('raceTimeMs = ', raceTimeMs);
  // console.log('animationStart = ', props.animationStart);
  // console.log('start = ', start);
  return (
       <div className={carClassID} style={{animationDuration:`${raceTimeMs}ms`,
        animationPlayState:`${stop500 && start? 'running': 'paused'}`
        }}>
          <Logo
            width={200}
            height={30}
            fill={props.color}
            stroke='white'
            strokeWidth={250}
          />
        </div>
  );
};

export default CarRaceTrack;
