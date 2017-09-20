/**
 * Created by Felipe on 17/09/2017.
 */

import { schema } from 'normalizr';

export const POST_SCHEMA = new schema.Entity( 'posts' );
export const POST_LIST_SCHEMA = new schema.Array( POST_SCHEMA );

export const COMMENT_SCHEMA = new schema.Entity( 'comments' );
export const COMMENT_LIST_SCHEMA = new schema.Array( COMMENT_SCHEMA );
