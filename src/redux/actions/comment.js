/**
 * Created by Felipe on 17/09/2017.
 */

import * as API from '../../services/readable-api';

export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const LOAD_COMMENT = 'LOAD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const loadComments = ( comments ) => {
	return {
		type: LOAD_COMMENTS ,
		comments
	}
};

export const loadComment = ( comment ) => {
	return {
		type: LOAD_COMMENT ,
		comment
	}
};

export const deleteComment = ( id ) => {
	return {
		type: DELETE_COMMENT ,
		id
	}
};

export const fetchComments = ( idPost ) => dispatch => {
	API.getPostComments( idPost )
		.then( comments => dispatch( loadComments( comments ) ) );
};

export const sendVote = ( commentId , vote ) => dispatch => {
	API.voteComment( commentId , vote ).then( post =>
		dispatch( loadComment( post ) ) );
};

export const sendDeleteComment = ( commentId ) => dispatch => {
	API.deleteComment( commentId )
		.then( () => dispatch( deleteComment( commentId ) ) );
};

export const sendEditComment = ( data ) => dispatch => {
	API.editComment( data.id , data.title , data.body )
		.then( comment => dispatch( loadComment( comment ) ) );
};

export const sendAddCommentToPost = ( postId , data ) => dispatch => {
	API.addCommentToPost( postId , data.body , data.author )
		.then( comment => dispatch( loadComment( comment ) ) );
};

