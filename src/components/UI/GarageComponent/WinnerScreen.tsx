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
  let active = activeWindow? ' active': '';
  return (
    <div className={classes.Winner + active}>
      <h2>`Winner: ${props.winnerName} time: ${props.winnerTime}`</h2>
    </div>
  );
};

export default WinnerScreen;