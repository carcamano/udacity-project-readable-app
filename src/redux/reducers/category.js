/**
 * Created by Felipe on 09/09/2017.
 */

import { LOAD_CATEGORIES } from '../actions/category';

const initialState = {
	categories: []
};

export default function reducer( state = initialState , action ) {

	switch ( action.type ) {

		case LOAD_CATEGORIES: {
			const { categories } = action;
			return { categories };
		}

		default: {
			return state;
		}

	}

}