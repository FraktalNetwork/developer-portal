import React, { Component } from 'react';

class SectionTitleLeft extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.children ?
                        this.props.children
                    :
                        <h4 className="title mb-4">{this.props.title}</h4>
                }
                <p className=""> {this.props.desc} </p>
                <p className="text-muted"> {this.props.desc2} </p>


            </React.Fragment>
        );
    }
}

export default SectionTitleLeft;
