/**
 * Created by Felipe on 03/09/2017.
 */

import React , { Component } from 'react';

class PostSort extends Component {
	render() {
		return (

			<div className="form-group row">
				<label htmlFor="staticEmail" className="col-form-label">Sort by:</label>
				<select className="form-control" style={ { width: '250px' , marginLeft: '15px' } }>
					<option value={'sc'}>Score</option>
					<option value={'dt'}>Date</option>
				</select>
			</div>

		);
	}
}

export default PostSort;





