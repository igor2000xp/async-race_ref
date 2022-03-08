// import React from 'react';
import { instance } from './GarageAPI';
import {IWinner, IWinnerUpdate} from "../types/typesAPI";
import {winnersPath} from "../constantsAPI/constantsAPI";
import sortAndOrderWinners from "./sortAndOrderWinners";

export const createWinner = (winner:IWinner):Promise<IWinner> => {
  return  instance.post(winnersPath,
    { winner },
    { headers: { 'Content-Type': 'application/json' }, })
  .then(res => res.data);
};

export const deleteWinner = (id:number):Promise<number> => {
  return instance.delete(`${winnersPath}/?id=${id}`,)
    .then(res => res.data)
    .catch(res => res.status);
}

export const getWinnerStatistic = (id:number):Promise<number> => {
  return instance.get(`${winnersPath}/?id=${id}`,)
    .then(res => res.status);
}

export const getWinner = (id:number):Promise<IWinner> => {
  return instance.get(`${winnersPath}/?id=${id}`,).then(res => res.data);
}

export const getWinners = (page:number):Promise<IWinner[]> => {
  return instance.get(`${winnersPath}?page=${page}${sortAndOrderWinners()}`,
    {headers: {"X-Total-Count": "4",}}
    ).then(res => res.data);
};

export const updateWinner = (id:number, winner: IWinnerUpdate):Promise<IWinner> => {
  return instance.put(`${winnersPath}/id=${id}`,
    { winner }
    ).then((res => res.data));
};
