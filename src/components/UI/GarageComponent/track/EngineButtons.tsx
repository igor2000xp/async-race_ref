import React from 'react';
import '../css/CarListSection.css';

interface IProps {
  id:number;
}

const EngineButtons:React.FC<IProps> = (props) => {
  const buttonA = 'engine-button-A' + props.id;
  const buttonB = 'engine-button-B' + props.id;

  return (
    <div className='engine-button'>
      <button id={buttonA} className="engine-button__item">A</button>
      <button id={buttonB} className="engine-button__item">B</button>
    </div>
  );
};

export default EngineButtons;