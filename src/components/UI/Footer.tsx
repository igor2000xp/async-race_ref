import React from 'react';
import './GarageComponent/css/Footer.css';
import { useSelector } from 'react-redux';
import store, { RootStoreType } from '../../bll/store';
import { setGaragePage } from '../../bll/reducer/actions';
import { limitCars } from '../../constantsAPI/constantsAPI';



// interface IProps {
//   switchPage:
// }

const Footer:React.FC = () => {
  const pageNumber = useSelector<RootStoreType, number>((state) => state.reducer.garagePage);
  const carsNumber = useSelector<RootStoreType, number>((state) => state.reducer.garageCars);

  const numberOfPageRest = carsNumber % limitCars;
  let numberOfPage = Math.floor(carsNumber / limitCars) + 1;
  numberOfPage = numberOfPageRest? numberOfPage: numberOfPage + 1;

  const nextPage = () => {
    store.dispatch(setGaragePage(pageNumber < numberOfPage? pageNumber + 1: 1));
  }
  const prevPage = () => {
    store.dispatch(setGaragePage(pageNumber > 1? pageNumber - 1: numberOfPage));
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