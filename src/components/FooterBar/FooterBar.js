/**
 * Created by Felipe on 03/09/2017.
 */

import React , { Component } from 'react';

class FooterBar extends Component {
	render() {
		return (
			<div>
				<hr />
				<footer>
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-10 mx-auto">
								<ul className="list-inline text-center">
									<li className="list-inline-item">
										<a href="https://twitter.com/Exdcarca" rel="noopener noreferrer" target="_blank">
											<span className="fa-stack fa-lg">
												<i className="fa fa-circle fa-stack-2x"></i>
												<i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
											</span>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="https://www.facebook.com/Exdcarca" rel="noopener noreferrer" target="_blank">
											<span className="fa-stack fa-lg">
												<i className="fa fa-circle fa-stack-2x"></i>
												<i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
											</span>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="https://github.com/carcamano" rel="noopener noreferrer" target="_blank">
											<span className="fa-stack fa-lg">
												<i className="fa fa-circle fa-stack-2x"></i>
												<i className="fa fa-github fa-stack-1x fa-inverse"></i>
											</span>
										</a>
									</li>
								</ul>
								<p className="copyright text-muted">Coded by Felipe Lopes in September 2017 for Udacity Nanodegree React & Redux Course</p>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default FooterBar;
