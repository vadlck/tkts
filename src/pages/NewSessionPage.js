import React from 'react'
import MainLayout from '../layouts/MainLayout'
import AuthBarContainer from '../containers/AuthBarContainer'

export default function NewSessionPage() {
return <MainLayout>
		<div className="new-session-page">
			<AuthBarContainer />
		</div>
	</MainLayout>
}