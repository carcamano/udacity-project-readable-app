import React , { Component } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';

import HomeScene from './scenes/Home/Home'
import PostScene from './scenes/Post/Post'
import { getPosts } from './services/readable-api';
import { loadPosts } from './redux/actions/post';

class App extends Component {

	componentDidMount() {
		const { dispatch } = this.props;
		getPosts().then( res => {
			dispatch( loadPosts( res ) )
		} );
	}


	render() {

		return (
			<div>

				<Route exact path='/' render={() =>
					<HomeScene/>
				}
				/>

				<Route path="/category/:selectedCategory" component={HomeScene}/>

				<Route path="/post/:postId" component={PostScene}/>

			</div>
		);
	}

}

export default connect()( App );
