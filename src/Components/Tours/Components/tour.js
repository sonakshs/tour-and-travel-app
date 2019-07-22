import React, { Component } from "react";

class Tour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }
  render() {
    return (
      <div
        key={this.props.index + Math.random()}
        className="col-md-3 col-sm-6 col-12 card-custom"
      >
        <div
          onMouseEnter={() => this.setState({ hovered: true })}
          onMouseLeave={() => this.setState({ hovered: false })}
        >
          {this.state.hovered ? (
            <div className="card hovered-card">
              <p className="card-text custom-header-hovered">
                {this.props.name}
              </p>
              <div className="text-hovered">
                About the Activity:Climb aboard on your very own chartered boat
                and cruise through the sea to see the scenery of Bruwela and
                Bentota. You can relax and revel in a luxurious environment and
                also learn how to sail. You can take a jump in the waters or go
                snorkeling and paddle before.Get picked up from your hotels at
                around 6 AM and reach the Mirissa Harbor from where at around
                6.30 AM the boats will take you to the whale watching locations.
                The complete activity will take around 2-4 hours...
              </div>
              <div className="book-now-button">BOOK NOW</div>
            </div>
          ) : (
            <div className="unhovered-card">
              <img
                className="card-img-top card-image"
                src={this.props.imgSrc}
                alt=""
              />
              <div className="card-body custom-height">
                <p className="card-text custom-header">{this.props.name}</p>
                <div className="row">
                  <div className="col-6">
                    <p className="price">
                      <i className="fa fa-inr rupee-symbol" />
                      &nbsp;
                      {this.props.price}
                    </p>
                  </div>
                  <div className="col-6">
                    {this.props.stars === "4" ? (
                      <p className="review">
                        <i
                          aria-hidden="true"
                          className="fa fa-star star-filled"
                        />
                        <i
                          aria-hidden="true"
                          className="fa fa-star star-filled"
                        />
                        <i
                          aria-hidden="true"
                          className="fa fa-star star-filled"
                        />
                        <i
                          aria-hidden="true"
                          className="fa fa-star star-filled"
                        />
                        <i
                          aria-hidden="true"
                          className="fa fa-star star-unfilled"
                        />
                      </p>
                    ) : (
                      <p className="review">
                        <i
                          aria-hidden="true"
                          className="fa fa-star star-filled"
                        />
                        <i
                          aria-hidden="true"
                          className="fa fa-star star-filled"
                        />
                        <i
                          aria-hidden="true"
                          className="fa fa-star star-filled"
                        />
                        <i
                          aria-hidden="true"
                          className="fa fa-star star-filled"
                        />
                        <i
                          aria-hidden="true"
                          className="fa fa-star star-filled"
                        />
                      </p>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <del className="price-before">
                      <i className="fa fa-inr rupee-symbol" />
                      &nbsp;
                      {parseInt(this.props.price + 1000, 10)}
                    </del>
                  </div>
                  <div className="col-6 review">
                    {this.props.ratings}&nbsp;Ratings
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Tour;
