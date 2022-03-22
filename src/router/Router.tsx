import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Garage from '../components/UI/Garage';
import Winners from '../components/winners/Winners';

const Router:React.FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Garage />} />
        <Route path="/winners" element={<Winners />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;