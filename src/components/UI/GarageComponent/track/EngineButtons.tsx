import React, {useState} from 'react';
import '../css/CarListSection.css';

interface IProps {
  id:number;
  a: () => void | undefined;
  b: () => void;
}

const EngineButtons:React.FC<IProps> = (props) => {
  const active = ' active';
  const buttonA = 'engine-button-A' + props.id;
  const buttonB = 'engine-button-B' + props.id;
  const buttonClass = 'engine-button__item';
  const [activeA,setActiveA] = useState(false);
  const [activeB, setActiveB] = useState(true);

  const startButton = () => {
    if (activeA) {
      return undefined;
    }
    setActiveA(true);
    setActiveB(false);
    return props.a();
  };

  const stopButton = () => {
    if (activeB) {
      return undefined;
    }
    setActiveA(false);
    setActiveB(true);
    return props.b();
  };

  let buttonBClass = activeB? buttonClass + active: buttonClass;
  let buttonAClass = activeA? buttonClass + active: buttonClass;

  return (
    <div className='engine-button'>
      <button onClick={startButton} id={buttonA} className={buttonAClass}>A</button>
      <button onClick={stopButton} id={buttonB} className={buttonBClass}>B</button>
    </div>
  );
};

export default EngineButtons;
