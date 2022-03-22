import React, {useState} from 'react';
import './css/WinnerScreen.css';
import classes from './css/WinnersScreen.module.css';

interface IProps {
  activeWinner:boolean;
  winnerName:string;
  winnerTime:number;
}

const WinnerScreen:React.FC<IProps> = (props) => {
  const [activeWindow, setActiveWindow] = useState(props.activeWinner);
  let active = props.activeWinner? ' active': '';

  const winnerString =`Winner: ${props.winnerName}, time: ${props.winnerTime}`;
  return (
    <div className={'winner' + active}>
      <h2>
        {winnerString}
      </h2>
    </div>
  );
};

export default WinnerScreen;