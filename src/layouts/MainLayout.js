import React from 'react';

export default function MainLayout({ children }) {
	return <div className="main-layout">
		<main>
			{children}
		</main>
	</div>
}