// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Alert, FormGroup, Input, InputGroup, InputGroupAddon, Button, Card, CardBody } from 'reactstrap';

//Import Components


//Import Images
import aboutimage from '../../images/illustrator/enterprise.png';

class Mission extends Component {



    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <Row className="align-items-center">
                            <Col md="6">
                                <img src={aboutimage} className="mr-md-4" alt="" />
                            </Col>

                            <Col md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-5">
                                    <h4 className="title mb-4">Clean And Modern Code</h4>
                                    <p className="text-muted">We achieve our mission by creating an environment where individuals and companies (those) who are passionate about enacting change can effectively work together to produce cutting edge technology and deliver it to those who can benefit from it the most.</p>
                                    <p className="text-muted">While Fraktal produces some highly advanced technology, you do not need to have a technical background to join Fraktal and make a difference. There is a role for everyone to play to change the world with our technology (Fraktal) and make it a better place for everyone. </p>
                                    <Link to="#" className="btn btn-outline-primary">Start Now <i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>




                </section>
            </React.Fragment>
        );
    }
}

export default Mission;
