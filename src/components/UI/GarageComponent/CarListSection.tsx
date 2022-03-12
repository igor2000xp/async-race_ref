import React, {useState} from 'react';
import UnionDetailsOfTrack from './unionDetailsOfTrack';
import {useSelector} from 'react-redux';
import {RootStoreType} from '../../../bll/store';
import {ICar} from '../../../types/typesAPI';
import {getCars} from '../../../dal/GarageAPI';

const CarListSection:React.FC = () => {
  const pageNumber = useSelector<RootStoreType, number>((state) => state.reducer.garagePage);
  const [cars, setCars] = useState<ICar[]>();
  useState(() => {
    getCars(pageNumber)
      .then((res) => {
        setCars(res.cars);
        // console.log(res.cars[0]);
      });
  });

  return (
    <section id='car-list-section'>
      {cars?.map((e) => {
        return <UnionDetailsOfTrack id={e.id} name={e.name} color={e.color} />
      })}
    </section>
  );
};

export default CarListSection;