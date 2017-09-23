/**
 * Created by Felipe on 29/08/2017.
 */

import * as API from '../../services/readable-api';
import { fetchComments } from './comment';

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

export const fetchPosts = () => dispatch => {
	API.getPosts()
		.then( posts => {
			dispatch( loadPosts( posts ) )
			posts.map( post => dispatch( fetchComments( post.id ) ) );
		} );
};

export const sendVote = ( postId , vote ) => dispatch => {
	API.votePost( postId , vote )
		.then( post => dispatch( loadPost( post ) ) );
};

export const sendDeletePost = ( postId ) => dispatch => {
	API.deletePost( postId )
		.then( () => dispatch( deletePost( postId ) ) );
};

export const sendAddPost = ( data ) => dispatch => {
	return API.addPost( data.title , data.body , data.author , data.category )
		.then( post => dispatch( loadPost( post ) ) );
};

export const sendEditPost = ( postId , data ) => dispatch => {
	return API.editPost( postId , data.title , data.body , data.author , data.category )
		.then( post => dispatch( loadPost( post ) ) );
};
