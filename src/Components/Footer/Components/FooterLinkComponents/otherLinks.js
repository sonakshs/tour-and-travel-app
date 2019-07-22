import React, { Component } from 'react';

class OtherLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="col-sm-3 footer_links">
                <ul>
                    <li><a style={{'color':'#f9ae1f'}} data-no-turbolink="true">GoPro Passport Program</a></li>
                    <p className="footer_title_name">Suppliers</p>
                    <li><a style={{'color':'#f9ae1f'}} data-no-turbolink="true">List Your Activities</a></li>
                    <li><a style={{'color':'#f9ae1f'}}>Advertise with us</a></li>
                    <br/><p className="footer_title_name">Travel Agents</p>
                    <li><a style={{'color':'#f9ae1f'}}>Signup as Agent</a></li>
                    <li><a style={{'color':'#f9ae1f'}}>Agent Login</a></li>
                </ul>
            </div>
        );
    }
}
 
export default OtherLinks;