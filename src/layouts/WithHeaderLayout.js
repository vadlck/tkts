import React from 'react';
import AuthorizedUserMenuContainer from '../containers/AuthorizedUserMenuContainer';

function WithHeaderLayout({ children }) {
	return <div className="with-header-layout">
		<header>
			<div className="fake-logo" />
			<AuthorizedUserMenuContainer />
		</header>
		<main>
			{children}
		</main>
	</div>
}

export default WithHeaderLayout