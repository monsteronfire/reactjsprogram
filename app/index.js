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

//var HelloUser = React.createClass({
//  render: function() {
//    return (
//      <div>Hello, {this.props.name}</div>
//    )
//  }
//});

//ReactDOM.render(<HelloUser name="Shaii" />, document.getElementById('app'));

var ShowList = React.createClass({
  render: function() {
    var listItems = this.props.names.map(function(friend) {
      return <li>{friend}</li>;
    });

    return (
        <div>
          <h3>Friends</h3>
          <ul>
            {listItems}
          </ul>
        </div>
    );
  }
});

var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen'];
var listItems = friends.map(function(friend) {
  return "<li>" + friend + "</li>";
});

console.log(listItems);
