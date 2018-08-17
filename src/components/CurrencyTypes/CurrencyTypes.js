import React from 'react';
import PropTypes from 'prop-types';

function CurrencyTypes({ currencyTypes, activeCurrencyType, updateActiveCurrencyType }) {
	return <div className="currency">
		<h4>ВАЛЮТА</h4>
		<div className="currency__types" onClick={updateActiveCurrencyType}>
			{currencyTypes.map((currencyType, i) => {
				let isActive = activeCurrencyType === currencyType
					, className = `currency-types__type ${isActive ? 'active' : ''}`;

				return <div key={i}
					className={className}
					data-type={currencyType}>
					{currencyType}
				</div>
			})}
		</div>
	</div>
}

CurrencyTypes.propTypes = {
	currencyTypes: PropTypes.array,
	activeCurrencyType: PropTypes.string,
	updateActiveCurrencyType: PropTypes.func
}

export default CurrencyTypes