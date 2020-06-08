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
                  <a href="https://community.fraktal.network" target="_blank" className="btn btn-primary communitybutton mb-2 mr-2 frakButton">Join Fraktal<i className="mdi mdi-chevron-right"></i></a>



            </React.Fragment>
        );
    }
}

export default SectionLeft;
