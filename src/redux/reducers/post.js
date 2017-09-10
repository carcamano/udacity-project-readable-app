/**
 * Created by Felipe on 29/08/2017.
 */

import { LOAD_POSTS } from '../actions/post';

export default function postReducer( state = [] , action ) {

	switch ( action.type ) {

		case LOAD_POSTS :
			const { posts } = action;
			return {
				...state ,
				...posts ,
			}

		default :
			return state
	}

}
