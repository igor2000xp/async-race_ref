import {ResultsActions} from './actions';
import ActionConstant from './actionConstant';
import {ISortingOptions, IWinner} from '../../types/typesAPI';
import {SortingOrder, SortingType} from '../../constantsAPI/constantsAPI';
import {IResult} from '../../components/UI/GarageComponent/track/CarRaceTrack';
import actionConstant from "./actionConstant";

interface IState {
  garagePage:number;
  garageCars:number;
  winnerPage:number;
  winnerCars: Array<IWinner> | null;
  winnerTotalCount: number
  winnerResult:Array<IResult>;
  lastTimeWinner:number;
  sortingOptions: ISortingOptions
}

const stateInitiation:IState = {
  garagePage: 1,
  garageCars:1,
  winnerPage:1,
  winnerCars: null,
  winnerTotalCount: 0,
  winnerResult:[],
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
    case ActionConstant.WINNER_RESULT:
      // console.log(action.winnerResult);
      return {...state, winnerResult: [...state.winnerResult, action.winnerResult]}
    case  ActionConstant.CLEAN_WINNER_RESULT:
      return {...state, winnerResult: []}
    case ActionConstant.LAST_TIME_WINNER:
      return {...state, lastTimeWinner: action.lastTime}
    case ActionConstant.SET_SORTING_OPTION:
      return {...state, sortingOptions: {...action.sortingOption}}
    default: return state;
  }
}
