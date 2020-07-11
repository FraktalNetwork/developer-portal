import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class LandingLeft extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.children ?
                        this.props.children
                    :
                        <h4 className="title mb-4">{this.props.title}</h4>
                }
                <p className="text-muted"> {this.props.desc} </p>
              <Button variant="contained" color="primary" href="/developer-portal-documentation">Get Started</Button>
                <Button variant="outlined" color="primary" href="https://community.fraktal.network" target="_blank">Developer Chat</Button>



            </React.Fragment>
        );
    }
}

export default LandingLeft;
