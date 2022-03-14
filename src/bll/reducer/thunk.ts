import {getCar} from "../../dal/GarageAPI";
import {getWinners} from "../../dal/WinnersAPI";
import {setWinnerCars, setWinnerTotalCount} from "./actions";
import {Dispatch} from "redux";

export function getCarsThunk(id:number) {
  // const car = getCar(id);
  return async () => {
    const car = await getCar(id);
    console.log(car.name);
  }
}

export function getWinnerCarsThunk(page: number) {
  return (dispatch: Dispatch) => {
    getWinners(page)
        .then(res => {
          const {totalCount, winners} = res;
          dispatch(setWinnerCars(winners));
          dispatch(setWinnerTotalCount(totalCount));
        })
  }
}