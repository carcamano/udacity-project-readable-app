/**
 * Created by Felipe on 09/09/2017.
 */

import { LOAD_CATEGORIES } from '../actions/category';

export default function categoryReducer( state = [] , action ) {

	switch ( action.type ) {
		case LOAD_CATEGORIES: {
			const { categories } = action;
			return {
				...state ,
				...categories
			};
		}

		default: {
			return state;
		}
	}

}