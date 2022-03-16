import {ResultsActions} from './actions';
import ActionConstant from './actionConstant';
import {IWinner} from "../../types/typesAPI";

interface IState {
  garagePage:number;
  garageCars:number;
  winnerPage:number;
  winnerCars: Array<IWinner> | null;
  winnerTotalCount: number
  winnerID:number;
  lastTimeWinner:number;
}

const stateInitiation:IState = {
  garagePage: 1,
  garageCars:1,
  winnerPage:1,
  winnerCars: null,
  winnerTotalCount: 0,
  winnerID:1,
  lastTimeWinner:0,
}

export default function reducer(state = stateInitiation, action:ResultsActions):IState {
  switch ( action.type ) {
    case ActionConstant.GARAGE_PAGE:
      return {...state, garagePage: action.garagePage}
    case ActionConstant.GARAGE_CARS:
      return {...state, garageCars: action.garageCars}
    case ActionConstant.WINNER_PAGE:
      return {...state, winnerPage: action.winnerPage}
    case ActionConstant.WINNER_CARS:
      return {...state, winnerCars: [...action.winnerCars]}
    case ActionConstant.WINNER_TOTAL_COUNT:
      return {...state, winnerTotalCount: action.totalCount}
    case ActionConstant.WINNER_ID:
      return {...state, winnerID: action.winnerID}
    case ActionConstant.LAST_TIME_WINNER:
      return {...state, lastTimeWinner: action.lastTime}
    default: return state;
  }
}
