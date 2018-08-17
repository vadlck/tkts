import 'babel-polyfill';
import './index.scss';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import CustomRoute from './routes/CustomRoute';

ReactDom.render(
	<Provider store={store}>
		<CustomRoute />
	</Provider>,
	document.getElementById('root')
);