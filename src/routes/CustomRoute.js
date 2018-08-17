import React, { Component } from 'react';
import { connect } from 'react-redux';
import userAccount from '../services/userAccount';
import history from '../history/history';
import NewSessionPage from '../pages/NewSessionPage';
import TicketsPage from '../pages/TicketsPage';
import { changeLocationPathname } from '../store/location/actions';
import { authorized } from '../store/authorizedUser/actions';

import LoadingPage from '../pages/LoadingPage'

class CustomRoute extends Component {
	state = {
		isLoading: true
	}

	async componentDidMount() {
		this.unlistenHistory = history.listen((location, action) => {
			/**
			 * handle browser navigation buttons click
			 */
			if (action === 'POP') {
				const pathname = location.pathname.length > 1
					? location.pathname.slice(1)
					: location.pathname;
				this.props.changeLocationPathname(pathname, action);
			}
		});

		const user = await userAccount.getCurrentUser();

		if (user)
			this.props.setAuthorizedUser(user);

		this.setState({
			isLoading: false
		})
	}

	componentWillUnmount() {
		this.unlistenHistory();
	}

	render() {
		if (this.state.isLoading)
			return <LoadingPage />

		if(!this.props.authorizedUser)
			return <NewSessionPage />

		switch (this.props.pathname) {
			case '/':
			case '/tickets':
				return <TicketsPage />

			case '/signin':
			case '/registration':
				return <NewSessionPage />

			default:
				return <h1>PAGE IS NOT FOUND</h1>
		}
	}
}

const mapStateToProps = state => ({
	pathname: state.location.pathname,
	authorizedUser: state.authorizedUser
});

const mapDispatchToProps = dispatch => ({
	setAuthorizedUser: user => dispatch(authorized(user)),
	changeLocationPathname: (pathname, action) =>
		dispatch(changeLocationPathname(pathname, action))
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomRoute);