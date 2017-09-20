/**
 * Created by Felipe on 29/08/2017.
 */

import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';

class PostForm extends Component {

	static propTypes = {
		onSubmit: PropTypes.func.isRequired ,
		onClose: PropTypes.func.isRequired ,
		postId: PropTypes.string ,
		title: PropTypes.string ,
		body: PropTypes.string ,
		author: PropTypes.string ,
		category: PropTypes.string ,
	};

	state = {
		title: '' ,
		body: '' ,
		author: '' ,
		category: '' ,
	};

	onInputChange = ( e ) => {
		const { name , value } = e.target;
		this.setState( {
			[name]: value
		} );
	};

	submit = () => {

		const { onSubmit } = this.props;
		const { title , body , author , category } = this.state;

		if ( title.trim() === '' ) {
			toast.error( 'Please fill Title' );
			return;
		}

		if ( category.trim() === '' ) {
			toast.error( 'Please fill category' );
			return;
		}

		if ( author.trim() === '' ) {
			toast.error( 'Please fill Author\'s name' );
			return;
		}

		if ( body.trim() === '' ) {
			toast.error( 'Please fill post\'s body' );
			return;
		}

		onSubmit( { title , body , author , category } );

		this.setState( { title: '' , body: '' , author: '' , category: '' } );
	};

	componentDidMount() {
		if ( this.props.postId ) {
			this.setState( {
				title: this.props.title ,
				body: this.props.body ,
				author: this.props.author ,
				category: this.props.category ,

			} );
		}
	}

	render() {

		const { title , body , author , category } = this.state;
		const { categories } = this.props;

		return (
			<form onSubmit={this.submit}>

				<div className="form-group">
					<label htmlFor="title">Post Title</label>
					<input type="text" onChange={( e ) => this.onInputChange( e )}
					       className="form-control" id="title" name="title" placeholder="Type your post's title"
					       value={title}/>
				</div>

				<div className="form-group">
					<label htmlFor="author">Author's Name</label>
					<input type="text" onChange={( e ) => this.onInputChange( e )}
					       className="form-control" id="author" name="author" placeholder="Type your name"
					       value={author}/>
				</div>

				<div className="form-group">
					<label htmlFor="category">Category</label>
					<select onChange={( e ) => this.onInputChange( e )}
					        className="form-control" id="category" name="category" placeholder="Choose a Category"
					        value={category}>
						<option value="">--</option>
						{categories && categories.map( c =>
							<option key={c.name} value={c.name}>{c.name}</option>
						)}

					</select>
				</div>

				<div className="form-group">
					<label htmlFor="body">Post Body</label>
					<textarea type="text" rows={5} onChange={( e ) => this.onInputChange( e )}
					          className="form-control" id="body" name="body" placeholder="Type Post Body"
					          value={body}/>
				</div>

				<div className="form-group text-right">
					<button type="button" className="btn btn-outline-danger mr-2"
					        onClick={( e ) => this.props.onClose()}
					        onMouseDown={( e ) => e.preventDefault()}
					>
						Cancel
					</button>

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

function mapStateToProps( { categories } ) {
	return {
		categories: categories.categories
	}
}

export default connect( mapStateToProps )( PostForm );