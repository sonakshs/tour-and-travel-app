import React, { Component } from "react";
import Resources from "./FooterLinkComponents/resources";
import RecentBlogs from "./FooterLinkComponents/recentBlogs";
import OtherLinks from "./FooterLinkComponents/otherLinks";
import "../style.css";

class FooterLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Resources />
          <RecentBlogs />
          <OtherLinks />
        </div>
      </div>
    );
  }
}

export default FooterLinks;
