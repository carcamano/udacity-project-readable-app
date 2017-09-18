import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import { connect } from 'react-redux';

import HomeScene from './scenes/Home/Home'
import PostScene from './scenes/Post/Post'
import { fetchPosts } from './redux/actions/post';
import { fetchCategories } from './redux/actions/category';
import { fetchComments } from './redux/actions/comment';

class App extends Component {

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch( fetchPosts() );
		dispatch( fetchCategories() );
		dispatch( fetchComments() );
	}


	render() {

		return (
			<BrowserRouter>
				<div>
					<Route exact path='/' render={() => <HomeScene/>}/>
					<Route path="/category/:selectedCategory" component={HomeScene}/>
					<Route path="/post/:postId" component={PostScene}/>
				</div>
			</BrowserRouter>
		);
	}

}

export default connect()( App );
