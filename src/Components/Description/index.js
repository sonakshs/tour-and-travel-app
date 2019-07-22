import React, { Component } from "react";
import "./style.css";

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ showMore: !this.state.showMore });
  }
  render() {
    return (
      <div className="container description-text">
        <p>
          A land of myth, legend, history and one of the richest cultures, Sri
          Lanka is one of the hottest travel destinations and lures adventurers
          of all kinds. Perhaps you’re someone who loves the solitude of nature
          and steady walks through trails. Maybe you love relaxing by the sea
          with the sun warming your face and a cool breeze caressing your skin.
          Or, maybe it’s nightlife you crave and a little game of chance at a
          casino – whatever your thrill is,with the{" "}
          <b>best tourist places to visit in Sri Lanka</b>, this island nation
          has it all.
        </p>
        {this.state.showMore ? (
          <p>
            <br />
            Ravana’s Lanka has a long history and over 2,000 years of written
            record. It’s been mentioned in the epics Ramayana and Mahabharata
            too. Over the years, Sri Lanka witnessed occupation by the
            Portuguese, Dutch and the British and this colonization is evident
            from the colonial architecture, Catholicism, surnames and vocabulary
            that you’ll notice on your visit here.
            <br />
            <br />
            Although small, Sri Lanka has 8 UNESCO World Heritage Sites that
            must be visited as well as religious sites, numerous national parks,
            verdant tea estates and, of course, beaches. Take a scenic train
            ride past plantations and hills and try your hand at blackjack and
            poker at one of the many casinos. Tickle your taste buds with local
            favorites like rich curries, fragrant polos and the odd-smelling
            wood apple.
            <br />
            <br />
            Excited yet? You should be! With the{" "}
            <b>best tourist places to visit in Sri Lanka</b>, so much diversity
            and culture, there really is no place quite like Sri Lanka. If
            you’re still wondering if this is the destination to head to, read
            on and you’ll find yourself convinced!
          </p>
        ) : null}
        <div className="showMoreButton" onClick={() => this.handleClick()}>
          {this.state.showMore ? "Show Less" : "Show More..."}
        </div>
      </div>
    );
  }
}

export default Description;
