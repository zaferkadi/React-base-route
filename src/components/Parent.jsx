var React = require('react');
var Child = require('./Child.jsx');


var Parent = React.createClass({
	render: function(){
		var data = [{id:1,text:"A"},{id:2, text:"B"},{id:3, text:"C"}];

		var items = data.map(function(item){
			return (<Child key={item.id} text={item.text}/>);
		});
		return (
			<ul>{items}</ul>
		);
	}
});


module.exports = Parent;