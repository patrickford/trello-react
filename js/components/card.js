var React = require('react');

var Card = React.createClass({
    render: function(props) {
        
        return (
            <div className="card">
                {this.props.text}
            </div>
            )
    }
});

module.exports = Card;