import React from 'react';
import './normalize.css';
import Router from './router/Router';

const App:React.FC = () => {
  // const dispatch = useDispatch();
  // const cash = useSelector(state => {
  //   return state;
  // })

  return (
    <div>
      <Router />
    </div>
  );
};

export default App;
