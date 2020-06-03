import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SectionLeft extends Component {
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
                  <a href="https://community.fraktal.network" className="btn btn-primary mb-2 mr-2 frakButton">Join the Fraktal Community</a>



            </React.Fragment>
        );
    }
}

export default SectionLeft;
