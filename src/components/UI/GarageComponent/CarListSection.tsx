import React from 'react';
import CarBlockItem from './track/CarBlockItem';
import CarFullTrack from './track/CarFullTrack';

const CarListSection:React.FC = () => {
  return (
    <section id='car-list-section'>
      <CarBlockItem id={1} name='BMW' />
      <CarFullTrack />
    </section>
  );
};

export default CarListSection;