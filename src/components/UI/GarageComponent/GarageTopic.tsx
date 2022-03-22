import React from 'react';
import './css/GarageTopic.css';

interface IProps {
  page:number;
  garage:number;
}

const GarageTopic:React.FC<IProps> = (props) => {
  return (
    <section className="car-header">
      <div className="garage-header">
        <h2 id="garage-number">Garage {props.garage}</h2>
      </div>
      <div className="page-header">
        <h3>Page #{props.page}</h3>
      </div>
    </section>
  );
};

export default GarageTopic;