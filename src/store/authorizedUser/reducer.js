import * as types from './actionTypes';

export default (authorizedUser = null, action = {}) => {
	switch (action.type) {
		case types.USER_AUTHORIZED: return action.user;
		case types.USER_UNAUTHORIZED: return null;
		default:
			return authorizedUser;
	}
};