import { combineReducers, createStore } from 'redux';
import reducer from './reducer/reducer';
// import resultsReducer from './results/resultsReducer';

const rootState = combineReducers({
  // results: resultsReducer,
  reducer,
});

const store = createStore(rootState);

export type RootStoreType = ReturnType<typeof rootState>;

export default store;
