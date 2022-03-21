import React, { useState, useEffect, useRef } from 'react'
import '../css/CarListSection.css';
import '../css/CarAnimation.css';
import { ReactComponent as Logo } from '../carsImg/auto.svg';
import { drive, startEngine } from '../../../../dal/EngineAPI';
import {useDispatch} from "react-redux";
import {winnerResult} from "../../../../bll/reducer/actions";

interface IProps {
  id:number;
  color:string;
  animationStart?:boolean;
}
export interface IResult {
  id:number;
  raceTime:number;
  err500:boolean;
}

const CarRaceTrack:React.FC<IProps> = (props) => {
  const [raceTimeMs, setRaceTimeMs] = useState(130000);
  const [start, setStart] = useState(false);
  const [stop500, setStop500] = useState<boolean>();
  const carClassID = `${start? 'car': ''} car-img `;

  const raceTime:React.MutableRefObject<IResult> = useRef({id: 0, raceTime:0, err500:false});
  const dispatch = useDispatch();

  raceTime.current.id = props.id;

  // useEffect(() => {
  //   console.log('useEffect');
  //   if (raceTime.current.raceTime != 0) {
  //       dispatch(winnerResult(raceTime.current));
  //       console.log(raceTime.current);
  //   }
  // }, [dispatch, raceTime, raceTimeMs]);

  useEffect(() => {
    if (props.animationStart) {
      const startRequest = new Date().getTime();
        startEngine(props.id)
            .then(res => {
              setRaceTimeMs(Math.round(res.distance / res.velocity));
              const startMoving = new Date().getTime();
              setStart(true);
              // console.log(Math.round(res.distance / res.velocity));
              // console.log(startMoving - startRequest - 20);
              raceTime.current.raceTime = Math.round(
                res.distance / res.velocity
                ) + startMoving - startRequest - 20;
      })
      setTimeout(() => {
        drive(props.id)
          .then(res => {
            const err500 = res.success;
            setStop500(res.success);
            if (raceTime.current.raceTime !== 0 && err500) {
              dispatch(winnerResult(raceTime.current));
              console.log(raceTime.current);
            }
          });
      }, 10)

    }
      if (!props.animationStart && typeof props.animationStart !== 'undefined') {
        setStop500(true);
        setStart(false);
      }
  },[props.animationStart, props.id]);

  if (typeof stop500 !== 'undefined') raceTime.current.err500 = stop500;

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
