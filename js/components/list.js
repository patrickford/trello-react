var React = require('react');
var Card = require('./card');

var List = React.createClass({
    // handleSubmit(event) {
        
    //     props.onAddSubmit();
    // },
    
    render: function(props) {
        return (
            <div className="list">{this.props.title}
                <Card text="This is some text"/>
                <Card text="This is second text"/>
                <Card text="This is third text"/>
                <form className="form" onSubmit={this.props.onSubmit}>
                    <input type="text" name="input" onChange={this.props.onChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            
            )
    }
});

module.exports = List;