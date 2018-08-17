import React from 'react';
import WithHeaderLayout from '../layouts/WithHeaderLayout';
import TicketListContainer from '../containers/TicketListContainer';
import TicketSidebarContainer from '../containers/TicketSidebarContainer';

export default function TicketsPage() {
	return <WithHeaderLayout>
		<TicketSidebarContainer />
		<TicketListContainer />
	</WithHeaderLayout>
}