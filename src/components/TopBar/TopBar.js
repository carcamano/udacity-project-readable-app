/**
 * Created by Felipe on 29/08/2017.
 */

import React , { Component } from 'react';
import { Link } from 'react-router-dom';

import './TopBar.css';


class TopBar extends Component {
	render() {
		return (
			<div>

				<nav className="nav-bar">
					<label htmlFor="toggle" className="nav-bar-label">Menu</label>
					<input type="checkbox" id="toggle" className="nav-bar-toggle"></input>
					<ul className="nav-bar-list">
						<li className="nav-bar-list-item">
							<Link className="nav-bar-link" to="/">Home</Link>
						</li>
						<li className="nav-bar-list-item">
							<label htmlFor="toggle-sub-1" className="nav-bar-sub-label">
								Categories<i className="fa fa-caret-down" aria-hidden="true"></i>
							</label>
							<input type="checkbox" id="toggle-sub-1" className="nav-bar-toggle"></input>
							<ul className="nav-bar-list">
								<li className="nav-bar-list-item">
									<a href="#" className="nav-bar-link">Menu Item 4.1</a>
								</li>
								<li className="nav-bar-list-item">
									<a href="#" className="nav-bar-link">Menu Item 4.2</a>
								</li>
								<li className="nav-bar-list-item">
									<a href="#" className="nav-bar-link">Menu Item 4.3</a>
								</li>
							</ul>
						</li>
						<li className="nav-bar-list-item">
							<a href="#" className="nav-bar-link">Add New Post</a>
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

			</div>
		);
	}
}

export default TopBar;
