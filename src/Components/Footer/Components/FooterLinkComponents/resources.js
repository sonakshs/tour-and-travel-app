import React, { Component } from "react";

class Resources extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-sm-3 footer_links">
        <ul style={{ listStyleType: "none" }}>
          <li className="change-on-hover">
            <a>About Us</a>
          </li>
          <li className="change-on-hover">
            <a>Tour-and-Travel Reviews</a>
          </li>
          <li className="change-on-hover">
            <a>Terms and Conditions</a>
          </li>
          <li className="change-on-hover">
            <a>Privacy Policy</a>
          </li>
          <li className="change-on-hover">
            <a>Copyright Policies</a>
          </li>
          <li className="change-on-hover">
            <a>Support</a>
          </li>
          <li className="change-on-hover">
            <a>Apps</a>
          </li>
          <li>
            <a style={{ color: "#f9ae1f" }}>We are Hiring</a>
          </li>
          <li>
            <a style={{ color: "#f9ae1f" }}>Gift an Experience</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Resources;
