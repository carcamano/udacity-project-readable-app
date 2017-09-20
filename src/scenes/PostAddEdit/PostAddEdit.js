/**
 * Created by Felipe on 29/08/2017.
 */

import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

import TopBar from '../../components/TopBar/TopBar';
import FooterBar from '../../components/FooterBar/FooterBar';
import PostForm from '../../components/PostForm/PostForm';
import * as API from '../../services/readable-api';
import { loadPost } from '../../redux/actions/post';
import { connect } from 'react-redux';

class PostAddEditScene extends Component {

	addPost = ( data ) => {
		const { dispatch } = this.props;
		API.addPost( data.title , data.body , data.author , data.category ).then( post => {
			dispatch( loadPost( post ) );
			toast.success( 'Post successfully saved!' );
			this.props.history.push( `/post/${post.id}` );
		} ).catch( error => toast.error( 'Can\'t save the Post :( ' ) );
	};

	editPost = ( data ) => {
		const { dispatch } = this.props;
		const postId = this.props.match && this.props.match.params ? this.props.match.params.postId : '';

		API.editPost( postId , data.title , data.body , data.author , data.category ).then( post => {
			dispatch( loadPost( post ) );
			toast.success( 'Post successfully edited!' );
			this.props.history.push( `/post/${postId}` );
		} ).catch( error => toast.error( 'Can\'t edit the Post :( ' ) );
	};

	cancelEdition = () => {
		window.history.back();
	}

	render() {

		const postId = this.props.match && this.props.match.params ? this.props.match.params.postId : '';
		const { post } = this.props;

		return (
			<div>

				<TopBar/>

				<div className="container">

					<div className="row">
						<div className="col-lg-8 col-md-10 mx-auto">

							{!postId &&
							<div>
								<h3>Add Post</h3>
								<PostForm
									onSubmit={this.addPost}
									onClose={this.cancelEdition}
								/>
							</div>
							}

							{postId && post &&
							<div>
								<h3>Edit Post</h3>
								<PostForm
									onSubmit={this.editPost}
									onClose={this.cancelEdition}
									postId={postId}
									title={post.title}
									category={post.category}
									body={post.body}
									author={post.author}
								/>
							</div>
							}

						</div>
					</div>

				</div>

				<FooterBar/>

			</div>
		);
	}

}

function mapStateToProps( { posts } , props ) {
	const postId = props.match && props.match.params ? props.match.params.postId : '';
	return {
		post: posts.entities[ postId ]
	}
}

export default connect( mapStateToProps )( withRouter( PostAddEditScene ) )
