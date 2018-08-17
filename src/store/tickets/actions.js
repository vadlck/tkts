import currencyConverter from '../../services/currencyConverter';
import * as types from './actionTypes';

export function updatePriceForTickets(tickets, currencyType) {
	const currencySymbol = currencyConverter.getCurrencySymbol(currencyType);

	return {
		type: types.UPDATE_TICKETS,
		tickets: tickets.map(ticket => ({
			...ticket,
			_t_price: currencyConverter.convert(ticket.price, currencyType),
			_t_currencySymbol: currencySymbol
		}))
	}
}

export function fetchTickets() {
	return {
		type: types.FETCH_TICKETS_BEGIN
	}
}

export function updateTickets(tickets) {
	return {
		type: types.UPDATE_TICKETS,
		tickets
	}
}