import React, { Component } from "react";

class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="navbar-header">
        <a>
          <img className="site-logo" src="images/logo.png" alt="logo" />
        </a>
        <a className="nav-element">Getaways</a>
        <a className="nav-element">Tours</a>
        <a className="nav-element">Activities</a>
        <a className="nav-element">
          <i className="fa fa-search" />&nbsp;&nbsp;Search
        </a>
      </div>
    );
  }
}

export default NavHeader;
