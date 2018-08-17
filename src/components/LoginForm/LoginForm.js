import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginForm extends Component {
	state = {
		login: null,
		password: null
	}

	handleSubmit = () => {
		this.props.authorize({...this.state})
	}

	handleChange = ({ target }) => {
		this.setState({
			[target.name]: target.value
		})
	}

	render() {
		return <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
			<p className="field">
				<input name="login" placeholder="Логин" required />
			</p>
			<p className="field">
				<input name="password" type="password" placeholder="Пароль" required />
			</p>
			<button
				type="submit"
				onClick={this.handleSubmitForm}>Войти
			</button>
		</form>
	}
}

LoginForm.propTypes = {
	authorize: PropTypes.func
}

export default LoginForm;