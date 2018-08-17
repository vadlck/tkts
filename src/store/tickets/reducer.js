import * as types from './actionTypes';

export default (state = [], action = {}) => {
	switch (action.type) {
		case types.UPDATE_TICKETS:
			return action.tickets;
		default:
			return state;
	}
};