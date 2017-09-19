import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

class CommentForm extends Component {

	propTypes = {
		onSubmit: PropTypes.func ,
		id: PropTypes.string ,
		body: PropTypes.string ,
		parentId: PropTypes.string ,
		hideBack: PropTypes.bool ,
	};

	state = {
		author: '' ,
		body: ''
	};

	onInputChange = ( e ) => {
		const { name , value } = e.target;
		this.setState( {
			[name]: value
		} );
	};

	submit = () => {

		const { username , onSubmit , id , parentId } = this.props;
		const { author , body } = this.state;

		if ( author.trim() === '' ) {
			toast.error('Please fill Author\'s name');
			return;
		}

		if ( body.trim() === '' ) {
			toast.error('Please fill comment field');
			return;
		}

		onSubmit( {
			timestamp: Date.now() ,
			owner: username ,
			author: username ,
			parentId ,
			body ,
		} );
		this.setState( { author: '' , body: '' } );

	};

	componentDidMount() {

		const { author , body } = this.props;

		if ( body ) {
			this.body.value = body;
		}

		if ( body ) {
			this.body.value = body;
		}

	}

	render() {

		const { author , body } = this.state;
		const { hideBack } = this.props;

		return (
			<form onSubmit={this.submit}>

				<div className="form-group">
					<label htmlFor="author">Name</label>
					<input type="text" onChange={( e ) => this.onInputChange( e )}
					       className="form-control" id="author" name="author" placeholder="Type your name"/>
				</div>

				<div className="form-group">
					<label htmlFor="comment">Comment</label>
					<textarea type="text" rows={5} onChange={( e ) => this.onInputChange( e )}
					          className="form-control" id="body" name="body" placeholder="Type your comment"/>
				</div>

				<div className="form-group text-right">
					<button type="button" className="btn btn-outline-info"
					        onClick={( e ) => this.submit()}
					        onMouseDown={( e ) => e.preventDefault()}
					>
						Comment
					</button>
				</div>

			</form>
		);

	}

}

export default CommentForm;