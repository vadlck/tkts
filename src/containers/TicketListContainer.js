import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFilteredTickets } from '../store/tickets/selectors'
import { fetchTickets } from '../store/tickets/actions'
import TicketList from "../components/TicketList/TicketList";

class TicketListContainer extends Component {
	componentDidMount() {
		this.props.fetchTickets()
	}
	render() {
		return <TicketList tickets={this.props.tickets} />
	}
}

const mapStateTopProps = state => ({
	tickets: getFilteredTickets(state)
})

const mapDispatchToProps = (dispatch) => ({
	fetchTickets: () => dispatch(fetchTickets())
});

export default connect(mapStateTopProps, mapDispatchToProps)(TicketListContainer);