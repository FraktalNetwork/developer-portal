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
        <footer className={this.props.isLight ? "footer bg-light" : "footer"}>
            <Container>
                <Row>
                    <Col lg="3" md="3" xs="6" className="mb-4 mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
                    <h4 className={this.props.isLight ? "text-dark footer-head" : "text-light footer-head"}>Ecosystem</h4>
                    <ul className="list-unstyled footer-list mt-4">
                        {
                            this.state.grid1.map((grid, key) =>
                            <li key={key}><a href={grid.link} className={this.props.isLight ? "text-muted" : "text-foot"}> {grid.title}</a></li>
                            )
                        }
                    </ul>
                    </Col>

                    <Col lg="3" md="3" xs="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0 mb-4" name="footercolumn">
                        <h4 className={this.props.isLight ? "text-dark footer-head" : "text-light footer-head"}>Developers</h4>
                        <ul className="list-unstyled footer-list mt-4">
                            {
                                this.state.grid3.map((grid, key) =>
                                <li key={key}><a href={grid.link} className={this.props.isLight ? "text-muted" : "text-foot"}> {grid.title}</a></li>
                                )
                            }
                        </ul>
                    </Col>

                    <Col lg="3" md="3" xs="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
                        <h4 className={this.props.isLight ? "text-dark footer-head" : "text-light footer-head"}>Resources</h4>
                        <ul className="list-unstyled footer-list mt-4">
                            {
                                this.state.grid2.map((grid, key) =>
                                <li key={key}><a href={grid.link} target="_blank" className={this.props.isLight ? "text-muted" : "text-foot"}> {grid.title}</a></li>
                                )
                            }
                        </ul>
                    </Col>

                    <Col lg="3" md="3" xs="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
                        <h4 className={this.props.isLight ? "text-dark footer-head" : "text-light footer-head"}>Get Involved</h4>
                        <p className="mt-4">Every person has a role to play at Fraktal!
                        <a href="https://community.fraktal.network" target="_blank" className="btn btn-primary communitybutton mb-2 mr-2 frakButton">Join Fraktal</a></p>


                    </Col>
                </Row>
            </Container>
        </footer>
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
