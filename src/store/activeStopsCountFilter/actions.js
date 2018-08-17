import * as types from './actionTypes';

export function addStopCount(stopCount) {
	return {
		type: types.ADD_STOP_COUNT,
		stopCount
	}
}
export function removeStopCount(stopCount) {
	return {
		type: types.REMOVE_STOP_COUNT,
		stopCount
	}
}
export function replaceStopsCountFilter(activeStopsCountFilter) {
	return {
		type: types.REPLACE_STOPS_COUNT_FILTER,
		activeStopsCountFilter
	}
}