/**
 * Created by Felipe on 29/08/2017.
 */

import { combineReducers } from 'redux'

import postReducer from './post'
import categoryReducer from './category'


export default combineReducers( {
	posts: postReducer ,
	categories: categoryReducer
} )