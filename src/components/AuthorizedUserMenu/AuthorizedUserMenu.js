import React, { Component, Fragment } from 'react';
import getStringClassNameOfObject from '../../utils/getStringClassNameOfObject';

class AuthorizedUserMenu extends Component {
	state = {
		isOpen: false
	}

	onClick = () => {
		this.setState(state => ({
			isOpen: !state.isOpen
		}))
	}

	renderSigninBlock = () => {
		return <div className="authorized-user-menu--is-not-authorized">
			<a> Войти </a>
		</div>
	}

	renderAuthorizedUserMenu = () => {
		let className = getStringClassNameOfObject({
			'authorized-user-menu': true,
			'authorized-user-menu--is-open': this.state.isOpen
		});

		return <div className={className} onClick={this.onClick}>
			<div className="authorized-user-menu__user-login">
				<span>{this.props.authorizedUser.login}</span>
			</div>
			<ul className="authorized-user-menu__items">
				{/* <li>
					<a>Оплатить</a>
				</li>
				<li>
					<a>Редактировать профиль</a>
				</li> */}
				<li>
					<a onClick={this.props.logout}>Выход</a>
				</li>
			</ul>
		</div>
	}

	render() {
		return this.props.authorizedUser
			? this.renderAuthorizedUserMenu()
			: this.renderSigninBlock()
	}
}

export default AuthorizedUserMenu;