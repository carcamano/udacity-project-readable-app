/**
 * Created by Felipe on 03/09/2017.
 */

import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';

import { getPosts } from '../../services/readable-api';
import { loadPosts } from '../../redux/actions/post';


class PostPreview extends Component {

	static propTypes = {
		sortedBy: PropTypes.string ,
		category: PropTypes.string
	};

	componentDidMount() {

		const { dispatch } = this.props;

		getPosts().then( res => {
			dispatch( loadPosts( res ) )
		} );

	}

	getPostDate( unixDate ) {
		const dt = new Date( unixDate );
		return dt.toString();
	}

	render() {

		const { posts , sortedBy , category } = this.props;
		let p = category ? posts.filter( post => post.category === category ) : posts;
		p.sort( sortBy( sortedBy ) );

		return (
			<div>

				{p.filter( post => !post.deleted ).map( ( post ) => (
					<div key={post.id}>
						<div className="post-preview">
							<Link to={`/post/${post.id}`}>
								<h2 className="post-title">
									{post.title}
								</h2>
								<h3 className="post-subtitle">
									{post.body}
								</h3>
							</Link>
							<p className="post-meta">
								Posted by <strong>{post.author}</strong> - on {this.getPostDate( post.timestamp )}
								<br />
								Score: {post.voteScore}
							</p>
						</div>
						<hr/>
					</div>
				) )}

			</div>
		);
	}
}

function mapStateToProps( { posts } ) {

	return {
		posts: Object.keys( posts ).reduce( ( c , k ) => {
			return [ ...c , posts[ k ] ]
		} , [] )
	}

}

export default connect( mapStateToProps )( PostPreview );