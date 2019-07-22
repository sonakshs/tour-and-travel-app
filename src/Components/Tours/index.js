import React, { Component } from "react";
import ToursComponent from "./Components/ToursComponent";
import "./style.css";

class Tours extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }
  componentDidMount() {
    var data = require("../../data/tours.json");
    var result = data["tours"];
    this.setState({ items: result });
  }
  render() {
    return (
      <div className="container">
        <ToursComponent
          data={this.state.items}
          heading=" Recommendations for Srilanka"
          slider={false}
        />
        <ToursComponent
          data={this.state.items}
          heading="Things to do in Srilanka"
          slider={true}
        />
        <ToursComponent
          data={this.state.items}
          heading="Srilanka Tours"
          slider={true}
        />
      </div>
    );
  }
}

export default Tours;
