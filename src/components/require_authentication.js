// HOC scaffold code
import React, { Component } from 'react';
// higher order component
export default function(ComposedComponent) {
	class Authentication extends Component {
		render() {
			return <ComposedComponent {...this.props} />;
		}
	}
	return Authentication;
}

// // In some other location ... Not in this file...
// // We want to use this HOC
// import Authentication // This is my HOC
// import Resources // This the component I want to wrap
// const ComposedComponent = Authentication(Resources);
// // In some render method...
// <ComposedComponent/>
// HOC is a function that is called inside an existing component
