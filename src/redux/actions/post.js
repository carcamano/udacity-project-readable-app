/**
 * Created by Felipe on 29/08/2017.
 */

import { getPosts , votePost } from '../../services/readable-api';

export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_POST = 'LOAD_POST';
export const DELETE_POST = 'DELETE_POST';

export const loadPosts = ( posts ) => {
	return {
		type: LOAD_POSTS ,
		posts
	}
};

export const loadPost = ( post ) => {
	return {
		type: LOAD_POST ,
		post
	}
};

export const deletePost = ( id ) => {
	return {
		type: DELETE_POST ,
		id
	}
};

export const sendVote = ( id , vote ) => dispatch => {
	votePost( id , vote )
		.then( post => dispatch( loadPost( post ) ) );
};

export const fetchPosts = () => dispatch => {
	getPosts()
		.then( posts => dispatch( loadPosts( posts ) ) );
};
