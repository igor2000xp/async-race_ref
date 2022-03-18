import {ResultsActions} from './actions';
import ActionConstant from './actionConstant';
import {ISortingOptions, IWinner} from '../../types/typesAPI';
import {SortingOrder, SortingType} from '../../constantsAPI/constantsAPI';

interface IState {
  garagePage:number;
  garageCars:number;
  winnerPage:number;
  winnerCars: Array<IWinner> | null;
  winnerTotalCount: number
  winnerID:number;
  lastTimeWinner:number;
  sortingOptions: ISortingOptions
}

const stateInitiation:IState = {
  garagePage: 0,
  garageCars:1,
  winnerPage:0,
  winnerCars: null,
  winnerTotalCount: 0,
  winnerID:1,
  lastTimeWinner:0,
  sortingOptions: {type: SortingType.wins, order: SortingOrder.ASC}
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
    case ActionConstant.SET_SORTING_OPTION:
      return {...state, sortingOptions: {...action.sortingOption}}
    default: return state;
  }
}
