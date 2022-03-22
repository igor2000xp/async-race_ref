// import React from 'react';
import { instance } from './GarageAPI';
import {engine} from "../constantsAPI/constantsAPI";
import {IEngine, ISuccess} from "../types/typesAPI";

export const drive = (id: number):Promise<ISuccess> => {
  return instance.patch(`${engine}?id=${id}&status=drive`,)
    .then(res => res.data)
    .catch(res => ({ success: false }))
    // !== 200? { success: false }: { ...res })
};

export const startEngine = (id: number):Promise<IEngine> => {
  return instance.patch(`${engine}?id=${id}&status=started`,).then(res => res.data);
};

export const stopEngine = (id: number):Promise<IEngine> => {
  return instance.patch(`${engine}?id=${id}&status=stopped`,).then(res => res.data);
};
