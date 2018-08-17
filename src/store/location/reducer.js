import * as types from './actionTypes';

const initialState = {
	hash: '',
	pathname: '/',
	search: '',
	state: undefined
};

export default function reduce(location = initialState, action = {}) {
	switch (action.type) {
		case types.CHANGE_LOCATION_PATHNAME: {
			return {
				...location,
				pathname: action.pathname
			}
		}

		default:
			return location
	}
}