import * as types from './actionTypes';
import * as authorizedUserActionTypes from '../authorizedUser/actionTypes';

export function changeLocationPathnameByAction(type) {
	const pathnameMap = {
		[authorizedUserActionTypes.USER_AUTHORIZED]: '/',
		[authorizedUserActionTypes.USER_UNAUTHORIZED]: '/signin',
	}
	return {
		type: types.CHANGE_LOCATION_PATHNAME,
		pathname: pathnameMap[type],
		action: 'PUSH'
	}
}

export function changeLocationPathname(pathname, action) {
	if (!pathname.startsWith('/'))
		pathname = `/${pathname}`;

	return {
		type: types.CHANGE_LOCATION_PATHNAME,
		pathname,
		action
	}
}

export function updateLocationPathname(pathname, action) {
	return {
		type: types.UPDATE_LOCATION_PATHNAME,
		pathname,
		action
	}
} 