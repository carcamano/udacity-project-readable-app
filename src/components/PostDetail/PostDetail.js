/**
 * Created by Felipe on 03/09/2017.
 */

import React , { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import * as API from '../../services/readable-api';
import { deletePost , loadPost } from '../../redux/actions/post';
import { formatPostDate } from '../../util/funcgen';
import PublishControllers from '../PublishControllers/PublishControllers';
import CommentList from '../CommentList/CommentList';


class PostDetail extends Component {

	static propTypes = {
		postId: PropTypes.string.isRequired
	};

	voteScore = ( vote ) => {
		const { postId , dispatch } = this.props;
		API.votePost( postId , vote ).then( post => {
			dispatch( loadPost( post ) )
		} );
	};

	edit = () => {
		const { postId } = this.props;
		this.props.history.push( `/post/edit/${postId}` );
	};

	delete = () => {
		confirmAlert( {
			title: 'Please Confirm' ,
			message: 'You really wanna delete this post?' ,
			childrenElement: () => <div></div> ,
			confirmLabel: 'OK' ,
			cancelLabel: 'Cancel' ,
			onConfirm: () => {
				const { postId , dispatch } = this.props;
				API.deletePost( postId ).then( () => {
					dispatch( deletePost( postId ) );
					toast.success( 'Post Deleted!' );
					window.history.back();
				} )
			} ,
			onCancel: () => {
			} ,
		} )
	};


	render() {

		const { post } = this.props;

		return (
			<div>

				{post &&
				<div key={post.id}>
					<div className="post-preview">
						<h2 className="post-title">
							{post.title}
						</h2>
						<p>
							{post.body}
						</p>
						<p className="post-meta">
							Posted by <strong>{post.author}</strong> - on {formatPostDate( post.timestamp )}
						</p>
						<PublishControllers
							onDelete={this.delete}
							onEdit={this.edit}
							onVoteScore={this.voteScore}
							voteScore={post.voteScore}
						/>
					</div>
					<hr/>
					<CommentList
						postId={post.id}
					/>
				</div>
				}

			</div>
		);
	}
}

function mapStateToProps( { posts } , props ) {
	const { postId } = props;
	return {
		post: posts.entities[ postId ]
	}
}


export default connect( mapStateToProps )( withRouter( PostDetail ) );