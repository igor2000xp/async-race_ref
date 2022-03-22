import React from 'react';
import CarBlockItem from './track/CarBlockItem';
import CarFullTrack from './track/CarFullTrack';

interface IProps {
  id:number;
  name:string;
  color:string;
  startRace:boolean;
}

const UnionDetailsOfTrack:React.FC<IProps> = (props) => {
  return (
    <div>
      <CarBlockItem id={props.id} name={props.name} />
      <CarFullTrack id={props.id} color={props.color} startRace={props.startRace} />
    </div>
  );
};

export default UnionDetailsOfTrack;