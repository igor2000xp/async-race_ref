import React, {useEffect, useState} from 'react';
import UnionDetailsOfTrack from './unionDetailsOfTrack';
import {useSelector} from 'react-redux';
import {RootStoreType} from '../../../bll/store';
import {ICar} from '../../../types/typesAPI';
import {getCars} from '../../../dal/GarageAPI';

const CarListSection:React.FC = () => {
  const pageNumber = useSelector<RootStoreType, number>((state) => state.reducer.garagePage);
  const carsNumber = useSelector<RootStoreType, number>((state) => state.reducer.garageCars);
  const [cars, setCars] = useState<ICar[]>();

  useEffect(() => {
    getCars(pageNumber)
      .then((res) => {
        setCars(res.cars);
      });
  },[pageNumber, carsNumber]);

  return (
    <section id='car-list-section'>
      {
        cars?.map((e) => {
          return <UnionDetailsOfTrack key={e.id} id={e.id} name={e.name} color={e.color} />
      })}
    </section>
  );
};

export default CarListSection;
