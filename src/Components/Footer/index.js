import React, { Component } from "react";
import Social from "./Components/social";
import FooterLinks from "./Components/footerLinks";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="site-footer" style={{ textAlign: "left" }}>
          <div className="container">
            <div>
              <img
                href=""
                style={{ height: "5em", margin: "0 0 1em 2em" }}
                src="../../../images/logo.png"
                alt="Logo"
              />
            </div>
            <FooterLinks />
          </div>
        </div>
        <Social />
      </div>
    );
  }
}

export default Footer;
