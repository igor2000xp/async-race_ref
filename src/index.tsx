import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './bll/store';

// interface IAction {
//   type: string;
//   payload: string;
// }
// const action:IAction = {type: '', payload: 0};

// export interface IState {
//   cash: number;
// }
// const defaultState = {
//   cash: 0,
// }
// const reducer = (state:IState = defaultState, action:IAction) => {
//   switch ( action.type ) {
//     case 'ADD_CASH':
//       return {...state, cash: state.cash + action.payload};
//     case 'GET_CASH':
//       return {...state, cash: state.cash - action.payload};
//
//     default:
//       return  state;
//   }

// }
// const store = createStore(reducer);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />,
//   </Provider>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);