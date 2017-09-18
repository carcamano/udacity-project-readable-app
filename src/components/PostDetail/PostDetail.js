/**
 * Created by Felipe on 03/09/2017.
 */

import React , { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getPosts , votePost } from '../../services/readable-api';
import { loadPost , loadPosts } from '../../redux/actions/post';
import { formatPostDate } from '../../util/funcgen';
import PubishControllers from '../PubishControllers/PubishControllers';


class PostDetail extends Component {

	static propTypes = {
		postId: PropTypes.string.isRequired
	};

	voteScore = ( vote ) => {
		const { postId , dispatch } = this.props;
		votePost( postId , vote )
			.then( post => dispatch( loadPost( post ) ) );
	};

	render() {

		const { post , postId } = this.props;
		console.log(this.props);

		return (
			<div>

				<div key={post.id}>
					<div className="post-preview">
						<h2 className="post-title">
							{post.title}
						</h2>
						<p>
							{post.body}
						</p>
						<p className="post-meta">
							Posted by <strong>{post.author}</strong> - on {formatPostDate( post.timestamp )}
						</p>
						<PubishControllers
							onVoteScore={this.voteScore}
							voteScore={post.voteScore}
						/>
					</div>
					<hr/>
				</div>

			</div>
		);
	}
}

function mapStateToProps( { posts } , props ) {

	const postId = props.postId;

	return {
		post: posts.entities[ postId ]
	}
}


export default connect( mapStateToProps )( PostDetail );