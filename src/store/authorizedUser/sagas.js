import { put, all, takeLatest } from 'redux-saga/effects';
import userAccount from '../../services/userAccount';

import * as types from './actionTypes';
import * as actions from './actions';

export function* authorize({login, password}) {
	const user = yield userAccount.authorize(login, password);
	yield put(actions.authorized(user));
}

export function* unauthorize() {
	yield userAccount.unauthorize();
	yield put(actions.unauthorized());
}

export default function* authorizedUserWather() {
	yield all([
		takeLatest(types.USER_AUTHORIZE, authorize),
		takeLatest(types.USER_UNAUTHORIZE, unauthorize)
	])
}