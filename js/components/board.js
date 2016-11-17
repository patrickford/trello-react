var React = require('react');
var ListContainer = require('./list-container');

var Board = React.createClass({
    // onAddSubmit(event) {
    //     event.preventDefault();
    //     console.log('Submitted');
    // },
    // onAddInputChanged() {
    //     console.log('Changed');
    // },
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