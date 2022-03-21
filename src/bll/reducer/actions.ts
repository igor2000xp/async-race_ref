import ActionConstant from './actionConstant';
import { ISortingOptions, IWinner } from '../../types/typesAPI';
import { IResult } from '../../components/UI/GarageComponent/track/CarRaceTrack';

export type ResultsActions = ReturnType<typeof setGaragePage>
  | ReturnType<typeof setGarageCars>
  | ReturnType<typeof setWinnerPage>
  | ReturnType<typeof setWinnerCars>
  | ReturnType<typeof setWinnerTotalCount>
  | ReturnType<typeof winnerResult>
  | ReturnType<typeof cleanWinnersResult>
  | ReturnType<typeof setLastTime>
  | ReturnType<typeof setSortingOption>;

export const setGaragePage = (garagePage: number) => ({type: ActionConstant.GARAGE_PAGE, garagePage}) as const
export const setGarageCars = (garageCars: number) => ({type: ActionConstant.GARAGE_CARS, garageCars}) as const
export const setWinnerPage = (winnerPage: number) => ({type: ActionConstant.WINNER_PAGE, winnerPage}) as const
export const setWinnerCars = (winnerCars: Array<IWinner>) => ({type: ActionConstant.WINNER_CARS, winnerCars}) as const
export const setWinnerTotalCount = (totalCount: number) => ({type: ActionConstant.WINNER_TOTAL_COUNT, totalCount}) as const
export const winnerResult = (winnerResult: IResult) => ({type: ActionConstant.WINNER_RESULT, winnerResult}) as const
export const cleanWinnersResult = () => ({type: ActionConstant.CLEAN_WINNER_RESULT}) as const
export const setLastTime = (lastTime: number) => ({type: ActionConstant.LAST_TIME_WINNER, lastTime}) as const
export const setSortingOption = (sortingOption: ISortingOptions) => ({type: ActionConstant.SET_SORTING_OPTION, sortingOption}) as const
