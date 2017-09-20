/**
 * Created by Felipe on 29/08/2017.
 */

import * as uuid from 'uuid';


const api = 'http://localhost:5001'


let token = localStorage.token;
if ( !token ) {
	token = uuid.v4();
	localStorage.setItem( 'token' , token );
}

const headers = {
	'Accept': 'application/json' ,
	'Authorization': token
}

// GET Methods
export const getCategories = () =>
	fetch( `${api}/categories` , { headers } )
	.then( res => res.json() )
	.then( data => data.categories );

export const getPosts = () =>
	fetch( `${api}/posts` , { headers } )
	.then( res => res.json() );

export const getPostsByCategories = ( category ) =>
	fetch( `${api}/${category}/posts` , { headers } )
	.then( res => res.json() );

export const getPost = ( postId ) =>
	fetch( `${api}/posts/${postId}` , { headers } )
	.then( res => res.json() );

export const getPostComments = ( postId ) =>
	fetch( `${api}/posts/${postId}/comments` , { headers } )
	.then( res => res.json() );

export const getComment = ( commentId ) =>
	fetch( `${api}/comments/${commentId}` , { headers } )
	.then( res => res.json() );


// POST Methods
export const addPost = ( title , body , author , category ) => {
	let id = uuid.v4();
	let timestamp = Date.now();
	return fetch( `${api}/posts` , {
		method: 'POST' ,
		headers: {
			...headers ,
			'Content-Type': 'application/json'
		} ,
		body: JSON.stringify( { id , timestamp , title , body , author , category } )
	} ).then( res => res.json() );
}

export const votePost = ( postId , option ) =>
	fetch( `${api}/posts/${postId}` , {
		method: 'POST' ,
		headers: {
			...headers ,
			'Content-Type': 'application/json'
		} ,
		body: JSON.stringify( { option } )
	} ).then( res => res.json() );

export const addCommentToPost = ( postId , body , author ) => {
	let id = uuid.v4();
	let timestamp = Date.now();
	return fetch( `${api}/comments` , {
		method: 'POST' ,
		headers: {
			...headers ,
			'Content-Type': 'application/json'
		} ,
		body: JSON.stringify( { id , timestamp , body , author , parentId: postId } )
	} ).then( res => res.json() );
}

export const voteComment = ( commentId , option ) =>
	fetch( `${api}/comments/${commentId}` , {
		method: 'POST' ,
		headers: {
			...headers ,
			'Content-Type': 'application/json'
		} ,
		body: JSON.stringify( { option } )
	} ).then( res => res.json() );


// PUT Methods
export const editPost = ( postId , title , body , author , category ) =>
	fetch( `${api}/posts/${postId}` , {
		method: 'PUT' ,
		headers: {
			...headers ,
			'Content-Type': 'application/json'
		} ,
		body: JSON.stringify( { title , body , author , category } )
	} ).then( res => res.json() );

export const editComment = ( commentId , title , body ) =>
	fetch( `${api}/comments/${commentId}` , {
		method: 'PUT' ,
		headers: {
			...headers ,
			'Content-Type': 'application/json'
		} ,
		body: JSON.stringify( { title , body } )
	} ).then( res => res.json() );


// DELETE Methods
export const deletePost = ( postId ) =>
	fetch( `${api}/posts/${postId}` , {
		method: 'DELETE' ,
		headers: {
			...headers ,
			'Content-Type': 'application/json'
		} ,
	} ).then( res => postId );

export const deleteComment = ( commentId ) =>
	fetch( `${api}/comments/${commentId}` , {
		method: 'DELETE' ,
		headers: {
			...headers ,
			'Content-Type': 'application/json'
		} ,
	} ).then( res => res.json() );