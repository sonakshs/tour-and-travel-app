import React, { Component } from 'react';
import NavHeader from './Components/navHeader';
import DesktopNav from './Components/desktopNav';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <nav className="navbar site-nav hide-on-mobile">
                <NavHeader/>
                <div className="navbar-right " id="myNavbar">
                    <DesktopNav/>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;