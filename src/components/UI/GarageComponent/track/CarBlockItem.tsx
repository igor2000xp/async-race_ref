import React from 'react';
import '../css/CarListSection.css';

interface IProps {
  id:number;
  name:string;
}

const CarBlockItem:React.FC<IProps> = (props) => {
  const selectID = 'select' + props.id;
  const removeID = 'remove' + props.id;

  return (
    <div className='car-buttons'>
        <button id={selectID} className="floating-button input__button">SELECT</button>
        <button id={removeID} className="floating-button input__button">REMOVE</button>
        <h4>{props.name}</h4>
    </div>
  );
};

export default CarBlockItem;