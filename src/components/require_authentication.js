// HOC scaffold code
import React, { Component } from 'react';
// higher order component
import { connect } from 'react-redux';
export default function(ComposedComponent) {
	class Authentication extends Component {
		render() {
			console.log('this.props.authenticated', this.props.authenticated);
			// console.log('rendering composed component', ComposedComponent);
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
