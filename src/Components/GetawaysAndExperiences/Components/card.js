import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="col-6 col-sm-2 card-custom">
                <div className="margin-right">
                    <img className="fixed-dim-image" src={this.props.imgSrc} alt=""></img>
                    <div className="card-body box-shadow" style={{padding: 0}}>
                        <p className="card-header-text-guides" style={{color: '#3b444e'}}>{this.props.name}</p>
                        <p className="padded-text">{this.props.listings}&nbsp;Listings</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Card;