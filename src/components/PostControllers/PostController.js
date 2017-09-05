/**
 * Created by Felipe on 03/09/2017.
 */

import React , { Component } from 'react';
import { UncontrolledTooltip } from 'reactstrap';

class PostControllers extends Component {

	render() {
		return (
			<div className="row">

				<div className="col-md-8">
					<button type="button" className="btn btn-outline-primary" id="btn-edit">
						<i className="fa fa-pencil" aria-hidden="true"/>
					</button>
					<UncontrolledTooltip placement="Top" target="btn-edit">
						Edit
					</UncontrolledTooltip>
					<button type="button" className="btn btn-outline-danger ml-2" id="btn-delete">
						<i className="fa fa-trash" aria-hidden="true"/>
					</button>
					<UncontrolledTooltip placement="Top" target="btn-delete">
						Delete
					</UncontrolledTooltip>
				</div>

				<div className="col-md-4">
					<button type="button" className="btn btn-outline-success">
						<i className="fa fa-thumbs-o-up" aria-hidden="true"/>
						<span>4</span>
					</button>
					<button type="button" className="btn btn-outline-danger ml-2">
						<i className="fa fa-thumbs-o-down" aria-hidden="true"/>
						<span>9</span>
					</button>
				</div>

			</div>
		);
	}

}

export default PostControllers;
