import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Input, Label } from 'reactstrap';

// import images


class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        grid1 : [
            { title : "About", link : "/page-aboutus" },
            { title : "Community", link : "/page-services" },
            { title : "Products", link : "/page-team" },
            { title : "Developers", link : "/page-pricing" },

        ],
        grid2 : [
            { title : "Blog", link : "/page-terms" },
            { title : "Chat", link : "/page-privacy" },
            { title : "Documentation", link : "/documentation" },
            { title : "Changelog", link : "/changelog" },
            { title : "Components", link : "/components" },
        ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer className={this.props.isLight ? "footer bg-light" : "footer"}>
            <Container>
                <Row>
                    <Col lg="4" xs="12" className="mb-0 mb-md-4 pb-0 pb-md-2" name="footercolumn">
                        <Link className={this.props.isLight ? "logo-footer text-dark" : "logo-footer"} to="#">Test<span className="text-primary">.</span></Link>
                        <p className={ this.props.isLight ? "mt-4 text-muted" : "mt-4"}>Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        <ul className="list-unstyled social-icon social mb-0 mt-4">
                            <li className="list-inline-item mr-1"><Link to="" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                            <li className="list-inline-item mr-1"><Link to="" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                            <li className="list-inline-item mr-1"><Link to="" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                        </ul>
                    </Col>

                    <Col lg="2" md="4" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
                        <h4 className={this.props.isLight ? "text-dark footer-head" : "text-light footer-head"}>Company</h4>
                        <ul className="list-unstyled footer-list mt-4">
                            {
                                this.state.grid1.map((grid, key) =>
                                <li key={key}><Link to={grid.link} className={this.props.isLight ? "text-muted" : "text-foot"}> {grid.title}</Link></li>
                                )
                            }
                        </ul>
                    </Col>

                    <Col lg="3" md="4" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
                        <h4 className={this.props.isLight ? "text-dark footer-head" : "text-light footer-head"}>Usefull Links</h4>
                        <ul className="list-unstyled footer-list mt-4">
                            {
                                this.state.grid2.map((grid, key) =>
                                <li key={key}><Link to={grid.link} className={this.props.isLight ? "text-muted" : "text-foot"}> {grid.title}</Link></li>
                                )
                            }
                        </ul>
                    </Col>

                    <Col lg="3" md="4" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
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
