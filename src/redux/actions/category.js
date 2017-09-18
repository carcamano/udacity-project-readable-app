/**
 * Created by Felipe on 09/09/2017.
 */

import { getCategories } from '../../services/readable-api';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const loadCategories = ( categories ) => {
	return {
		type: LOAD_CATEGORIES ,
		categories
	}
};

export const fetchCategories = () => dispatch => {
	getCategories().then( res => {
		dispatch( loadCategories( res.categories ) )
	} );
};