/**
 * Created by Felipe on 03/09/2017.
 */

import React , { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import sortBy from 'sort-by';

import * as API from '../../services/readable-api';
import { formatPostDate } from '../../util/funcgen';
import { confirmAlert } from 'react-confirm-alert';
import { deleteComment , fetchComments , loadComment } from '../../redux/actions/comment';
import PublishControllers from '../PublishControllers/PublishControllers';
import './CommentList.css';
import CommentForm from '../CommentForm/CommentForm';

class CommentList extends Component {

	static propTypes = {
		postId: PropTypes.string
	};

	voteScore = ( vote , commentId ) => {
		const { dispatch } = this.props;
		API.voteComment( commentId , vote ).then( post => {
			dispatch( loadComment( post ) )
		} );
	};

	edit = ( commentId ) => {
	};

	delete = ( commentId ) => {
		confirmAlert( {
			title: 'Please Confirm' ,
			message: 'You really wanna delete this Comment?' ,
			childrenElement: () => <div></div> ,
			confirmLabel: 'OK' ,
			cancelLabel: 'Cancel' ,
			onConfirm: () => {
				const { dispatch } = this.props;
				API.deleteComment( commentId ).then( () => {
					dispatch( deleteComment( commentId ) );
					toast.success( 'Comment Deleted!' );
				} )
			} ,
			onCancel: () => {
			} ,
		} )
	};

	componentDidMount() {
		const { postId , dispatch } = this.props;
		dispatch( fetchComments( postId ) );
	}

	render() {

		const { postId , comments } = this.props;
		let postComments = comments.filter( c => c.parentId === postId );
		postComments.sort( sortBy( '-timestamp' ) );

		return (
			<div>

				<div className="comment-area col-sm-10">
					<h3>Comments</h3>
					<hr className="tittle-divisor"/>
					{postComments && postComments.filter( comment => !comment.deleted ).map( ( comment ) => (
						<div key={comment.id}>
							<h6 className="post-subtitle">
								Comment by <strong>{comment.author}</strong> - on {formatPostDate( comment.timestamp )}
							</h6>
							<p className="post-meta">
								{comment.body}
							</p>
							<PublishControllers
								voteScore={comment.voteScore}
								onVoteScore={this.voteScore}
								onEdit={this.edit}
								onDelete={this.delete}
								id={comment.id}
							/>
							<hr/>
						</div>
					) )}
				</div>

				<div className="comment-area col-sm-10 mt-3">
					<h3>Add Comment</h3>
					<CommentForm/>
				</div>

				</div>
		);
	}
}

function mapStateToProps( { comments } ) {
	return {
		comments: comments.ids.map( id => comments.entities[ id ] )
	}
}

export default connect( mapStateToProps )( CommentList );