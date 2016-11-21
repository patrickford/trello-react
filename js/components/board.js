var React = require('react');
var ListContainer = require('./list-container');

var Board = React.createClass({
    render: function(props) {
        return (
            <div className="board">{this.props.title}
                <ListContainer title="First"/>
                <ListContainer title="Second"/>
                <ListContainer title="Third"/>
            </div>
            )
    }
});

module.exports = Board;