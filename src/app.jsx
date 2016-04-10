var React = require ('react');
var ReactDOM = require ('react-dom');
var Parent = require('./components/Parent.jsx');

var Routes = require('./Routes.jsx');

var App = React.createClass({
	render : function () {
		return (
			<div><Parent/></div>
			);
	}
});


ReactDOM.render(Routes, document.getElementById("app"));