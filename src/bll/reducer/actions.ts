import ActionConstant from './actionConstant';
import {ISortingOptions, IWinner} from '../../types/typesAPI';

export type ResultsActions = ReturnType<typeof setGaragePage>
  | ReturnType<typeof setGarageCars>
  | ReturnType<typeof setWinnerPage>
  | ReturnType<typeof setWinnerCars>
  | ReturnType<typeof setWinnerTotalCount>
  | ReturnType<typeof setWinnerID>
  | ReturnType<typeof setLastTime>
  | ReturnType<typeof setSortingOption>;

export const setGaragePage = (garagePage: number) => ({type: ActionConstant.GARAGE_PAGE, garagePage}) as const
export const setGarageCars = (garageCars: number) => ({type: ActionConstant.GARAGE_CARS, garageCars}) as const
export const setWinnerPage = (winnerPage: number) => ({type: ActionConstant.WINNER_PAGE, winnerPage}) as const
export const setWinnerCars = (winnerCars: Array<IWinner>) => ({type: ActionConstant.WINNER_CARS, winnerCars}) as const
export const setWinnerTotalCount = (totalCount: number) => ({type: ActionConstant.WINNER_TOTAL_COUNT, totalCount}) as const
export const setWinnerID = (winnerID: number) => ({type: ActionConstant.WINNER_ID, winnerID}) as const
export const setLastTime = (lastTime: number) => ({type: ActionConstant.LAST_TIME_WINNER, lastTime}) as const
export const setSortingOption = (sortingOption: ISortingOptions) => ({type: ActionConstant.SET_SORTING_OPTION, sortingOption}) as const
