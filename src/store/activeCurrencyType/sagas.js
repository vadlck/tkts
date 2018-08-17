import { put, select, take, fork } from 'redux-saga/effects';
import { getActiveCurrencyType } from './selectors';
import { isActiveCurrencyTypeUpdated } from './actions';
import { UPDATE_ACTIVE_CURRENCY_TYPE } from './actionTypes';

function* waitForChangingActiveCurrencyType() {
	while (true) {
		const oldActiveCurrencyType = yield select(getActiveCurrencyType);
		const { activeCurrencyType } = yield take(UPDATE_ACTIVE_CURRENCY_TYPE);
		if (oldActiveCurrencyType !== activeCurrencyType)
			yield put(isActiveCurrencyTypeUpdated(activeCurrencyType));
	}
}

export default function* activeCurrencyTypeWatcher() {
	yield fork(waitForChangingActiveCurrencyType);
}