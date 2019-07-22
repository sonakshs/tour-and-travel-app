import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      direction: null
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  // componentWillMount(){
  //   var data = require('../../data/carousel.json');
  //   var result = Object.keys(data).map(function(key) {
  //       return data[key];
  //   });
  //   this.setState({carouselData: result})
  // }
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }
  render() {
    // const images = this.state.carouselData.map((carousel, index) => {
    //     return(
    //       <Carousel.Item key={index}>
    //           <img
    //             className="d-block w-100"
    //             src={carousel.src}
    //             alt="First slide"
    //           />
    //           <Carousel.Caption>
    //             <h1>{carousel.heading}</h1>
    //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //           </Carousel.Caption>
    //       </Carousel.Item>
    //     )
    // });

    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 marginal-carousal"
            src="https://d3u4hzlr7ozpoo.cloudfront.net/assets/banner-image-things-to-do-a273c8e6efb958ca72e3c439a991f2eb.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div
              style={{
                textAlign: "center",
                fontSize: "70px",
                fontWeight: "500"
              }}
            >
              Srilanka
            </div>
            <h4
              style={{
                textAlign: "center",
                fontSize: "30px",
                fontWeight: "500"
              }}
            >
              <i>Experiential journeys will make you a storyteller</i>
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 marginal-carousal"
            src="https://d3u4hzlr7ozpoo.cloudfront.net/assets/banner-image-things-to-do-a273c8e6efb958ca72e3c439a991f2eb.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Tour-and-Travel Activities</h1>
            <p>Find best things to do and experience more!</p>
            <div className="carousel-button-custom">SEE ALL ACTIVITIES</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 marginal-carousal"
            src="https://d3u4hzlr7ozpoo.cloudfront.net/assets/banner-image-tours-ef50aa6ecfaf707fcc3ac0b73f418209.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Tours</h1>
            <p>Experiential journeys will make you a storyteller</p>
            <div className="carousel-button-custom">SHOW TOURS</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 marginal-carousal"
            src="https://d3u4hzlr7ozpoo.cloudfront.net/assets/banner-image-attractions-94bb1192b36f4ec0fccce53a5457fb78.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Tour-and-Travel Staycations</h1>
            <p>
              Do not forget to check out our handpicked list of attractions in
              Srilanka
            </p>
            <div className="carousel-button-custom">EXPLORE STAYCATIONS</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselComponent;
