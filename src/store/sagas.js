import ticketsWatcher from './tickets/sagas';
import authorizedUserWather from './authorizedUser/sagas';
import locationWatcher from './location/sagas';
import activeCurrencyTypeWatcher from './activeCurrencyType/sagas';

export default [
	ticketsWatcher,
	authorizedUserWather,
	locationWatcher,
	activeCurrencyTypeWatcher
]