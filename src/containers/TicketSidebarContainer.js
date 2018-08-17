import { connect } from 'react-redux'
import TicketSidebar from '../components/TicketSidebar/TicketSidebar'

import { getActiveCurrencyType } from '../store/activeCurrencyType/selectors'
import { updateActiveCurrencyType } from '../store/activeCurrencyType/actions'

import { getActiveStopsCountFilter } from '../store/activeStopsCountFilter/selectors'
import  * as activeStopsCountFilterActions from '../store/activeStopsCountFilter/actions'

const currencyTypes = [
	'RU',
	'USD',
	'EUR'
];

const stopsCountFilters = [
	'Без пересадок',
	'1 пересадки',
	'2 пересадки',
	'3 пересадки'
]

const mapStateToProps = state => ({
	activeCurrencyType: getActiveCurrencyType(state),
	activeStopsCountFilter: getActiveStopsCountFilter(state),
	currencyTypes,
	stopsCountFilters
})

const mapDispatchToProps = dispatch => ({
	toggleAllstopsCountFilterActivity: (value, isActive) => {
		const stopsCountFilter = isActive
			? []
			: stopsCountFilters.map((type, i) => i);

		dispatch(activeStopsCountFilterActions.replaceStopsCountFilter(stopsCountFilter));
	},

	toggleStopCountActivity: (stopCount, isActive) => {
		const actionName = isActive
			? 'removeStopCount'
			: 'addStopCount';

		dispatch(activeStopsCountFilterActions[actionName](stopCount));
	},

	updateActiveCurrencyType: ({ target }) =>
		dispatch(updateActiveCurrencyType(target.dataset.type))
})


export default connect(mapStateToProps, mapDispatchToProps)(TicketSidebar);