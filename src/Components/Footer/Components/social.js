import React, { Component } from "react";

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      social: []
    };
  }
  componentDidMount() {
    var data = require("../../../data/social.json");
    var result = Object.keys(data).map(function(key) {
      return data[key];
    });
    this.setState({ social: result });
  }
  render() {
    const items = this.state.social.map((item, index) => {
      return (
        <span key={index}>
          <a
            className={item.class}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            width={32}
            height={32}
          >
            <img src={item.imgScr} alt={item.alt} style={{}} />
          </a>
        </span>
      );
    });
    return (
      <div className="footer_social text-center">
        <div>{items}</div>
        <p className="copy-txt">
          <span>
            © 2019 <a href="https://github.com/sonakshs">Sonaksh Saraswat </a>.
            All rights reserved.{" "}
          </span>{" "}
        </p>
      </div>
    );
  }
}

export default Social;
