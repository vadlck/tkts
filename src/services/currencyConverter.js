import serverRequest from './serverRequest';

class CurrencyConverter {
	constructor() {
		this.loadRates();
	}

	currencySymbols = {
		'USD': '$',
		'EUR': '€',
		'RU': '₽'
	}

	getCurrencySymbol = currencyType => this.currencySymbols[currencyType]

	convert(price, currencyType) {
		return (price * this.exchangeRates[currencyType]).toFixed();
	}

	async loadRates() {
		this.exchangeRates = await serverRequest.get('/api/exchange-rates');
	}
}

export default new CurrencyConverter();