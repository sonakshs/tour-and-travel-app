import React, { Component } from 'react';

class AttractionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
                <div className="col-3 unhovered-card-attractions">
                    <img className="card-img-top card-image" style={{width: '100%'}} src={this.props.imgSrc} alt=""></img>
                    <div className="card-body custom-height" style={{margin: 0}}>
                        <p className="card-text custom-header" style={{color:'#3b444f', fontSize: '1.2em'}}>{this.props.name}</p>
                        <p className="card-text custom-text" style={{color:'#898e95'}}>Lorem ipsum dolor sit amet, higa  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                        <div className="shadowed-box">
                            <p className="card-text custom-header" style={{color:'#3b444f', fontSize: '1.2em',height: '3.5em'}}>{this.props.activity}</p>
                            <div className="row">
                                <div className="col-6">
                                    <p className="price"><i className="fa fa-inr rupee-symbol"></i>&nbsp;{this.props.price}</p>
                                </div>
                                <div className="col-6">
                                    <div className="more-info-button">MORE INFO</div>
                                </div>
                            </div>
                        </div>
                        <div className="see-more-box">
                            <p className="see-more-text">See {this.props.more} More Tours</p>
                        </div>
                    </div>
                </div>
        );
    }
}
 
export default AttractionComponent;