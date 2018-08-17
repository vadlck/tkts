import { put, takeLatest, select, all } from 'redux-saga/effects';
import serverRequest from '../../services/serverRequest';

import { HAS_UPDATED_ACTIVE_CURRENCY_TYPE } from '../activeCurrencyType/actionTypes';
import { getTickets } from './selectors';

import * as types from './actionTypes';
import * as actions from './actions';

export function* fetchTickets() {
	try {
		const tickets = yield serverRequest.get('/api/tickets');
		yield put(actions.updateTickets(tickets));
	} catch (error) {
		debugger;
	}
}

export function* updateTickets(action) {
	const tickets = yield select(getTickets);
	yield put(actions.updatePriceForTickets(tickets, action.activeCurrencyType));
}

export default function* ticketsWatcher() {
	yield all([
		takeLatest(types.FETCH_TICKETS_BEGIN, fetchTickets),
		//takeLatest(types.FETCH_TICKETS_SUCCESS, updateTickets),
		takeLatest(HAS_UPDATED_ACTIVE_CURRENCY_TYPE, updateTickets)
	])
}