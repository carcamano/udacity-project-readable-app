import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore , applyMiddleware , compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/blog.css';

import reducer from './redux/reducers';

const store = createStore(
	reducer ,
	compose( applyMiddleware( thunk ) )
);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider> ,
	document.getElementById( 'root' )
);

registerServiceWorker();
