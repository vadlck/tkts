import React, { Component } from 'react';

function withBackdrop(Component) {
	return class WithBackdrop extends Component {

		render() {
			return <Component />
		}
	}
}

export default withBackdrop; 