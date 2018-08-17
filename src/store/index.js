import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger';
import sagas from './sagas';
import initialState from './initialState';
import redusers from './redusers';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
	combineReducers(redusers),
	initialState,
	applyMiddleware(sagaMiddleware)
);

sagas.forEach(saga => sagaMiddleware.run(saga));