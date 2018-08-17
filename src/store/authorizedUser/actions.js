import * as types from './actionTypes';

export function authorize(login, password) {
	return {
		type: types.USER_AUTHORIZE,
		login,
		password
	}
}

export function authorized(user) {
	return {
		type: types.USER_AUTHORIZED,
		user
	}
}

export function unauthorize() {
	return {
		type: types.USER_UNAUTHORIZE
	}
}

export function unauthorized() {
	return {
		type: types.USER_UNAUTHORIZED
	}
}