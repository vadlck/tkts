import { createSelector } from 'reselect'
import { getActiveStopsCountFilter } from '../activeStopsCountFilter/selectors'

export const getTickets = state => state.tickets;
export const getFilteredTickets = createSelector(
	getTickets,
	getActiveStopsCountFilter,
	(tickets, stopsCountFilter) =>
		tickets.filter(ticket => !!~stopsCountFilter.indexOf(ticket.stops))
)