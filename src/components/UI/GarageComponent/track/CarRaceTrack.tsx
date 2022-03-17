import React, {useState, useRef, useEffect} from 'react'
import '../css/CarListSection.css';
import '../css/CarAnimation.css';
import { ReactComponent as Logo } from '../carsImg/auto.svg';
import {Transition} from 'react-transition-group';
import {drive, startEngine} from '../../../../dal/EngineAPI';
import {ISuccess} from '../../../../types/typesAPI';

interface IProps {
  id:number;
  color:string;
  animationStart:boolean;
}

const CarRaceTrack:React.FC<IProps> = (props) => {
  // const carID = 'car' + props.id;
  // const carClassID = 'car-img car-img-animation' + props.id;
  const carClassID = 'car car-img ';
  const nodeRef = useRef(null);
  // const [animationStartState, setAnimationStartState] = useState(false);
  let raceTimeMs:Promise<number>;
  // let stop500:Promise<ISuccess>;

  const [stop500, setStop500] = useState(false);

  useEffect(() => {
    if (props.animationStart) {
      raceTimeMs = startEngine(props.id)
        .then(res => {
          console.log(raceTimeMs);
          return Math.round(res.distance / res.velocity);
        });
      drive(props.id)
        .then(res => setStop500(res.success))
        .catch(res => setStop500(res.status));
        // .then(res => res.success)
        // .catch(res => {
        //   if ( res.success ) return false;
        // });
    }
  },[props.animationStart]);

  console.log(stop500);

  // const [raceTimeMs, setRaceTimeMs] = useState(10000);
  // setAnimationStartState(props.animationStart);
  // if (animationStartState) {
  //   raceTimeMs = startEngine(props.id)
  //     .then(res => {
  //       return Math.round(res.distance / res.velocity);
  // });



  // setTimeout(() => {
  //   // startRaceAnimation(id);
  //   stop500 = drive(props.id)
  //     // .then(res => {
  //     //   return !res.success;
  //     // })
  //     .catch(res => res.status);
  // }, 10);

  // const stop500 = drive(props.id)
  //   // .then(res => {
  //   //   return !res.success;
  //   // })
  //   .catch(res => res.status);





  // console.log(raceTimeMs);
  // console.log(stop500);

  // const [animationStart, setAnimationStart] = useState(false);

  return (
    <Transition
      in={props.animationStart}
      timeout={13000}
      classNames="animatedCar"
      nodeRef={nodeRef}
    >
      {(state) => {
        return <div ref={nodeRef}  className={carClassID + state}>
          <Logo
            width={200}
            height={30}
            fill={props.color}
            stroke='white'
            strokeWidth={250}
          />
        </div>
      }}
    </Transition>
          // <div className={carClassID}>
          //   <Logo
          //     width={200}
          //     height={30}
          //     fill={props.color}
          //     stroke='white'
          //     strokeWidth={250}
          //   />
          // </div>
    // </div>

  );
};

export default CarRaceTrack;