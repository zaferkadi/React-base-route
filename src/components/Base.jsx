var React = require('react');

var Base = React.createClass({
    displayName: 'Base',
    render: function() {
        return (
        	<div>
        		<div>Header</div>
            		{this.props.children}
            	<div>Footer</div>
            </div>
        );
    }
});

module.exports = Base;