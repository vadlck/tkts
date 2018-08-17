import * as types from './actionTypes';

export function updateActiveCurrencyType(activeCurrencyType) {
	return {
		type: types.UPDATE_ACTIVE_CURRENCY_TYPE,
		activeCurrencyType
	}
}

export function isActiveCurrencyTypeUpdated(activeCurrencyType) {
	return {
		type: types.HAS_UPDATED_ACTIVE_CURRENCY_TYPE,
		activeCurrencyType
	}
}