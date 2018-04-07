import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker, createContainer } from "meteor/react-meteor-data";
import {pathFor, menuItemClass} from "/imports/modules/client/router_utils";
import {Loading} from "/imports/ui/pages/loading/loading.jsx";


export class Layout extends Component {
	constructor () {
		super();
	}

	componentDidMount() {
		$(document).on("click", function (e) {
			var clickover = $(e.target).closest(".dropdown-toggle").length;
			var opened = $(".navbar-collapse").hasClass("in");
			if (opened === true && !clickover) {
				$(".navbar-collapse").collapse("hide");
			}
		});

		$(document).on("keydown", function (e) {
			var opened = $(".navbar-collapse").hasClass("in");
			if (opened === true) {
				$(".navbar-collapse").collapse("hide");
			}
		});
	}

	render() {
		return this.props.data.currentUser ?
	<PrivateLayoutContainer content={this.props.content} />
:
	<PublicLayoutContainer content={this.props.content} />
}
}

export const LayoutContainer = withTracker(function(props) {
	var data = {};

	data.currentUser = Meteor.user();

	return { data: data };
})(Layout);
export class PublicLayout extends Component {
	constructor () {
		super();
	}

	render() {
		if(this.props.data.dataLoading) {
			return (
	<Loading />
);
		} else {
			return (
	<div className="layout-root">
		<div id="content" className="sticky-wrapper">
			<div id="navbar" className="navbar navbar-fixed-top navbar-default" role="navigation">
				<div className="navbar-container container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
							<span className="sr-only">
								Toggle navigation
							</span>
							<span className="icon-bar">
							</span>
							<span className="icon-bar">
							</span>
							<span className="icon-bar">
							</span>
						</button>
						<a className="navbar-brand" href="/">
						</a>
					</div>
					<div id="menu" className="collapse navbar-collapse">
						<PublicLayoutPublicMenu data={this.props.data} routeParams={this.props.routeParams} />
					</div>
				</div>
			</div>
			<div className="navbar-spacer">
			</div>
			{this.props.content}
		</div>
		<div id="footer" className="sticky-footer">
			<div className="footer-container container">
				<p className="text-muted">
				</p>
			</div>
		</div>
	</div>
);
		}
	}
}

export const PublicLayoutContainer = withTracker(function(props) {
		var isReady = function() {
		

		var subs = [
		];
		var ready = true;
		_.each(subs, function(sub) {
			if(!sub.ready())
				ready = false;
		});
		return ready;
	};

	var data = { dataLoading: true };

	if(isReady()) {
		

		data = {

			};
		

		
	}
	return { data: data };

})(PublicLayout);
export class PublicLayoutPublicMenu extends Component {
	constructor () {
		super();
		
	}

	componentWillMount() {
		/*TEMPLATE_CREATED_CODE*/
	}

	componentWillUnmount() {
		/*TEMPLATE_DESTROYED_CODE*/
	}

	componentDidMount() {
		/*TEMPLATE_RENDERED_CODE*/
	}

	

	render() {
		return (
	<ul id="menu-items" className="nav navbar-nav">
		<li id="menu-item-simple" className={menuItemClass('public_home')}>
			<a href={pathFor('public_home', {})}>
				<span className="item-title">
					Home
				</span>
			</a>
		</li>
		<li id="menu-item-simple" className={menuItemClass('dictionary')}>
			<a href={pathFor('dictionary', {})}>
				<span className="item-title">
					Dictionary
				</span>
			</a>
		</li>
		<li id="menu-item-simple" className={menuItemClass('register')}>
			<a href={pathFor('register', {})}>
				<span className="item-title">
					Register
				</span>
			</a>
		</li>
		<li id="menu-item-simple" className={menuItemClass('login')}>
			<a href={pathFor('login', {})}>
				<span className="item-title">
					Login
				</span>
			</a>
		</li>
	</ul>
);
	}
}
export class PrivateLayout extends Component {
	constructor () {
		super();
	}

	render() {
		if(this.props.data.dataLoading) {
			return (
	<Loading />
);
		} else {
			return (
	<div className="layout-root">
		<div id="content" className="sticky-wrapper">
			<div id="navbar" className="navbar navbar-fixed-top navbar-default" role="navigation">
				<div className="navbar-container container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
							<span className="sr-only">
								Toggle navigation
							</span>
							<span className="icon-bar">
							</span>
							<span className="icon-bar">
							</span>
							<span className="icon-bar">
							</span>
						</button>
						<a className="navbar-brand" href="/">
						</a>
					</div>
					<div id="menu" className="collapse navbar-collapse">
						<PrivateLayoutPrivateMenu data={this.props.data} routeParams={this.props.routeParams} />
					</div>
				</div>
			</div>
			<div className="navbar-spacer">
			</div>
			{this.props.content}
		</div>
		<div id="footer" className="sticky-footer">
			<div className="footer-container container">
				<p className="text-muted">
				</p>
			</div>
		</div>
	</div>
);
		}
	}
}

export const PrivateLayoutContainer = withTracker(function(props) {
		var isReady = function() {
		

		var subs = [
		];
		var ready = true;
		_.each(subs, function(sub) {
			if(!sub.ready())
				ready = false;
		});
		return ready;
	};

	var data = { dataLoading: true };

	if(isReady()) {
		

		data = {

			};
		

		
	}
	return { data: data };

})(PrivateLayout);
export class PrivateLayoutPrivateMenu extends Component {
	constructor () {
		super();
		
	}

	componentWillMount() {
		/*TEMPLATE_CREATED_CODE*/
	}

	componentWillUnmount() {
		/*TEMPLATE_DESTROYED_CODE*/
	}

	componentDidMount() {
		/*TEMPLATE_RENDERED_CODE*/
	}

	

	render() {
		return (
	<ul id="menu-items" className="nav navbar-nav">
		<li id="menu-item-simple" className={menuItemClass('private_home')}>
			<a href={pathFor('private_home', {})}>
				<span className="item-title">
					Private Home
				</span>
			</a>
		</li>
		<li id="menu-item-simple" className={menuItemClass('tutorial')}>
			<a href={pathFor('tutorial', {})}>
				<span className="item-title">
					Tutorial
				</span>
			</a>
		</li>
		<li id="menu-item-simple" className={menuItemClass('simulation')}>
			<a href={pathFor('simulation', {})}>
				<span className="item-title">
					Simulation
				</span>
			</a>
		</li>
		<li id="menu-item-simple" className={menuItemClass('discussion')}>
			<a href={pathFor('discussion', {})}>
				<span className="item-title">
					Discussion
				</span>
			</a>
		</li>
		<li id="menu-item-simple" className={menuItemClass('logout')}>
			<a href={pathFor('logout', {})}>
				<span className="item-title">
					Logout
				</span>
			</a>
		</li>
	</ul>
);
	}
}
