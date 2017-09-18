/**
 * Created by Felipe on 03/09/2017.
 */

import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { UncontrolledTooltip } from 'reactstrap';

import './PubishControllers.css';

class PubishControllers extends Component {

	static propTypes = {
		voteScore: PropTypes.number.isRequired ,
		onVoteScore: PropTypes.func.isRequired
	};


	render() {
		return (
			<div className="row">

				<div className="col-md-8">
					<button type="button" className="btn btn-outline-primary" id="btn-edit">
						<i className="fa fa-pencil" aria-hidden="true"/>
						<UncontrolledTooltip placement="top" target="btn-edit">
							Edit
						</UncontrolledTooltip>
					</button>

					<button type="button" className="btn btn-outline-danger ml-2" id="btn-delete">
						<i className="fa fa-trash" aria-hidden="true"/>
						<UncontrolledTooltip placement="top" target="btn-delete">
							Delete
						</UncontrolledTooltip>
					</button>
				</div>

				<div className="col-md-4">
					<button type="button" className="btn btn-outline-success"
					        onClick={(e) => this.props.onVoteScore('upVote')}
					        onMouseDown={(e) => e.preventDefault()}
					>
						<i className="fa fa-thumbs-o-up" aria-hidden="true"/>
					</button>
					<span className={'vote-score-span ' + (this.props.voteScore > 0 ? 'text-success' : 'text-danger')}>
						{this.props.voteScore}
					</span>
					<button type="button" className="btn btn-outline-danger"
					        onClick={(e) => this.props.onVoteScore('downVote')}
					        onMouseDown={(e) => e.preventDefault()}
					>
						<i className="fa fa-thumbs-o-down" aria-hidden="true"/>
					</button>
				</div>

			</div>
		);
	}

}

export default PubishControllers;
