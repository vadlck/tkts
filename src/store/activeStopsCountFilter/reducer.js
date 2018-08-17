import * as types from './actionTypes';

export default (activeStopsCountFilter = [1], action = {}) => {
	switch (action.type) {
		case types.ADD_STOP_COUNT:
			return [...activeStopsCountFilter, action.stopCount];
		case types.REMOVE_STOP_COUNT:
			return activeStopsCountFilter.filter(stopCount => stopCount !== action.stopCount);
		case types.REPLACE_STOPS_COUNT_FILTER:
			return action.activeStopsCountFilter;
		default:
			return activeStopsCountFilter;
	}
};