/**
 * Created by Felipe on 29/08/2017.
 */

import React , { Component } from 'react';

import TopBar from '../../components/TopBar/TopBar';
import FooterBar from '../../components/FooterBar/FooterBar';
import PostPreview from '../../components/PostPreview/PostPreview';
import PostSort from '../../components/PostSort/PostSort';


class HomeScene extends Component {


	render() {
		return (
			<div>

				<TopBar/>

				<div className="container">

					<div className="row">
						<div className="col-lg-8 col-md-10 mx-auto">
							<PostSort/>
						</div>
						<div className="col-lg-8 col-md-10 mx-auto">
							<PostPreview/>
							<PostPreview/>
							<PostPreview/>
							<PostPreview/>
						</div>
					</div>

				</div>

				<FooterBar/>

			</div>
		);
	}

}

export default HomeScene
