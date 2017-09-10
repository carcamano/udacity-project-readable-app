/**
 * Created by Felipe on 29/08/2017.
 */

import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from 'react-modal'

import './TopBar.css';
import { getCategories } from '../../services/readable-api';
import { loadCategories } from '../../redux/actions/category';


class TopBar extends Component {

	state = {
		postModalOpen: false
	};

	openPostModal = () => {
		console.log('modalOpen')
		this.setState( { postModalOpen: true } );
	};

	closePostModal = () => {
		this.setState( { postModalOpen: false } );
	};

	componentDidMount() {

		const { dispatch } = this.props;
		getCategories().then( res => {
			dispatch( loadCategories( res ) )
		} );

	}

	render() {

		const { categories } = this.props;

		return (
			<div>

				<nav className="nav-bar">
					<label htmlFor="toggle" className="nav-bar-label">Menu</label>
					<input type="checkbox" id="toggle" className="nav-bar-toggle"/>
					<ul className="nav-bar-list">
						<li className="nav-bar-list-item">
							<Link className="nav-bar-link" to="/">Home</Link>
						</li>
						<li className="nav-bar-list-item">
							<label htmlFor="toggle-sub-1" className="nav-bar-sub-label">
								Categories<i className="fa fa-caret-down" aria-hidden="true"/>
							</label>
							<input type="checkbox" id="toggle-sub-1" className="nav-bar-toggle"/>
							<ul className="nav-bar-list">
								{categories.map( category =>
									<li key={category.name} className="nav-bar-list-item">
										<Link to={`/category/${category.path}`}
										      className="nav-bar-link">{category.name}</Link>
									</li>
								)}
							</ul>
						</li>
						<li className="nav-bar-list-item">
							<a href='#' className="nav-bar-link" onClick={() => this.openPostModal()}>Add New Post</a>
						</li>
					</ul>
				</nav>

				<header className="masthead">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-10 mx-auto">
								<div className="site-heading">
									<h1>Nanodegree</h1>
									<span className="subheading">React & Redux Project</span>
								</div>
							</div>
						</div>
					</div>
				</header>

				<Modal
					className='modal'
					overlayClassName='overlay'
					isOpen={this.state.postModalOpen}
					onRequestClose={this.closePostModal}
					contentLabel='Modal'
				>

					<div className="modal-content">
						<h4>Modal Header</h4>
					</div>

				</Modal>

			</div>
		);
	}
}

function mapStateToProps( { categories } ) {

	return {
		categories: Object.keys( categories ).reduce( ( c , k ) => {
			return [ ...c , categories[ k ] ]
		} , [] )
	}
}

export default connect( mapStateToProps )( TopBar );
