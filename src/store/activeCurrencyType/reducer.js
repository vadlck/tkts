import * as types from './actionTypes';

export default (activeCurrencyType = 'RU', action = {}) => {
	switch (action.type) {
		case types.UPDATE_ACTIVE_CURRENCY_TYPE:
			return action.activeCurrencyType
		default:
			return activeCurrencyType;
	}
};