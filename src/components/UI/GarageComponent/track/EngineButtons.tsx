import React from 'react';
import '../css/CarListSection.css';

interface IProps {
  id:number;
  a: () => void;
}

const EngineButtons:React.FC<IProps> = (props) => {
  const buttonA = 'engine-button-A' + props.id;
  const buttonB = 'engine-button-B' + props.id;

  const startButton = () => props.a();

  return (
    <div className='engine-button'>
      <button onClick={startButton} id={buttonA} className="engine-button__item">A</button>
      <button id={buttonB} className="engine-button__item">B</button>
    </div>
  );
};

export default EngineButtons;