import React from 'react';
import { connect } from 'react-redux';
import deepClone from '../utils/deepClone';

import AuthBar from 'components/AuthBar/AuthBar';
import LoginForm from 'components/LoginForm/LoginForm';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

import { getLocationPathname } from '../store/location/selectors';
import { updateLocationPathname } from '../store/location/actions';

import { getAuthorizedUser } from '../store/authorizedUser/selectors';
import { authorize } from '../store/authorizedUser/actions';


const SIGNIN_BLOCK = '/signin';
const REGISTRATION_BLOCK = '/registration';
const authBlocks = {
	[SIGNIN_BLOCK]: {
		title: 'Вход'
	},
	[REGISTRATION_BLOCK]: {
		title: 'Регистрация'
	}
};

const mapStateToProps = state => ({
	pathname: getLocationPathname(state),
	...(function getBlockLinksAndActiveBlockContent() {
		const pathname = getLocationPathname(state);
		const authorizedUser = getAuthorizedUser(state);
		const blockLinks = deepClone({}, authBlocks);

		let activeBlockComponent;

		/**
		 * если в url есть registration, то делаем активным блоком
		 */
		if (~pathname.indexOf(REGISTRATION_BLOCK) || authorizedUser) {
			blockLinks[REGISTRATION_BLOCK].isActive = true;
			activeBlockComponent = RegistrationForm;
		}
		else {
			blockLinks[SIGNIN_BLOCK].isActive = true;
			activeBlockComponent = LoginForm;
		}

		if (authorizedUser)
			delete blockLinks[SIGNIN_BLOCK];

		return {
			blockLinks,
			activeBlockComponent
		};
	})()
})

const mapDispatchToProps = dispatch => ({
	switchBlock: ({ target: { dataset, className } }) => {
		if (authBlocks[dataset.block] && !~className.indexOf('active'))
			dispatch(updateLocationPathname(dataset.block, 'PUSH'))
	},
	authorize: ({ login, password }) => dispatch(authorize(login, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthBar);