import React from 'react'
import PropTypes from 'prop-types'
import CurrencyTypes from '../CurrencyTypes/CurrencyTypes'
import StopsCountFilter from '../StopsCountFilter/StopsCountFilter'

function TicketSidebar(props) {
	return <div className="ticket-sidebar">
		<CurrencyTypes
			activeCurrencyType={props.activeCurrencyType}
			currencyTypes={props.currencyTypes}
			updateActiveCurrencyType={props.updateActiveCurrencyType}
		/>
		<StopsCountFilter
			activeStopsCountFilter={props.activeStopsCountFilter}
			stopsCountFilters={props.stopsCountFilters}
			toggleAllstopsCountFilterActivity={props.toggleAllstopsCountFilterActivity}
			toggleStopCountActivity={props.toggleStopCountActivity}
		/>
	</div>
}

TicketSidebar.propTypes = {
	updateActiveCurrencyType: PropTypes.func,
	toggleAllstopsCountFilterActivity: PropTypes.func,
	toggleStopCountActivity: PropTypes.func,
	activeCurrencyType: PropTypes.string,
	currencyTypes: PropTypes.arrayOf(PropTypes.string),
	activeStopsCountFilter: PropTypes.arrayOf(PropTypes.number),
	stopsCountFilters: PropTypes.arrayOf(PropTypes.string)
}

export default TicketSidebar;