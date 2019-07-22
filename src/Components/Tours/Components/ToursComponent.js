import React, { Component } from "react";
import Tour from "./tour";

class ToursComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  render() {
    const itemsRow1 = this.props.data.map((item, index) => {
      if (index <= 3) {
        return (
          <Tour
            key={index}
            name={item.name ? item.name : ""}
            imgSrc={item.imgSrc ? item.imgSrc : ""}
            stars={item.stars ? item.stars : ""}
            ratings={item.ratings ? item.ratings : ""}
            price={item.price ? item.price : ""}
          />
        );
      } else return null;
    });
    const itemsRow2 = this.props.data.map((item, index) => {
      if (index >= 4 && index <= 7) {
        return (
          <Tour
            key={index}
            name={item.name ? item.name : ""}
            imgSrc={item.imgSrc ? item.imgSrc : ""}
            stars={item.stars ? item.stars : ""}
            ratings={item.ratings ? item.ratings : ""}
            price={item.price ? item.price : ""}
          />
        );
      } else return null;
    });
    return (
      <section className="home-cat-sec text-center">
        <div className="container">
          <div className="header-text">
            {!this.props.slider ? (
              <b style={{ color: "#f16f30" }}>Tour-and-Travels</b>
            ) : (
              ""
            )}
            {this.props.heading}
          </div>
          <div className="row">{itemsRow1}</div>
          <div className="row" style={{ marginBottom: "3em" }}>
            {itemsRow2}
          </div>
        </div>
      </section>
    );
  }
}

export default ToursComponent;
