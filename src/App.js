import React , { Component } from 'react';
import { Route } from 'react-router-dom'

import HomeScene from './scenes/Home/Home'

class App extends Component {
	render() {
		return (
			<div>

				<Route exact path='/' render={ () =>
					<HomeScene/>
				}
				/>

				{/*<Route path='/search' render={() =>*/}
					{/*<SearchScene*/}
						{/*books={this.state.books}*/}
						{/*onMoveToShelf={this.moveToShelf}*/}
					{/*/>}*/}
				{/*/>*/}

			</div>
		);
	}
}

export default App;
