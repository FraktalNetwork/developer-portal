import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Input, Label } from 'reactstrap';

// import images


class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        grid1 : [
            { title : "About", link : "/about" },
            { title : "Community", link : "/community" },
            { title : "Products", link : "/products" },

            { title : "Contribute", link : "/contribute" },

        ],
        grid2 : [
            { title : "Blog", link : "/blog" },
            { title : "Chat", link : "https://community.fraktal.network" },
            { title : "Block Explorer", link : "/" },
            { title : "Wallet", link : "/" },

        ],
        grid3 : [
            { title : "Documentation", link : "/developer-portal" },
            { title : "Github", link : "https://github.com/FraktalNetwork" },
            { title : "APIs", link : "/" },
            { title : "Security", link : "/" },

        ]
    };
  }

  render() {
    return (
      <React.Fragment>
    
        <footer className="footer footer-bar">
            <Container className="text-center">
                <Row className="align-items-center">
                    <Col sm="12">
                        <div className="text-sm-left">
                            <p className="mb-0 text-center">© 2020 Fraktal Network. All Rights Reserved.</p>
                        </div>
                    </Col>


                </Row>
            </Container>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
