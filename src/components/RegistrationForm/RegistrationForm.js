import React, { Component } from 'react';

export default class RegistrationForm extends Component {
	render() {
		return <form>
			<p className="field">
				<input placeholder="Логин" />
			</p>
			<p className="field">
				<input type="password" placeholder="Пароль" />
			</p>
			<button disabled type="submit">
				Регистрация
		</button>
		</form>
	}
}