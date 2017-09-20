import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

class CommentForm extends Component {

	static propTypes = {
		onSubmit: PropTypes.func.isRequired ,
		id: PropTypes.string ,
		author: PropTypes.string ,
		body: PropTypes.string ,
		parentId: PropTypes.string ,
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

		const { onSubmit , postId , id } = this.props;
		const { author , body } = this.state;

		if ( author.trim() === '' ) {
			toast.error( 'Please fill Author\'s name' );
			return;
		}

		if ( body.trim() === '' ) {
			toast.error( 'Please fill comment field' );
			return;
		}

		onSubmit( {
			id ,
			author ,
			parentId: postId ,
			body ,
		} );
		this.setState( { author: '' , body: '' } );
		console.log( this.state );

	};

	render() {

		const { id , author , body } = this.state;
		if ( id ) {
			const { author , body } = this.props;
			this.setState( {
				author ,
				body
			} );
		}

		return (
			<form onSubmit={this.submit}>

				<div className="form-group">
					<label htmlFor="author">Name</label>
					<input type="text" onChange={( e ) => this.onInputChange( e )}
					       className="form-control" id="author" name="author" placeholder="Type your name"
					       value={author}/>
				</div>

				<div className="form-group">
					<label htmlFor="comment">Comment</label>
					<textarea type="text" rows={5} onChange={( e ) => this.onInputChange( e )}
					          className="form-control" id="body" name="body" placeholder="Type your comment"
					          value={body}/>
				</div>

				<div className="form-group text-right">
					<button type="button" className="btn btn-outline-info"
					        onClick={( e ) => this.submit()}
					        onMouseDown={( e ) => e.preventDefault()}
					>
						Save
					</button>
				</div>

			</form>
		);

	}

}

export default CommentForm;