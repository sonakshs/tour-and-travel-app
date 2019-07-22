import React, { Component } from "react";
import ButtonSection from "./Components/buttonSection";
import "./style.css";

class ButtonsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    var data = require("../../data/buttons.json");
    var result = Object.keys(data).map(function(key) {
      return data[key];
    });
    this.setState({ data: result });
  }
  render() {
    const items = this.state.data.map((item, index) => {
      return (
        <div className="buttons-section" key={index}>
          <div className="header-text">{item.heading ? item.heading : ""}</div>
          <div>
            <ButtonSection buttonsArray={item.buttons ? item.buttons : []} />
            <br />
          </div>
        </div>
      );
    });
    return <div className="container">{items}</div>;
  }
}

export default ButtonsSection;
