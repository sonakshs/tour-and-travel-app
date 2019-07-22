import React, { Component } from 'react';

class Questionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div style={{margin: '5em 0'}}>
                <div className="header-text">{this.props.heading ? this.props.heading : ""}</div>
                <textarea cols="40" style={{width: '100%', height: '6em', padding: '10px'}} placeholder="Please write your question here..."></textarea>
                <div className="sign-in-button" style={{width:'auto',padding: '0 10px', float: 'right'}}>Submit Question</div>
            </div>
        );
    }
}
 
export default Questionnaire;