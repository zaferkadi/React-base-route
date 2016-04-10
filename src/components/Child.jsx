var React = require("react");

var Child = React.createClass({
	render : function(){
		return (<li>{this.props.text}</li>);
	}
});

module.exports = Child;
