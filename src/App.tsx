import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from './index';

const App:React.FC = () => {
  const dispatch = useDispatch();
  const cash = useSelector(state => {
    return state;
  })

  return (
    <div>

    </div>
  );
};

export default App;
