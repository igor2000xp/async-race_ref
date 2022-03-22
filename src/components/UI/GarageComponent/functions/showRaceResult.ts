import {IResult} from "../track/CarRaceTrack";

export default function showRaceResult(cars: IResult[]):IResult {
  const winner:IResult = cars.reduce((prev, item,index, array) => {
    let minTime:IResult;
    if (prev.raceTime < item.raceTime) {
      minTime = prev;
    } else {
      minTime = item
    }
    return minTime;
  });
  return winner;
}