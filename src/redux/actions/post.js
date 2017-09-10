/**
 * Created by Felipe on 29/08/2017.
 */

export const LOAD_POSTS = 'LOAD_POSTS';

export function loadPosts (posts) {
	return {
		type: LOAD_POSTS,
		posts
	}
}