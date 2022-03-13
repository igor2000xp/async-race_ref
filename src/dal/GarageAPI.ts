// import React from 'react';
import { ICar } from '../types/typesAPI';
import {garage, limitCars, myServer} from '../constantsAPI/constantsAPI';
import axios from 'axios';

export const instance = axios.create({
  baseURL: myServer,
});

export const createCar = (name: string = 'BMW', color: string = 'white'):Promise<ICar> => {
  const getCarWithoutID = instance.post<ICar>(
    garage, { name, color },
    {
    headers: {
      'content-type': 'application/json',
    },})
  return getCarWithoutID.then(res => {
    console.log(res.data)
    return res.data;
  });
  };

export const getCar = (id: number):Promise<ICar> => instance.get(`${garage}/${id}`).then(res => res.data);

export const deleteCar = (id: number):Promise<void> => instance.delete(`${garage}/${id}`).then();

export const getCars = (page = 0):Promise<{cars:ICar[], carsNumber:number }> => {
  return instance.get(`${garage}?_pag=${page}&_limit=${limitCars}`,)
    .then((res) => {
      const cars = res.data;
      const carsNumber = res.headers['x-total-count'];
      return {cars: cars, carsNumber:Number(carsNumber)}
    })
    // .then(res => res.headers['x-total-count']);
}

export const updateCar = (id: number, name: string, color: string):Promise<ICar> => {
  return instance.put(`${garage}/${id}`, {
    name,
    color,
  }, { headers: { 'Content-Type': 'application/json' }, }
  ).then(res => res.data)};
