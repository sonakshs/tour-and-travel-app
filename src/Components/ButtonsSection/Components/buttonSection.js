import React, { Component } from 'react';

class ButtonSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const buttons = this.props.buttonsArray.map((button, i) => {
            return(
                <a key={i} className="buttons-section-button">{button.text}</a>
            )
        })
        return ( 
            <div>
                {buttons}
            </div>
        );
    }
}
 
export default ButtonSection;