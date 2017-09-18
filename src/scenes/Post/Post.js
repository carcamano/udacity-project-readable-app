/**
 * Created by Felipe on 29/08/2017.
 */

import React , { Component } from 'react';

import TopBar from '../../components/TopBar/TopBar';
import FooterBar from '../../components/FooterBar/FooterBar';
import PostDetail from '../../components/PostDetail/PostDetail';


class PostScene extends Component {

	render() {

		const postId = this.props.match && this.props.match.params ? this.props.match.params.postId : '';

		return (
			<div>

				<TopBar/>

				<div className="container">

					<div className="row">
						<div className="col-lg-8 col-md-10 mx-auto">
							<PostDetail
								postId={postId}
							/>
						</div>
					</div>

				</div>

				<FooterBar/>

			</div>
		);
	}

}

export default PostScene
