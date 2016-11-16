var React = require('react');
var Card = require('./card');

var List = React.createClass({
    render: function(props) {
        return (
            <div className="list">{this.props.title}
                <Card text="This is some text"/>
                <Card text="This is second text"/>
                <Card text="This is third text"/>
            </div>
            )
    }
});

module.exports = List;