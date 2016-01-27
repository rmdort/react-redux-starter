import { compose, createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const __DEV__ = process.NODE_ENV == 'production'? false : true;

const doNotLogActions = [''];

/* Logger */

const logger = createLogger({
	collapsed: true,
	predicate: (getState, action) => __DEV__ && doNotLogActions.indexOf(action.type) == -1
});

/* Middlewares */

let middleware = [ thunk, logger ]

let finalCreateStore;

if (process.env.NODE_ENV === 'production') {
	finalCreateStore = applyMiddleware(...middleware)(createStore)
} else {

	finalCreateStore = compose(
		applyMiddleware(...middleware),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)(createStore)
}

export default finalCreateStore(reducers)