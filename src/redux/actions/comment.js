/**
 * Created by Felipe on 17/09/2017.
 */

import { getPostComments , voteComment } from '../../services/readable-api';

export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const LOAD_COMMENT = 'LOAD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const loadComments = (comments) => {
	return {
		type: LOAD_COMMENTS,
		comments
	}
};

export const fetchComments = (idPost) => dispatch => {
	getPostComments(idPost)
		.then(comments => dispatch(loadComments(comments)));
};

export const loadComment = (comment) => {
	return {
		type: LOAD_COMMENT,
		comment
	}
};

export const sendVote = (id, vote) => dispatch => {
	voteComment(id, vote)
		.then(comment => dispatch(loadComment(comment)));
};

export const deleteComment = (id) => {
	return {
		type:DELETE_COMMENT,
		id
	}
};