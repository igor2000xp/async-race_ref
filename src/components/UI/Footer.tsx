import React from 'react';
import './GarageComponent/css/Footer.css';
import { useSelector } from 'react-redux';
import store, { RootStoreType } from '../../bll/store';
import {setGaragePage, setWinnerPage} from '../../bll/reducer/actions';
import { limitCars, limitPageWinners } from '../../constantsAPI/constantsAPI';
import {GARAGE, WINNER} from "../../bll/reducer/actionConstant";

interface IProps {
  switchPage:string;
}

const Footer:React.FC<IProps> = (props) => {
  const pageNumber = useSelector<RootStoreType, number>((state) => state.reducer.garagePage);
  const carsNumber = useSelector<RootStoreType, number>((state) => state.reducer.garageCars);
  const winnerPageNumber = useSelector<RootStoreType, number>((state) => state.reducer.winnerPage);
  const winnerCarsNumber = useSelector<RootStoreType, number>((state) => state.reducer.winnerCars);

  const numberOfPageRestGarage = carsNumber % limitCars;
  let numberOfPageGarage = Math.floor(carsNumber / limitCars) + 1;
  numberOfPageGarage = numberOfPageRestGarage? numberOfPageGarage: numberOfPageGarage + 1;

  const numberOfPageRestWinner = winnerCarsNumber % limitPageWinners;
  let numberOfPageWinner = Math.floor(carsNumber / limitPageWinners) + 1;
  numberOfPageWinner = numberOfPageRestWinner? numberOfPageWinner: numberOfPageWinner + 1;

  const nextPage = () => {
    props.switchPage === GARAGE?
    store.dispatch(setGaragePage(pageNumber < numberOfPageGarage? pageNumber + 1: 1)):
      store.dispatch(setWinnerPage(winnerPageNumber < numberOfPageWinner ? winnerPageNumber + 1 : 1));
    console.log('next', props.switchPage);
  }
  const prevPage = () => {
    props.switchPage === GARAGE?
    store.dispatch(setGaragePage(pageNumber > 1? pageNumber - 1: numberOfPageGarage)):
      store.dispatch(setWinnerPage(winnerPageNumber > 1? winnerPageNumber - 1: numberOfPageWinner));
    console.log('prev', props.switchPage);
  }
  return (
    <footer className="footer">
      <div className="pages-control">
        <button onClick={prevPage} id="prevCarsPage" className="floating-button">PREV</button>
        <button onClick={nextPage}  id="nextCarsPage" className="floating-button">NEXT</button>
      </div>
    </footer>
  );
};

export default Footer;
