import React from 'react';

class AppNavLink extends React.Component {
  render() {
    return <a className="nav-item nav-link" href={this.props.to} {...this.props}>{this.props.children}</a>
  }
}

export class AppDropDownNavLink extends React.Component {
  render() {
    return <a {...this.props} href={this.props.to} className="dropdown-item">{this.props.children}</a>
  }
}

export default AppNavLink;

