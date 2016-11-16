var React = require('react');
var List = require('./list');

var Board = React.createClass({
    render: function(props) {
        return (
            <div className="board">{this.props.title}
                <List title="First"/>
                <List title="Second"/>
                <List title="Third"/>
            </div>
            )
    }
});

module.exports = Board;