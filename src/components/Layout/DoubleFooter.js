// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col, Form, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Components


//Import Images
import twitter from '../../images/icon/twitteralt.svg';
import github from '../../images/icon/github.svg';
import reddit from '../../images/icon/reddit.svg';
import medium from '../../images/icon/medium.svg';
import rocketChat from '../../images/icon/rocketchat.svg';
import rocketChatNormal from '../../images/icon/rocket-chat.svg';

class DoubleFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        grid1 : [
            { title : "About us", link : "/page-aboutus" },
            { title : "Services", link : "/page-services" },
            { title : "Team", link : "/page-team" },
            { title : "Pricing", link : "/page-pricing" },
            { title : "Project", link : "/page-work" },
            { title : "Careers", link : "/page-jobs" },
            { title : "Blog", link : "/page-blog" },
            { title : "Login", link : "/page-cover-login" },
        ],
        grid2 : [
            { title : "Terms of Services", link : "/page-terms" },
            { title : "Privacy Policy", link : "/page-privacy" },
            { title : "Documentation", link : "/documentation" },
            { title : "Changelog", link : "/changelog" },
            { title : "Components", link : "/components" },
        ]
    };
  }
    render() {
        return (
            <React.Fragment>
                <section className="section pt-0">

                    <Container>


                        <Row className="mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center footerSimple">

                            <Col xs="12" className="text-center">
                            <div className="bg-overlay bg-overlay-gradient2 bg-footer"></div>
                            <div className="productstitle">
                            <h2 className="title mb-4">Follow Us</h2>
                            </div>
                                <div className="section-title">
                                   {/* <h4 className="title mb-4">Connect</h4> */}

                                    <div className="mt-2">
                                    <ul className="list-unstyled mb-0 mt-4">
                                      <a href="https://github.com/FraktalNetwork" target="_blank">  <img src={github} className="footerIcon" /></a>
                                        <a href="https://twitter.com/FraktalNetwork" target="_blank">  <img src={twitter} className="footerIcon footerIconMiddle" /></a>
                                        <a href="https://www.reddit.com/r/FraktalNetwork/" target="_blank">  <img src={reddit} className="footerIcon footerIconMiddle" /></a>
                                          <a href="https://medium.com/@fraktal" target="_blank">  <img src={medium} className="footerIcon footerIconMiddle" /></a>
                                            <a href="https://community.fraktal.network" target="_blank">  <img src={rocketChat} className="footerIcon footerIconMiddle" /></a>

                                    </ul>
                                    </div>
                                    <br />

                                      <p className="text-muted para-desc mx-auto">Copyright 2020 Fraktal Network. All Rights Reserved.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <footer className={this.props.isLight ? "footer bg-light" : "footer"}>
                    <Container>
                        <Row>
                            <Col lg="4" xs="12" className="mb-0 mb-md-4 pb-0 pb-md-2" name="footercolumn">
                                <Link className={this.props.isLight ? "logo-footer text-dark" : "logo-footer"} to="#">Landrick<span className="text-primary">.</span></Link>
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
                                        <li key={key}><Link to={grid.link} className={this.props.isLight ? "text-muted" : "text-foot"}><i className="mdi mdi-chevron-right mr-1"></i> {grid.title}</Link></li>
                                        )
                                    }
                                </ul>
                            </Col>

                            <Col lg="3" md="4" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
                                <h4 className={this.props.isLight ? "text-dark footer-head" : "text-light footer-head"}>Usefull Links</h4>
                                <ul className="list-unstyled footer-list mt-4">
                                    {
                                        this.state.grid2.map((grid, key) =>
                                        <li key={key}><Link to={grid.link} className={this.props.isLight ? "text-muted" : "text-foot"}><i className="mdi mdi-chevron-right mr-1"></i> {grid.title}</Link></li>
                                        )
                                    }
                                </ul>
                            </Col>

                            <Col lg="3" md="4" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
                                <h4 className={this.props.isLight ? "text-dark footer-head" : "text-light footer-head"}>Newsletter</h4>
                                <p className="mt-4">Sign up and receive the latest tips via email.</p>
                                <Form>
                                    <Row>
                                        <Col lg="12">
                                            <div className={this.props.isLight ? "foot-subscribe foot-white form-group position-relative" : "foot-subscribe form-group position-relative"}>
                                                <Label className={this.props.isLight ? "text-muted" : ""}>Write your email <span className="text-danger">*</span></Label>
                                                <i className="mdi mdi-email ml-3 icons"></i>
                                                <Input type="email" name="email" id="emailsubscribe" className={this.props.isLight ? "form-control bg-light border pl-5 rounded" : "form-control pl-5 rounded"} placeholder="Your email : " required/>
                                            </div>
                                        </Col>
                                        <Col lg="12">
                                            <Input type="submit" id="submitsubscribe" name="send" className="btn btn-primary rounded w-100" value="Subscribe"/>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                    </footer>


                </section>
            </React.Fragment>
        );
    }
}
export default DoubleFooter;
