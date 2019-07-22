import React, { Component } from "react";

class RecentBlogs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-sm-6 footer_links">
        <ul>
          <p className="footer_title_name">Recent Blog Posts</p>
          <li>
            <a href="/">
              20 Places You Need To Visit In India With Your Best Friend
            </a>
          </li>
          <li>
            <a href="/">50 Best Honeymoon Destinations In India</a>
          </li>
          <li>
            <a href="/">
              25 Kickass International Trips Under 50k To Plan For 2015
            </a>
          </li>
          <li>
            <a href="/">52 Places To Visit In India Before You Turn 30</a>
          </li>
          <li>
            <a href="/">
              50 Countries Where Getting A Visa Is Easier Than Ordering A Pizza
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default RecentBlogs;
