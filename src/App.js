import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

import HomeScene from './scenes/Home/Home'
import PostScene from './scenes/Post/Post'
import { fetchPosts } from './redux/actions/post';
import { fetchCategories } from './redux/actions/category';
import PostAddEditScene from './scenes/PostAddEdit/PostAddEdit';

class App extends Component {

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch( fetchPosts() );
		dispatch( fetchCategories() );
	}


	render() {

		return (
			<BrowserRouter>
				<div>

					<Route exact path='/' render={() => <HomeScene/>}/>
					<Route exact path="/category/:selectedCategory" component={HomeScene}/>
					<Route exact path="/post/:postId" component={PostScene}/>
					<Route exact path="/post-add" component={PostAddEditScene}/>
					<Route exact path="/post-edit/:postId" component={PostAddEditScene}/>

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
