import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Typist from 'react-typist';

//import images
import enterprise from '../../images/enterprise.jpg';

class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-260 d-table w-100" style={{ background: `url(${enterprise}) center center` }}>
                    <div className="bg-overlay bg-overlay-gradient2"></div>
                            <Container>
                                <Row>
                                    <Col xs="12">
                                        <div className="title-heading text-center landing">

                                            <h1 className="display-4 slogan"><Typist>
                                            <span> Make a Difference.</span>
                                            <Typist.Backspace count={18} delay={300} />
                                            <span>Change the World.</span>
                                            <Typist.Backspace count={17} delay={200} />
                                            <span>Start Today.</span>
                                            </Typist></h1>

                                            <div className="mt-4 pt-2">
                                                <Link to="#" className="btn btn-primary landingbutton">Join Fraktal</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                </section>

            </React.Fragment>
        );
    }
}

export default Landing;
