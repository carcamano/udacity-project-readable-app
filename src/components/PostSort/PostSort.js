/**
 * Created by Felipe on 03/09/2017.
 */

import React , { Component } from 'react';
import PropTypes from 'prop-types';

class PostSort extends Component {

	static propTypes = {
		sortedBy: PropTypes.string.isRequired ,
		onChangeOrder: PropTypes.func.isRequired
	};

	render() {
		return (

			<div className="form-group row">
				<label htmlFor="staticEmail" className="col-form-label">Sort by:</label>
				<select
					value={this.props.sortedBy}
					onChange={this.props.onChangeOrder}
					className="form-control"
					style={{ width: '250px' , marginLeft: '15px' }}>
					<option value={'-voteScore'}>Score</option>
					<option value={'-timestamp'}>Date</option>
				</select>
			</div>

		);
	}
}

export default PostSort;





