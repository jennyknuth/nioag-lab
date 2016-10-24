const React = require('react');
const { div } = React.DOM;

class DashboardComponent extends React.Component {
  render() {
    return div({}, 'YO!');
  }
}

module.exports = React.createElement(DashboardComponent);
