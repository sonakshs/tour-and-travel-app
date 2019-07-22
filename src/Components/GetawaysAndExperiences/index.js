import React, { Component } from "react";
import Getaways from "./Components/getaways";
import "./style.css";

class GetawaysAndExperiences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getaways: [],
      experiences: []
    };
  }
  componentDidMount() {
    var dataG = require("../../data/getaways.json");
    var resultG = dataG["getaways"];
    var dataE = require("../../data/experiences.json");
    var resultE = dataE["experiences"];
    this.setState({
      getaways: resultG,
      experiences: resultE
    });
  }
  render() {
    return (
      <div className="container">
        <Getaways
          data={this.state.getaways}
          heading="Nearby Getaways from Srilanka"
          slider={true}
        />
        <Getaways
          data={this.state.experiences}
          heading="Srilanka Experiences"
          slider={true}
        />
      </div>
    );
  }
}

export default GetawaysAndExperiences;
