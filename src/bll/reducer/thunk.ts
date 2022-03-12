import {getCar} from "../../dal/GarageAPI";

export function getCarsThunk(id:number) {
  // const car = getCar(id);
  return async () => {
    const car = await getCar(id);
    console.log(car.name);
  }
}