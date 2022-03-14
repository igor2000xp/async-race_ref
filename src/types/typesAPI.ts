export interface ICar {
  id: number
  name: string,
  color: string,
}
export interface ICarWithoutID {
  name: string,
  color: string,
}

export interface IEngine {
  velocity: number,
  distance: number,
}

export interface IWinner extends IWinnerUpdate{
  id: number,
}
export interface IWinnerUpdate {
  wins: number;
  time: number;
}

export interface ICars {
  items: Array<ICar>,
  count: number,
}

export interface ISuccess {
    success: true;
}
