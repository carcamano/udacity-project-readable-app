import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

class CommentForm extends Component {

	static propTypes = {
		onSubmit: PropTypes.func.isRequired ,
		onClose: PropTypes.func ,
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
	};

	componentDidMount() {
		if ( this.props.id ) {
			this.setState( {
				author: this.props.author ,
				body: this.props.body
			} );
		}
	}

	render() {

		const { author , body } = this.state;

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
					{this.props.onClose &&
					<button type="button" className="btn btn-outline-danger mr-2"
					        onClick={( e ) => this.props.onClose()}
					        onMouseDown={( e ) => e.preventDefault()}
					>
						Cancel
					</button>
					}

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