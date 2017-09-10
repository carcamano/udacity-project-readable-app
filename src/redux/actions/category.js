/**
 * Created by Felipe on 09/09/2017.
 */

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const loadCategories = ( categories ) => {

	return {
		type: LOAD_CATEGORIES ,
		categories
	}

}