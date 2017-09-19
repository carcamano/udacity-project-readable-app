import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

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

					<ToastContainer
						position="top-right"
						type="default"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						pauseOnHover
					/>

				</div>
			</BrowserRouter>
		);
	}

}

export default connect()( App );
