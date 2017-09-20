/**
 * Created by Felipe on 03/09/2017.
 */

import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';

import * as API from '../../services/readable-api';
import { loadPost , loadPosts } from '../../redux/actions/post';
import { formatPostDate } from '../../util/funcgen';
import PublishControllers from '../PublishControllers/PublishControllers';


class PostPreview extends Component {

	static propTypes = {
		sortedBy: PropTypes.string ,
		category: PropTypes.string
	};

	componentDidMount() {
		const { dispatch } = this.props;
		API.getPosts().then( res => {
			dispatch( loadPosts( res ) );
		} );
	}

	voteScore = ( vote , id ) => {
		const { dispatch } = this.props;
		API.votePost( id , vote ).then( post => {
			dispatch( loadPost( post ) )
		} );
	};

	getPostComment = ( postId , comments ) => {
		return comments.filter( c => c.parentId === postId ).length;
	}


	render() {

		const { posts , comments , sortedBy , category } = this.props;
		let p = category ? posts.filter( post => post.category === category ) : posts;
		p.sort( sortBy( sortedBy ) );

		return (
			<div>

				{p && p.filter( post => !post.deleted ).map( ( post ) => (
					<div key={post.id}>
						<div className="post-preview">
							<Link to={`/post/${post.id}`}>
								<h2 className="post-title">
									{post.title}
								</h2>
								<h3 className="post-subtitle">
									{post.body.substr( 0 , post.body.lastIndexOf( ' ' , 100 ) + 1 )}
								</h3>
							</Link>
							<p className="post-meta">
								Posted by <strong>{post.author}</strong> - on {formatPostDate( post.timestamp )}
								<br/>
								Comments: {this.getPostComment( post.id , comments )}
							</p>
							<PublishControllers
								onVoteScore={this.voteScore}
								voteScore={post.voteScore}
								id={post.id}
								hideEditDelete
							/>
						</div>
						<hr/>
					</div>
				) )}

			</div>
		);
	}
}

function mapStateToProps( { posts , comments } ) {
	return {
		posts: posts.ids.map( id => posts.entities[ id ] ) ,
		comments: comments.ids.map( id => comments.entities[ id ] )
	}
}

export default connect( mapStateToProps )( PostPreview );