/**
 * Created by Felipe on 29/08/2017.
 */

import React , { Component } from 'react';

import TopBar from '../../components/TopBar/TopBar';
import FooterBar from '../../components/FooterBar/FooterBar';
import PostPreview from '../../components/PostPreview/PostPreview';
import PostSort from '../../components/PostSort/PostSort';


class HomeScene extends Component {

	state = {
		sortedBy: '-voteScore' ,
	};

	onChangeOrder( event ) {
		this.setState( { sortedBy: event.target.value } );
	}

	constructor( props ) {
		super( props );
		this.onChangeOrder = this.onChangeOrder.bind( this );
	}

	render() {

		const categoryFilter = this.props.match && this.props.match.params ? this.props.match.params.selectedCategory : '';

		return (
			<div>

				<TopBar/>

				<div className="container">

					<div className="row">
						<div className="col-lg-8 col-md-10 mx-auto">
							<PostSort
								sortedBy={this.state.sortedBy}
								onChangeOrder={this.onChangeOrder}
							/>
						</div>
						<div className="col-lg-8 col-md-10 mx-auto">
							<PostPreview
								sortedBy={this.state.sortedBy}
								category={categoryFilter}
							/>
						</div>
					</div>

				</div>

				<FooterBar/>

			</div>
		);
	}

}

export default HomeScene
