import {ResultsActions} from './actions';
import ActionConstant from './actionConstant';

interface IState {
  garagePage:number;
  garageCars:number;
  winnerPage:number;
  winnerCars:number;
  winnerID:number;
  lastTimeWinner:number;
  carRender:number;
}

const stateInitiation:IState = {
  garagePage: 1,
  garageCars:4,
  winnerPage:0,
  winnerCars:0,
  winnerID:1,
  lastTimeWinner:0,
  carRender:0,
}

export default function reducer(state = stateInitiation, action:ResultsActions):IState {
  switch ( action.type ) {
    case ActionConstant.GARAGE_PAGE:
      return {...state, garagePage: action.actionSet}
    case ActionConstant.GARAGE_CARS:
      return {...state, garageCars: action.actionSet}
    case ActionConstant.WINNER_PAGE:
      return {...state, winnerPage: action.actionSet}
    case ActionConstant.WINNER_CARS:
      return {...state, winnerCars: action.actionSet}
    case ActionConstant.WINNER_ID:
      return {...state, winnerID: action.actionSet}
    case ActionConstant.LAST_TIME_WINNER:
      return {...state, lastTimeWinner: action.actionSet}
    case ActionConstant.CAR_RENDER:
      return {...state, carRender: action.actionSet}
    default: return state;
  }
}
