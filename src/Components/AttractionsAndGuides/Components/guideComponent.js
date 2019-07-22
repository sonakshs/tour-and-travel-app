import React, { Component } from 'react';

class GuideComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="col-6 col-sm-3 card-custom">
                <div className="margin-right">
                    <img className="fixed-dim-image" src={this.props.imgSrc} alt=""></img>
                    <div className="card-body box-shadow" style={{padding: 0}}>
                        <p className="card-header-text-guides">{this.props.name}</p>
                        <p className="card-text-guides">A small island country in the Indian ocean, experiences and activities entail that there are a lot of things to do in Sri Lanka. From the am...</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default GuideComponent;