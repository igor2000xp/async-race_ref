import ActionConstant from './actionConstant';

export type ResultsActions = ReturnType<typeof setGaragePage>
  | ReturnType<typeof setGarageCars>
  | ReturnType<typeof setWinnerPage>
  | ReturnType<typeof setWinnerCars>
  | ReturnType<typeof setWinnerID>
  | ReturnType<typeof setLastTime>
  | ReturnType<typeof setCarRender>;

interface ISet {
  type:string;
  actionSet:number;
}

export const setGaragePage = (garagePage:number):ISet => (
  {type:ActionConstant.GARAGE_PAGE, actionSet:garagePage}
)
export const setGarageCars = (garageCars:number):ISet => {
  return {type:ActionConstant.GARAGE_CARS, actionSet:garageCars};
}
export const setWinnerPage = (winnerPage:number):ISet => {
  return {type:ActionConstant.WINNER_PAGE, actionSet:winnerPage};
}
export const setWinnerCars = (winnerCars:number):ISet => {
  return {type:ActionConstant.WINNER_CARS, actionSet:winnerCars};
}
export const setWinnerID = (winnerID:number):ISet => {
  return {type:ActionConstant.WINNER_ID, actionSet:winnerID};
}
export const setLastTime = (lastTime:number):ISet => {
  return {type: ActionConstant.WINNER_ID, actionSet: lastTime};
}
export const setCarRender = (caeRender:number):ISet => {
  return {type:ActionConstant.CAR_RENDER, actionSet:caeRender}
}

