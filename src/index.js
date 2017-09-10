import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore , applyMiddleware , compose } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/blog.css';

import reducer from './redux/reducers';


const logger = store => next => action => {
	console.group( action.type );
	console.info( 'dispatching' , action );
	let result = next( action );
	console.log( 'next state' , store.getState() );
	console.groupEnd( action.type );
	return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer ,
	composeEnhancers(
		applyMiddleware( logger )
	)
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider> ,
	document.getElementById( 'root' )
);

registerServiceWorker();
