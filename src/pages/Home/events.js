// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//Import Components

// Modal Video
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

//import images
import startUp from '../../images/icon/start-up.svg';

class Events extends Component {


    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <div className="bg-light rounded">
                            <Row className="align-items-center">
                                <Col lg="6">
                                    <img src={startUp} className="rounded img-fluid" alt="" />
                                </Col>

                                <Col lg="6" className="text-center">
                                    <div className="section-title p-5">


                                        <h4 className="title mb-4 mt-4">Make sure to join our next event!</h4>
                                        <p className="text-muted mx-auto para-desc mb-2">We will be hosting a kick-off party for Fraktal with our founding community! Everyone is welcome!</p>

                                        <p className="text-muted mx-auto para-desc mb-0">Date TBD</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>


                </section>
            </React.Fragment>
        );
    }
}

export default Events;
