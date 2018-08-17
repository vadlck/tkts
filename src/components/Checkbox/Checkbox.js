import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({ isActive, title, onClick, value }) {
	const className = `checkbox ${isActive ? 'active' : ''}`;

	return <div onClick={() => onClick(value, isActive)} className={className}>
		<span className="checkbox__fake-input"></span>
		<input type="checkbox" />
		<span className="checkbox-title">
			{title}
		</span>
	</div>
}

Checkbox.propTypes = {
	isActive: PropTypes.bool,
	title: PropTypes.string,
	onClick: PropTypes.func,
	value: PropTypes.number
}

export default Checkbox;