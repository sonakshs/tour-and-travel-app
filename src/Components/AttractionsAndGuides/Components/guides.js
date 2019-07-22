import React, { Component } from "react";
import GuideComponent from "./guideComponent";

class Guides extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const itemsRow1 = this.props.data.map((item, index) => {
      if (index <= 3) {
        return (
          <GuideComponent
            key={index}
            name={item.name ? item.name : ""}
            imgSrc={item.imgSrc ? item.imgSrc : ""}
          />
        );
      } else return null;
    });
    const itemsRow2 = this.props.data.map((item, index) => {
      if (index >= 4 && index <= 7) {
        return (
          <GuideComponent
            key={index}
            name={item.name ? item.name : ""}
            imgSrc={item.imgSrc ? item.imgSrc : ""}
          />
        );
      } else return null;
    });
    return (
      <section className="home-cat-sec text-center">
        <div className="header-text">
          {this.props.heading ? this.props.heading : ""}
        </div>
        <div className="container">
          <div className="row">{itemsRow1 ? itemsRow1 : null}</div>
          <div className="row">{itemsRow2 ? itemsRow2 : null}</div>
        </div>
      </section>
    );
  }
}

export default Guides;
