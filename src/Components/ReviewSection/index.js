import React, { Component } from 'react';

class ReviewSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="review-section-container" style={{display: 'flex'}}>                
                <div className="col-md-4 col-md-offset-1 col-sm-4" style={{textAlign:'left'}}>
                    <p>User Reviews</p>
                    <p className="header-review-count"><i aria-hidden="true" className="fa fa-star star-filled"></i><i aria-hidden="true" className="fa fa-star star-filled"></i><i aria-hidden="true" className="fa fa-star star-filled"></i><i aria-hidden="true" className="fa fa-star star-filled"></i><i aria-hidden="true" className="fa fa-star star-filled"></i>&nbsp;2 Reviews</p>
                </div>
                <div className="col-md-7 col-sm-7">
                    <p style={{textAlign: 'right', marginRight: '3em', fontSize: '1em', fontWeight: '200'}}>Top Trusted Travel Brand</p>
                </div>
            </div>
        );
    }
}
 
export default ReviewSection;