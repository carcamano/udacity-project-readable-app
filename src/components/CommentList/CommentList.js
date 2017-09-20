/**
 * Created by Felipe on 03/09/2017.
 */

import React , { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import sortBy from 'sort-by';
import scrollToComponent from 'react-scroll-to-component';
import ReactModal from 'react-modal';

import * as API from '../../services/readable-api';
import { formatPostDate } from '../../util/funcgen';
import { confirmAlert } from 'react-confirm-alert';
import { deleteComment , fetchComments , loadComment } from '../../redux/actions/comment';
import PublishControllers from '../PublishControllers/PublishControllers';
import './CommentList.css';
import CommentForm from '../CommentForm/CommentForm';

class CommentList extends Component {

	state = {
		isEditModalOpen: false ,
		idEditComment: '' ,
		authorEditComment: '' ,
		bodyEditComment: '' ,
	};

	static propTypes = {
		postId: PropTypes.string.isRequired
	};

	voteScore = ( vote , commentId ) => {
		const { dispatch } = this.props;
		API.voteComment( commentId , vote ).then( post => {
			dispatch( loadComment( post ) )
		} );
	};

	addComment = ( data ) => {
		const { postId , dispatch } = this.props;
		API.addCommentToPost( postId , data.body , data.author ).then( comment => {
			dispatch( loadComment( comment ) );
			toast.success( 'Comment successfully saved!' );
			scrollToComponent( this.scrollPos , { offset: 0 , align: 'top' , duration: 500 } )
		} ).catch( error => toast.error( 'Can\'t save the comment :( ' ) );
	};

	openModal = ( commentId ) => {
		const { comments } = this.props;
		const comment = comments.filter( c => c.id === commentId );

		this.setState( {
			isEditModalOpen: true ,
			idEditComment: commentId ,
			authorEditComment: comment[ 0 ].author ,
			bodyEditComment: comment[ 0 ].body ,
		} );
	};

	closeModal = () => {
		this.setState( { isEditModalOpen: false } );
	};

	editComment = ( data ) => {
		const { dispatch } = this.props;
		API.editComment( data.id , data.title , data.body ).then( comment => {
			dispatch( loadComment( comment ) );
			this.closeModal();
			toast.success( 'Edition Saved!' );
		} );
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
	};

	render() {

		const { isEditModalOpen , idEditComment , authorEditComment , bodyEditComment } = this.state;
		const { postId , comments } = this.props;

		let postComments = comments.filter( c => c.parentId === postId );
		postComments.sort( sortBy( '-timestamp' ) );

		return (
			<div ref={( section ) => {
				this.scrollPos = section;
			}}>

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
								onEdit={this.openModal}
								onDelete={this.delete}
								id={comment.id}
							/>
							<hr/>
						</div>
					) )}
				</div>

				<div className="comment-area col-sm-10 mt-3">
					<h3>Add Comment</h3>
					<CommentForm
						onSubmit={this.addComment}
					/>
				</div>

				<ReactModal
					isOpen={isEditModalOpen}
					onRequestClose={this.closeModal}
					contentLabel='Modal'
				>
					<div className="row">
						<div className="col-sm-12 col-md-4 m0a">
							<h3>Edit Comment</h3>
							<CommentForm
								onSubmit={this.editComment}
								id={idEditComment}
								author={authorEditComment}
								body={bodyEditComment}
								parentId={postId}
							/>
						</div>
					</div>
				</ReactModal>

			</div>
		);
	};
}

function mapStateToProps( { comments } ) {
	return {
		comments: comments.ids.map( id => comments.entities[ id ] )
	}
}

export default connect( mapStateToProps )( CommentList );