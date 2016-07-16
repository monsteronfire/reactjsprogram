var React = require('react');
var ReactDOM = require('react-dom');

//var HelloWorld = React.createClass({
//  render: function() {
//    return (
//    <div>
//      Hello World
//    </div>
//    )
//  }
//});

var HelloUser = React.createClass({
  render: function() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
});

ReactDOM.render(<HelloUser name="Shaii" />, document.getElementById('app'));
