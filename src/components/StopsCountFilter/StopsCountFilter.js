import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import PropTypes from 'prop-types'

function StopsCountFilter(props) {
	return <div className="stop">
		<h4>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
		<div className="stop-count">
			<Checkbox
				title="Все"
				isActive={props.activeStopsCountFilter.length === props.stopsCountFilters.length}
				onClick={props.toggleAllstopsCountFilterActivity}
			/>

			{props.stopsCountFilters.map((title, index) =>
				<Checkbox
					title={title}
					value={index}
					key={index}
					onClick={props.toggleStopCountActivity}
					isActive={!!~props.activeStopsCountFilter.indexOf(index)}
				/>)}
		</div>
	</div>
}

StopsCountFilter.propTypes = {
	toggleAllstopsCountFilterActivity: PropTypes.func,
	toggleStopCountActivity: PropTypes.func,
	activeStopsCountFilter: PropTypes.arrayOf(PropTypes.number),
	stopsCountFilters: PropTypes.arrayOf(PropTypes.string)
}

export default StopsCountFilter;