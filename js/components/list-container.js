var React = require('react');
var List = require('./list');
var Card = require('./card');

var ListContainer = React.createClass({
    getInitialState: function() {
        return {
            text: '',
            cards: [<Card key='1' text="This is some text"/>,
                <Card key='2' text="This is second text"/>,
                <Card key='3' text="This is third text"/>],
            title: ''
        }
    },
    onAddInputChanged: function(event) {
        this.setState({
            text: event.target.value
        })
    },
    onAddSubmit: function(event) {
        event.preventDefault();
        var len = this.state.cards.length;
        var arr = this.state.cards;
        arr.push(<Card key={len + 1} text={this.state.text} />)

        this.setState({
            cards: arr
        });
    },

    render: function(props) {
        return <List cards={this.state.cards} onChange={this.onAddInputChanged} onSubmit={this.onAddSubmit} title={this.props.title}/>
    }
});

module.exports= ListContainer;