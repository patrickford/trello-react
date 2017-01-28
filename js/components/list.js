var React = require('react');
var Card = require('./card');

var List = React.createClass({    
    render: function(props) {
        return (
            <div className="list">
                {this.props.title}
                {this.props.cards}
                 <form className="form" onSubmit={this.props.submitted}>
                     <input type="text" className="inputText" name="input" onChange={this.props.changed}/>
                     <input type="submit" value="Submit"/>
                 </form> 
            </div>            
        );
    }
});

module.exports = List;