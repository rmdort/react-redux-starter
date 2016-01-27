import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root'));

if (module.hot) {
	
	// Enable Webpack hot module replacement for reducers	
  	module.hot.accept('./reducers', () => {
		const {reducer: nextReducer} = require('./reducers');
		store.replaceReducer(nextReducer);
  	});
}