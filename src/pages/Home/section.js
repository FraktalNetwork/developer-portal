import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// import images
import Services from "../../images/illustrator/services.svg";
import Services1 from "../../images/illustrator/31051.jpg";
import LandingImg from "../../images/illustrator/landingimg.png";
import LandingImgTsp from "../../images/illustrator/landingimgtransparent.png";

// Modal Video
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 d-table w-100 landing" id="home">
                            <Container>
                                <Row className="align-items-center">
                                    <Col lg={5} md={5}>
                                        <div className="title-heading mt-4">
                                            <h1 className="heading mb-3">Spreading Equality</h1>
                                            <p className="para-desc text-muted">By providing everyone access to the global economy, Fraktal creates a more connected, inclusive, and equal world.


                                          </p>
                                            <div className="watch-video mt-4 pt-2">
                                          {/*      <Link to="page-services" className="btn btn-primary mb-2 mr-2">Learn How</Link> */}
                                                <Link  onClick={this.openModal} to="#" className="video-play-icon watch text-dark mb-2"><i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-pill title-dark text-white position-relative play play-iconbar"></i> WATCH VIDEO</Link>
                                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />

                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={7} md={7} className="mt-0 pt-0 mt-sm-0 pt-sm-0">
                                        <img src={LandingImgTsp} alt="" className="topimg" />
                                    </Col>
                                </Row>
                            </Container>
                </section>
                <div className="position-relative">
                    <div className="shape overflow-hidden text-light">
                        <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Section;
