import React, { Component } from 'react';

class CollapsibleQAsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const items = this.props.list.map((li, index)=>{
                return(
                    <li className="list-in-QA" key={index}>{li}</li>
                );
        })
        return (  
            <div key={this.props.id} className="panel" style={{marginTop:"1em"}}>
                <div className="panel-heading cursorPointer collapsible-heading" data-toggle="collapse" href={"#collapse"+this.props.id}>
                    <h4 className="panel-title">
                        <a>{this.props.question}</a>
                    </h4>
                </div>
                <div id={"collapse"+this.props.id} className="panel-collapse ">
                    <div className="panel-body">
                        <div className="black-text">{this.props.answer ? this.props.answer.split('\n').map(i => {return <p key={Math.random()}>{i}</p> }): null}</div>
                        {
                            this.props.list
                            ?
                            <ul>
                            {items}
                            </ul>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CollapsibleQAsComponent;