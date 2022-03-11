import React from 'react';
import '../css/CarListSection.css';
import { ReactComponent as Logo } from './flag.svg';

interface IProps {};


const FinishFlag:React.FC<IProps> = (props) => {
  return (
    <div className="finish-flag">
      <Logo
        width={200}
        height={50}

      />
    </div>
  );
};

export default FinishFlag;