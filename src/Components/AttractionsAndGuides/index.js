import React, { Component } from "react";
import Attractions from "./Components/attractions";
import Questionnaire from "./Components/questionnaire";
import Guides from "./Components/guides";
import "./style.css";

class Tours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: [],
      attractions: []
    };
  }
  componentDidMount() {
    var dataG = require("../../data/guides.json");
    var resultG = dataG["guides"];
    var dataA = require("../../data/attractions.json");
    var resultA = dataA["attractions"];

    this.setState({
      guides: resultG,
      attractions: resultA
    });
  }
  render() {
    return (
      <div className="container">
        <Attractions
          data={this.state.attractions}
          heading="Attractions"
          iterable={false}
        />
        <Questionnaire heading="Ask a Question" ques={true} />
        <Guides
          data={this.state.guides}
          heading="Travel Guides for Srilanka"
          iterable={false}
        />
      </div>
    );
  }
}

export default Tours;
