import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker, createContainer } from "meteor/react-meteor-data";
import {Meteor} from "meteor/meteor";
import {Loading} from "/imports/ui/pages/loading/loading.jsx";
import {mergeObjects} from "/imports/modules/both/object_utils";


export class LogoutPage extends Component {
	constructor () {
		super();
		this.onClose = this.onClose.bind(this);

	}

	componentWillMount() {
		
	}

	componentWillUnmount() {
		
	}

	componentDidMount() {
		

		Meteor.defer(function() {
			globalOnRendered();
		});
	}

	
	onClose(e) {
		e.preventDefault();
		FlowRouter.go("public_home", mergeObjects(this.props.data.routeParams, {  }));
	}

	render() {
		Meteor.logout(() => {});

		return (
	<Loading />
);
	}
}

export const LogoutPageContainer = withTracker(function(props) {
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

})(LogoutPage);
