import {getCar} from '../../dal/GarageAPI';
import {getWinners} from '../../dal/WinnersAPI';
import {setWinnerCars, setWinnerTotalCount} from './actions';
import {Dispatch} from 'redux';
import {ISortingOptions} from "../../types/typesAPI";

export function getCarsThunk(id:number) {
  // const car = getCar(id);
  return async () => {
    const car = await getCar(id);
    console.log(car.name);
  }
}

export function getWinnerCarsThunk(page: number, sortingOPT: ISortingOptions) {
  return (dispatch: Dispatch) => {
    getWinners(page, sortingOPT)
        .then(res => {
          const {totalCount, winners} = res;
          dispatch(setWinnerCars(winners));
          dispatch(setWinnerTotalCount(totalCount));
        });
  }
}