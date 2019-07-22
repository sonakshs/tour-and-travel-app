import React, { Component } from 'react';
import Card from './card';

class Getaways extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const items= this.props.data.map((item, index)=>{
                   return(
                    <Card key={index} name={item.text ? item.text: '' } imgSrc={item.imgSrc ? item.imgSrc: '' }  listings={item.listings}/>
                )
       });
        return (  
            <section className="home-cat-sec text-center">
                <div className="header-text">{this.props.heading ? this.props.heading : ""}</div>
                <div className="container">
                <div className="row">
                    {items}
                </div>
                </div>
            </section>
        );
    }
}
 
export default Getaways;