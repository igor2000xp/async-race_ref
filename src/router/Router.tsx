import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Garage from '../components/UI/Garage';
import Winners from '../components/UI/Winners';

const Router:React.FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Garage />} />
        <Route path="/winners" element={<Winners />} />
        {/*!!!!!!!!!*/}
        {/*<Route path="/garage" element={<Garage />} />*/}


        {/*<Route path="/rslang/games">*/}
          {/*<Route index element={<Games />} />*/}
          {/*<Route path="/rslang/games/sprint" element={<ChooseLvl><Sprint /></ChooseLvl>} />*/}
          {/*<Route path="/rslang/games/audioChallenge" element={<ChooseLvl><AudioChallenge /></ChooseLvl>} />*/}
        {/*</Route>*/}
        {/*<Route path="/rslang/statistic" element={<Statistic />} />*/}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;