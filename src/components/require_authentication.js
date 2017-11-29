// HOC scaffold code
import React, { Component } from 'react';
// higher order component
import { connect } from 'react-redux';
export default function(ComposedComponent) {
	class Authentication extends Component {
		// class level property
		static contextTypes = {
			router: React.PropTypes.object
		};
		componentWillMount() {
			if (!this.props.authenticated) {
				this.context.router.push('/');
			}
		}
		componentWillUpdate(nextProps) {
			if (!nextProps.authenticated) {
				this.context.router.push('/');
			}
		}
		// static creates a class level property (on the actual class) Authentication.contextTypes
		render() {
			// console.log(this.context);
			// console.log('this.props.authenticated', this.props.authenticated);
			return <ComposedComponent {...this.props} />;
		}
	}
	function mapStateToProps(state) {
		return { authenticated: state.authenticated };
	}
	return connect(mapStateToProps)(Authentication);
}

// // In some other location ... Not in this file...
// // We want to use this HOC
// import Authentication // This is my HOC
// import Resources // This the component I want to wrap
// const ComposedComponent = Authentication(Resources);
// // In some render method...
// <ComposedComponent/>
// HOC is a function that is called inside an existing component
