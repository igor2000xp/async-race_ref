import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducer from './reducer/reducer';
import thunk from 'redux-thunk';

export type RootStoreType = ReturnType<typeof rootState>;

const rootState = combineReducers({ reducer, });

const store = createStore(rootState, applyMiddleware(thunk));

export default store;
