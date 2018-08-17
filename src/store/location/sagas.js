import { put, takeLatest, take, select, all, fork } from 'redux-saga/effects'
import history from '../../history/history'

import * as types from './actionTypes'
import * as actions from './actions'

import { getLocationPathname } from './selectors'

import * as authorizedUserActionTypes from '../authorizedUser/actionTypes'

function* waitForChangingLocationPathname() {
	while (true) {
		const oldPathname = yield select(getLocationPathname);
		const { pathname, action } = yield take(types.CHANGE_LOCATION_PATHNAME);

		if (oldPathname !== pathname) {
			if (action === 'PUSH')
				history.push(pathname);
		}
	}
}

function* changeLocationPathnameByAction({ type }) {
	yield put(actions.changeLocationPathnameByAction(type))
}

function* changeLocationPathname({ pathname, action }) {
	yield put(actions.changeLocationPathname(pathname, action));
}

export default function* locationWatcher() {
	yield all([
		yield fork(waitForChangingLocationPathname),
		yield takeLatest(types.UPDATE_LOCATION_PATHNAME, changeLocationPathname),
		yield takeLatest([
			authorizedUserActionTypes.USER_AUTHORIZED,
			authorizedUserActionTypes.USER_UNAUTHORIZED
		], changeLocationPathnameByAction),
	])
}