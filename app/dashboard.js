const React = require('react');
const { div } = React.DOM;

class DashboardComponent extends React.Component {
  render() {
    return div({}, 'I am nioAg');
  }
}

module.exports = React.createElement(DashboardComponent);
