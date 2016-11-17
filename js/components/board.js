var React = require('react');
var List = require('./list');

var Board = React.createClass({
    onAddSubmit(event) {
        event.preventDefault();
        console.log('Submitted');
    },
    onAddInputChanged() {
        console.log('Changed');
    },
    render: function(props) {
        return (
            <div className="board">{this.props.title}
                <List onChange={this.onAddInputChanged} onSubmit={this.onAddSubmit} title="First"/>
                <List onChange={this.onAddInputChanged} onSubmit={this.onAddSubmit} title="Second"/>
                <List onChange={this.onAddInputChanged} onSubmit={this.onAddSubmit} title="Third"/>
            </div>
            )
    }
});

module.exports = Board;