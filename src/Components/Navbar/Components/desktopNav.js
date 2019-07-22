import React, { Component } from 'react';

class DesktopNav extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return (  
            <div className="nav navbar-nav top-nav hide-on-mobile" style={{'display':'inline'}}>
                <span style={{verticalAlign: 'super'}}><a className="nav-element"><span className="label label-primary">New</span><i className="fa fa-gift fa-2x"/>&nbsp;&nbsp;Gift An Experience&nbsp;</a></span>
                <span style={{verticalAlign: 'super'}}><a className="nav-element"><i className="fa fa-mobile fa-2x" aria-hidden="true"/>&nbsp;&nbsp;Get App&nbsp;</a></span>
                <span style={{verticalAlign: 'super'}}><a className="sign-in-button">Login</a></span>
            </div>
        );
    }
}
 
export default DesktopNav;