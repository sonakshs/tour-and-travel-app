import React, { Component } from "react";
import CollapsibleQAsComponent from "./CollapsibleQAsComponents/index.js";
import "./style.css";

class CollapsibleFAQs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionAnswers: []
    };
  }
  componentDidMount() {
    var data = require("../../data/QAs.json");
    var result = Object.keys(data).map(function(key) {
      return data[key];
    });
    this.setState({ questionAnswers: result });
  }
  render() {
    const questionAnswersList = this.state.questionAnswers.map((item, id) => {
      return (
        <CollapsibleQAsComponent
          key={id}
          id={id}
          question={item.question ? item.question : ""}
          answer={item.answer ? item.answer : ""}
          list={item.list ? item.list : []}
        />
      );
    });
    return (
      <div className="container">
        <div className="header-text">
          What You Should Know More About Srilanka
        </div>
        <div className="questionAnswersDiv">
          <div className="panel-group">{questionAnswersList}</div>
        </div>
      </div>
    );
  }
}

export default CollapsibleFAQs;
