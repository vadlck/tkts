import React from 'react'
import PropTypes from 'prop-types'

function Ticket(props) {
	return <div className="ticket">
		<div className="ticket-buy-info">
			<div className="ticket-buy-info__carrier">
				{props.carrier}
			</div>
			<div className="ticket-buy-info__price">
				<button>
					<div>Купить</div>
					<div>за {props._t_price || props.price} {props._t_currencySymbol}</div>
				</button>
			</div>
		</div>
		<div className="ticket-main-info">
			<div className="ticket-main-info__departure">
				<h3>{props.departure_time}</h3>
				<h5>
					{props.origin_name}
				</h5>
			</div>
			<div className="ticket-main-info__stops-count">
				<span className="line__stops-count">{props.stops ? `${props.stops} пересадки` : ''}</span>
			</div>
			<div className="ticket-main-info__arrival">
				<h3>
					{props.arrival_time}
				</h3>
				<h5>
					{props.destination_name}
				</h5>
			</div>
		</div>
	</div>
}

Ticket.propTypes = {
	carrier: PropTypes.string,
	price: PropTypes.number,
	arrival_time: PropTypes.string,
	destination_name: PropTypes.string,
	departure_time: PropTypes.string,
	origin_name: PropTypes.string,
	stops: PropTypes.number
}

export default Ticket;