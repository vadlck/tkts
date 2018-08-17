import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Spinner from '../components/Spinner/Spinner';

export default function LoadingPage() {
	return <MainLayout>
		<div className="loading-page">
			<Spinner isShown />
		</div>
	</MainLayout>
}