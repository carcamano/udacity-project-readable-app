import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

import App from './App';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/blog.css';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter> ,
	document.getElementById( 'root' )
);

registerServiceWorker();
