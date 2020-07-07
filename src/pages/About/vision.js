// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';


// Import images
import aboutimage from '../../images/illustrator/include.png';

class Vision extends Component {


    render() {
        return (
            <React.Fragment>
                    <section className="section visionsection">
                        <Container>
                            <Row className="align-items-center">
                                <Col md={{size:6, order:1}} xs={{order:2}} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <div className="section-title mr-lg-5">
                                        <h4 className="title mb-4">The Fraktal Vision</h4>
                                        <p>At Fraktal we are working towards a future where everyone has an equal opportunity to succeed. To create a world that operates in an open and transparent fashion where everyone is included.</p>


                                    </div>
                                </Col>

                                <Col md={{size:6, order:2}} xs={{order:1}}>
                                    <img src={aboutimage} className="img-fluid" alt="" />
                                </Col>
                            </Row>
                        </Container>


                    </section>
            </React.Fragment>
        );
    }
}

export default Vision;
