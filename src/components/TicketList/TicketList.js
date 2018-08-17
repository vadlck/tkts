import React from 'react'
import Ticket from '../Ticket/Ticket'
import PropTypes from 'prop-types'

function Tickets({ tickets }) {
	return <div className="ticket-list">
		{!!tickets.length
			? tickets.map((ticket, i) => <Ticket key={i} {...ticket} />)
			: <h3>Oops.. We haven't have any tickets by current filter</h3>}
	</div>
}

Tickets.propTypes = {
	tickets: PropTypes.array
}

export default Tickets;