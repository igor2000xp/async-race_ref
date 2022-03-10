import { combineReducers, createStore } from 'redux';
// import resultsReducer from './results/resultsReducer';

const rootState = combineReducers({
  // results: resultsReducer,
});

const store = createStore(rootState);

export type RootStoreType = ReturnType<typeof rootState>;

export default store;
